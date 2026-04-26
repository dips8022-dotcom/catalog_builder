import { useState, useRef, useCallback } from "react";
import partners, { CATEGORIES } from "./data/partners";
import CoverPage from "./components/CoverPage";
import TOCPage from "./components/TOCPage";
import PartnerPage from "./components/PartnerPage";
import ContactPage from "./components/ContactPage";
import "./styles/catalog.css";

const CATEGORY_ORDER = [
  CATEGORIES.MACHINE_TOOL,
  CATEGORIES.PLASMA,
  CATEGORIES.SMT,
  CATEGORIES.CASTING,
];

function getCategoryBadgeClass(category) {
  const map = {
    [CATEGORIES.MACHINE_TOOL]: "badge-machine",
    [CATEGORIES.PLASMA]: "badge-plasma",
    [CATEGORIES.SMT]: "badge-smt",
    [CATEGORIES.CASTING]: "badge-casting",
  };
  return map[category] || "badge-machine";
}

export default function App() {
  const [selected, setSelected] = useState(new Set());
  const [isExporting, setIsExporting] = useState(false);
  const catalogRef = useRef(null);

  const selectedPartners = partners.filter((p) => selected.has(p.id));
  const totalPages = selectedPartners.length > 0
    ? 2 + selectedPartners.length + 1
    : 0;

  const toggle = useCallback((id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const selectAll = useCallback(() => {
    setSelected(new Set(partners.map((p) => p.id)));
  }, []);

  const clearAll = useCallback(() => {
    setSelected(new Set());
  }, []);

  const exportPDF = useCallback(async () => {
    if (selectedPartners.length === 0) return;
    setIsExporting(true);

    try {
      const html2pdf = (await import("html2pdf.js")).default;
      const element = catalogRef.current;

      const dateStr = new Date()
        .toLocaleDateString("ko-KR")
        .replace(/\. /g, "-")
        .replace(".", "")
        .replace(/\.$/, "");

      const opt = {
        margin: 0,
        filename: `KAMI_카탈로그_${dateStr}.pdf`,
        image: { type: "jpeg", quality: 0.97 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          letterRendering: true,
          scrollX: 0,
          scrollY: 0,
        },
        jsPDF: {
          unit: "mm",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: ["css", "legacy"], before: ".a4-page" },
      };

      await html2pdf().set(opt).from(element).save();
    } catch (e) {
      console.error("PDF 변환 오류:", e);
      alert("PDF 변환 중 오류가 발생했습니다.");
    } finally {
      setIsExporting(false);
    }
  }, [selectedPartners]);

  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: partners.filter((p) => p.category === cat),
  })).filter((g) => g.items.length > 0);

  return (
    <div className="app-layout">
      {/* ===== Sidebar ===== */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <span className="kami-logo-text">KAMI</span>
          <span className="sidebar-subtitle">해외파트너사 카탈로그 생성기</span>
        </div>

        <div style={{ flex: 1, overflowY: "auto" }}>
          {grouped.map(({ category, items }) => (
            <div key={category}>
              <div className="sidebar-section">{category}</div>
              {items.map((p) => (
                <label key={p.id} className="partner-item">
                  <input
                    type="checkbox"
                    checked={selected.has(p.id)}
                    onChange={() => toggle(p.id)}
                  />
                  <div className="partner-item-info">
                    <div className="partner-item-name">
                      {p.flag} {p.companyName}
                    </div>
                    <div className="partner-item-sub">{p.equipmentName}</div>
                  </div>
                  <span
                    className={`partner-item-category ${getCategoryBadgeClass(p.category)}`}
                  >
                    {p.country}
                  </span>
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="sidebar-actions">
          <div style={{ display: "flex", gap: "6px" }}>
            <button
              className="btn btn-outline"
              style={{ fontSize: "12px" }}
              onClick={selectAll}
            >
              전체선택
            </button>
            <button
              className="btn btn-outline"
              style={{ fontSize: "12px" }}
              onClick={clearAll}
            >
              전체해제
            </button>
          </div>

          <p className="select-info">
            {selected.size > 0
              ? `${selected.size}개 파트너사 · 총 ${totalPages}페이지`
              : "파트너사를 선택하세요"}
          </p>

          <button
            className="btn btn-primary"
            onClick={exportPDF}
            disabled={selected.size === 0 || isExporting}
          >
            {isExporting ? "⏳ PDF 생성 중..." : "📄 PDF로 내보내기"}
          </button>

          <button
            className="btn btn-secondary"
            onClick={() => window.print()}
            disabled={selected.size === 0}
          >
            🖨️ 인쇄하기
          </button>
        </div>
      </aside>

      {/* ===== Catalog Preview ===== */}
      <main className="catalog-preview">
        {selectedPartners.length === 0 ? (
          <div className="preview-empty">
            <div className="preview-empty-icon">📋</div>
            <p className="preview-empty-text">왼쪽에서 파트너사를 선택하면</p>
            <p
              className="preview-empty-text"
              style={{ fontSize: "14px", color: "#ccc" }}
            >
              카탈로그 미리보기가 표시됩니다
            </p>
          </div>
        ) : (
          <div ref={catalogRef}>
            {/* 1. 표지 */}
            <div>
              <p className="page-number-label">표지 (1페이지)</p>
              <CoverPage partners={selectedPartners} />
            </div>

            {/* 2. 목차 */}
            <div>
              <p className="page-number-label">목차 (2페이지)</p>
              <TOCPage partners={selectedPartners} />
            </div>

            {/* 3. 파트너사별 상세 */}
            {selectedPartners.map((p, idx) => (
              <div key={p.id}>
                <p className="page-number-label">
                  {p.companyName} ({idx + 3}페이지)
                </p>
                <PartnerPage
                  partner={p}
                  pageNum={idx + 3}
                  totalPages={totalPages}
                />
              </div>
            ))}

            {/* 마지막. 연락처 */}
            <div>
              <p className="page-number-label">
                연락처 ({totalPages}페이지)
              </p>
              <ContactPage />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
