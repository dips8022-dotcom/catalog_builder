export default function ContactPage() {
  return (
    <div className="a4-page contact-page">
      <div className="contact-top-accent" />

      <div className="contact-main">
        <div className="contact-logo-big">KAMI</div>
        <div className="contact-company-full">주식회사 카미 · KAMI Co., Ltd.</div>

        <div className="contact-divider" />

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-card-icon">🏢</div>
            <div className="contact-card-label">본사 주소</div>
            <div className="contact-card-value">
              서울특별시 금천구 가산디지털1로<br />
              (주소를 입력해 주세요)
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">📞</div>
            <div className="contact-card-label">전화 / 팩스</div>
            <div className="contact-card-value">
              TEL: 02-000-0000<br />
              FAX: 02-000-0001
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">✉️</div>
            <div className="contact-card-label">이메일 / 웹사이트</div>
            <div className="contact-card-value">
              info@kami.biz<br />
              www.kami.biz
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-card-icon">⏰</div>
            <div className="contact-card-label">영업 시간</div>
            <div className="contact-card-value">
              월–금: 09:00 ~ 18:00<br />
              토·일·공휴일 휴무
            </div>
          </div>
        </div>

        <p className="contact-tagline">
          "최고의 기술로 고객의 성공을 함께 만들어 갑니다."
        </p>
      </div>

      <div className="contact-bottom">
        © {new Date().getFullYear()} KAMI Co., Ltd. All rights reserved.
      </div>
    </div>
  );
}
