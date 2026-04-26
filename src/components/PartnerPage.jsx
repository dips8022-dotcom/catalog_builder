export default function PartnerPage({ partner, pageNum, totalPages }) {
  const { companyName, equipmentName, country, flag, category,
    companyIntro, effects, models, productLineup } = partner;

  return (
    <div className="a4-page partner-page">
      {/* Header */}
      <div className="partner-page-header">
        <div className="partner-page-header-left">
          <div className="partner-category-tag">{category}</div>
          <div className="partner-company-name">{companyName}</div>
          <div className="partner-equipment-name">{equipmentName}</div>
          <div className="partner-flag-country">
            <span>{flag}</span>
            <span>{country}</span>
          </div>
        </div>
        <div className="partner-page-header-right">
          <div className="partner-logo-placeholder">LOGO</div>
        </div>
      </div>

      {/* 회사 소개 */}
      <div className="detail-section">
        <div className="detail-section-title">회사 소개</div>
        <p className="detail-text">{companyIntro}</p>
      </div>

      {/* 도입 효과 */}
      <div className="detail-section">
        <div className="detail-section-title">도입 효과</div>
        <div className="effect-highlight">{effects}</div>
      </div>

      {/* 장비 모델 */}
      {models && models.length > 0 && (
        <div className="detail-section">
          <div className="detail-section-title">장비 모델 · 사양 · 특징</div>
          <div className="model-grid">
            {models.map((m, i) => (
              <div key={i} className="model-card">
                <div className="model-card-header">{m.name}</div>
                <div className="model-card-body">
                  <div className="model-row">
                    <span className="model-row-label">사양</span>
                    <span className="model-row-value">{m.features}</span>
                  </div>
                  <div className="model-row">
                    <span className="model-row-label">효과</span>
                    <span className="model-row-value">{m.effects}</span>
                  </div>
                  <div className="model-row">
                    <span className="model-row-label">장점</span>
                    <span className="model-row-value">{m.advantages}</span>
                  </div>
                  <div className="model-row">
                    <span className="model-row-label">적용분야</span>
                    <span className="model-row-value">{m.applications}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 장비군(제품) 소개 */}
      {productLineup && productLineup.length > 0 && (
        <div className="detail-section">
          <div className="detail-section-title">장비군 (제품 라인업)</div>
          <ul className="lineup-list">
            {productLineup.map((item, i) => (
              <li key={i} className="lineup-item">
                <div className="lineup-bullet" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Footer */}
      <div className="page-footer">
        <span className="footer-kami">KAMI Co., Ltd. — www.kami.biz</span>
        <span className="footer-page-num">
          {pageNum} / {totalPages}
        </span>
      </div>
    </div>
  );
}
