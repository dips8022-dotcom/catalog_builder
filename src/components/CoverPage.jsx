export default function CoverPage({ partners }) {
  const year = new Date().getFullYear();

  return (
    <div className="a4-page cover-page">
      <div className="cover-top-band" />
      <div className="cover-main">
        <div className="cover-logo-box">
          <span className="cover-logo-text">KAMI</span>
        </div>

        <p className="cover-company-name">KAMI Co., Ltd.</p>
        <h1 className="cover-title">
          해외 파트너사<br />장비 카탈로그
        </h1>
        <p className="cover-subtitle">Overseas Partners Equipment Catalog</p>

        <div className="cover-divider" />

        <p className="cover-partner-count">
          총 {partners.length}개 파트너사 수록
        </p>

        <div className="cover-partner-tags">
          {partners.map((p) => (
            <span key={p.id} className="cover-partner-tag">
              {p.flag} {p.companyName}
            </span>
          ))}
        </div>
      </div>

      <div className="cover-bottom">
        <span className="cover-bottom-left">KAMI Co., Ltd. — www.kami.biz</span>
        <span className="cover-bottom-right">{year}</span>
      </div>
    </div>
  );
}
