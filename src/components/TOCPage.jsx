import { CATEGORIES } from "../data/partners";

const CATEGORY_BADGE = {
  [CATEGORIES.MACHINE_TOOL]: "badge-machine",
  [CATEGORIES.PLASMA]: "badge-plasma",
  [CATEGORIES.SMT]: "badge-smt",
  [CATEGORIES.CASTING]: "badge-casting",
};

export default function TOCPage({ partners }) {
  return (
    <div className="a4-page toc-page">
      <div className="page-header-bar">
        <div className="page-header-accent" />
        <h2 className="page-header-title">목 차</h2>
      </div>

      <ul className="toc-list">
        {partners.map((p, idx) => (
          <li key={p.id} className="toc-item">
            <div className="toc-num">{idx + 1}</div>
            <div className="toc-info">
              <div className="toc-company">{p.companyName}</div>
              <div className="toc-equipment">{p.equipmentName}</div>
            </div>
            <div className="toc-dots" />
            <span className="toc-flag">{p.flag}</span>
            <span className={`toc-category-badge ${CATEGORY_BADGE[p.category] || "badge-machine"}`}>
              {p.category}
            </span>
          </li>
        ))}
      </ul>

      <div className="page-footer" style={{ marginTop: "auto" }}>
        <span className="footer-kami">KAMI Co., Ltd.</span>
        <span className="footer-page-num">www.kami.biz</span>
      </div>
    </div>
  );
}
