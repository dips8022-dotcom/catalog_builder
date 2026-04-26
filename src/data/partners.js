// KAMI 해외파트너사 데이터
// 각 파트너사의 정보를 여기에 등록하세요.

export const CATEGORIES = {
  MACHINE_TOOL: "공작기계",
  PLASMA: "플라즈마처리",
  SMT: "SMT",
  CASTING: "용해주조",
};

const partners = [
  {
    id: "partner-001",
    category: CATEGORIES.MACHINE_TOOL,
    country: "일본",
    flag: "🇯🇵",
    companyName: "YASDA PRECISION TOOLS",
    equipmentName: "초정밀 머시닝센터",
    companyLogo: null,
    companyImage: null,
    companyIntro:
      "YASDA Precision Tools K.K.는 1936년 창업 이래 초정밀 공작기계 전문 제조사로, 일본을 대표하는 머시닝센터 브랜드입니다. 극한의 정밀도를 요구하는 항공우주, 의료기기, 반도체 금형 분야에서 세계적인 신뢰를 받고 있습니다.",
    effects:
      "나노 수준의 가공 정밀도 실현, 장시간 가공 시 열변위 최소화, 금형 품질 향상을 통한 최종 제품 불량률 절감",
    models: [
      {
        name: "YBM Vi40",
        features:
          "스핀들: 40,000rpm 고속 스핀들 / 이송속도: X·Y 40m/min, Z 32m/min / 테이블: 400×400mm",
        effects: "소형 정밀 금형 가공에 최적화, 고속·고정도 동시 실현",
        advantages:
          "독자 개발 열변위 보정 시스템, 고강성 박스 구조 컬럼, 진동 감쇠 기술",
        applications: "스마트폰 금형, 의료기기 부품, 광학 렌즈 금형",
      },
      {
        name: "YBM 950V",
        features:
          "스핀들: 20,000rpm / 테이블: 950×520mm / 가공 정밀도: ±0.001mm",
        effects: "대형 정밀 금형·구조 부품의 고정도 가공",
        advantages: "고강성 구조, 자동 공구 교환(ATC) 40개, 온도 보정 기술",
        applications: "자동차 금형, 항공우주 구조 부품, 반도체 장비 부품",
      },
    ],
    productLineup: [
      "YBM Vi 시리즈 — 초정밀 소형 머시닝센터",
      "YBM V 시리즈 — 범용 고정밀 머시닝센터",
      "YBM Si 시리즈 — 수평형 초정밀 머시닝센터",
      "PX 시리즈 — 초정밀 지그보링머신",
    ],
  },
  {
    id: "partner-002",
    category: CATEGORIES.MACHINE_TOOL,
    country: "스위스",
    flag: "🇨🇭",
    companyName: "KELLENBERGER",
    equipmentName: "유니버설 원통연삭기",
    companyLogo: null,
    companyImage: null,
    companyIntro:
      "스위스 St. Gallen에 본사를 둔 KELLENBERGER는 1917년 설립된 원통연삭기 분야 세계 최고 수준의 제조사입니다. 정밀 연삭 기술로 100년 이상의 역사를 이어오며 자동차·항공·의료 분야 글로벌 고객에게 신뢰받고 있습니다.",
    effects:
      "Ra 0.05μm 이하의 초정밀 표면 조도 실현, 원통도 0.5μm 보증, 생산성·품질 동시 향상",
    models: [
      {
        name: "KEL-VARIA",
        features:
          "센터 간 거리: 400~1,500mm / 공작물 최대 무게: 150kg / 내·외경 동시 연삭 가능",
        effects: "단일 척킹으로 내·외경·단면 복합 연삭, 셋업 시간 대폭 단축",
        advantages:
          "CNC 제어 B축(선회 헤드), 자동 드레싱 유닛 내장, 측정 프로브 옵션",
        applications: "유압 실린더, 스핀들, 베어링 내외륜, 모터 샤프트",
      },
      {
        name: "KEL-VISTA",
        features:
          "센터 간 거리: 650~2,000mm / 자동화 로봇 인터페이스 / 스마트 연삭 소프트웨어",
        effects: "무인 자동화 연삭 라인 구축, 야간 무인 운전 가능",
        advantages: "모듈형 설계, Industry 4.0 연동, 원격 진단 기능",
        applications: "자동차 구동축, 항공엔진 샤프트, 대형 유압 로드",
      },
    ],
    productLineup: [
      "KEL-VARIA — 범용 유니버설 원통연삭기",
      "KEL-VISTA — 자동화 대응 원통연삭기",
      "KEL-VERA — 소형 정밀 원통연삭기",
      "VOUMARD — 내경 연삭기",
    ],
  },
  {
    id: "partner-003",
    category: CATEGORIES.PLASMA,
    country: "미국",
    flag: "🇺🇸",
    companyName: "ENERCON INDUSTRIES",
    equipmentName: "대기압 플라즈마 표면처리 시스템",
    companyLogo: null,
    companyImage: null,
    companyIntro:
      "ENERCON Industries는 1966년 설립 이래 표면처리 기술의 선두 기업으로, 코로나 처리·플라즈마 처리·화염 처리 분야에서 세계 1위의 시장 점유율을 보유하고 있습니다. 포장, 자동차, 전자, 의료 산업에서 광범위하게 사용되고 있습니다.",
    effects:
      "접착력 200% 이상 향상, 인쇄·코팅 밀착성 극대화, 화학약품 미사용 친환경 처리",
    models: [
      {
        name: "Dyne-A-Mite IT",
        features:
          "처리 폭: 최대 2,500mm / 라인 속도: 최대 600m/min / 전극 수명: 5,000시간+",
        effects:
          "고속 생산 라인에서 균일한 표면 활성화, 잉크·접착제 접착력 대폭 향상",
        advantages: "수냉식 전극으로 과열 방지, 비접촉 처리, 롤-투-롤 연속 처리",
        applications: "필름·포장재 인쇄 전처리, 라벨 코팅, 식품 포장",
      },
      {
        name: "BD-20 Plasma Treater",
        features:
          "처리 폭: 25~600mm / 소형 벤치탑 타입 / 3D 형상 처리 가능",
        effects: "복잡한 3D 형상의 국소 플라즈마 처리, 소면적 정밀 처리",
        advantages: "핸드 건 타입 옵션, 로봇 암 마운트 가능, 질소·공기 선택",
        applications: "의료기기 표면 활성화, PCB 세정, 자동차 부품 도장 전처리",
      },
    ],
    productLineup: [
      "Dyne-A-Mite 시리즈 — 코로나 처리 시스템",
      "BD 시리즈 — 대기압 플라즈마 처리기",
      "Flame Treater — 화염 처리 시스템",
      "UV/Ozone Treater — UV 표면처리 시스템",
    ],
  },
  {
    id: "partner-004",
    category: CATEGORIES.SMT,
    country: "독일",
    flag: "🇩🇪",
    companyName: "ERSA GmbH",
    equipmentName: "선택적 솔더링 / 리플로우 솔더링 시스템",
    companyLogo: null,
    companyImage: null,
    companyIntro:
      "1921년 독일 Wertheim에서 설립된 ERSA는 솔더링 기술 분야 100년 전통의 세계 선도 기업입니다. 핸드 솔더링 기구부터 완전 자동화 솔더링 시스템까지 SMT·전자 조립 산업의 전 공정을 아우르는 솔루션을 제공합니다.",
    effects:
      "솔더 불량률 99% 이상 감소, 혼합 기술(THT+SMD) 단일 공정 처리, 생산 유연성 극대화",
    models: [
      {
        name: "VERSAFLOW 4/55",
        features:
          "기판 폭: 50~508mm / 처리량: 최대 1,800 포인트/시간 / 플럭싱·예열·솔더 3구간",
        effects:
          "선택적 솔더링으로 THT 부품 완벽 처리, 리드리스 공정 전환 없이 혼재 기판 처리",
        advantages: "듀얼 솔더팟, 멀티 노즐, 질소 분위기 옵션, 비전 검사 통합",
        applications: "자동차 ECU, 산업용 컨트롤러, 전력 변환 장치",
      },
      {
        name: "HOTFLOW 4/14",
        features:
          "존 수: 14존(가열 10 + 냉각 4) / 기판 폭: 최대 508mm / 질소 옵션",
        effects:
          "납 없는 솔더(무연) 공정 완벽 대응, 균일한 온도 프로파일로 리플로우 품질 보증",
        advantages: "에너지 절약 모드, 원격 모니터링, 레시피 관리 소프트웨어",
        applications: "스마트폰 메인보드, 서버 PCB, LED 조명 모듈",
      },
    ],
    productLineup: [
      "VERSAFLOW 시리즈 — 선택적 솔더링 시스템",
      "HOTFLOW 시리즈 — 리플로우 솔더링 오븐",
      "POWERFLOW 시리즈 — 웨이브 솔더링 시스템",
      "SMARTFLOW 시리즈 — 소형 인라인 솔더링",
    ],
  },
  {
    id: "partner-005",
    category: CATEGORIES.CASTING,
    country: "이탈리아",
    flag: "🇮🇹",
    companyName: "ITALPRESSE GAUSS",
    equipmentName: "알루미늄 다이캐스팅 머신",
    companyLogo: null,
    companyImage: null,
    companyIntro:
      "ITALPRESSE GAUSS는 이탈리아 북부에 본사를 둔 알루미늄·마그네슘 다이캐스팅 전문 기업으로, 60년 이상의 역사를 보유하고 있습니다. 자동차 경량화 트렌드에 맞춰 대형 구조 부품 다이캐스팅 분야에서 세계 최고 수준의 기술력을 자랑합니다.",
    effects:
      "부품 경량화 30~50% 실현, 복잡 형상 일체화 성형으로 조립 공수 절감, 용탕 손실 최소화",
    models: [
      {
        name: "IP 1650 F",
        features:
          "형체력: 1,650톤 / 사출 속도: 최대 8m/s / 진공 다이캐스팅 옵션 / 실시간 공정 모니터링",
        effects:
          "중형 자동차 부품(서브프레임, 기어박스 하우징) 고정밀 성형, 기공 불량 최소화",
        advantages:
          "에너지 회생 유압 시스템, 자동 윤활, Industry 4.0 데이터 연동",
        applications: "자동차 엔진 블록, 기어박스, 서스펜션 부품",
      },
      {
        name: "IP 4400 Giga",
        features:
          "형체력: 4,400톤 / 초대형 구조 부품 성형 / 멀티 슬라이드 금형 대응",
        effects:
          "테슬라형 기가캐스팅 공법 대응, 차체 구조 부품 단일 성형으로 60개 부품 → 1개 통합",
        advantages: "초고속 충진, 전기차 플랫폼 최적화, 자동화 취출 로봇 통합",
        applications: "전기차 배터리 하우징, 차체 리어 플로어, 프런트 구조 부품",
      },
    ],
    productLineup: [
      "IP F 시리즈 — 중소형 콜드챔버 다이캐스팅",
      "IP Giga 시리즈 — 대형 구조 부품 기가캐스팅",
      "HP 시리즈 — 핫챔버 다이캐스팅(아연·마그네슘)",
      "진공 다이캐스팅 시스템 — 고진공 공정 솔루션",
    ],
  },
];

export default partners;
