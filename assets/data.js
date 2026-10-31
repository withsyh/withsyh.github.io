/* =========================================================
   목록은 이 파일만 고치면 메인과 개별 페이지에 함께 반영됩니다.
   ========================================================= */

/* 연구 · 프로젝트 (main: true 이면 메인에도 노출) */
const RESEARCH = [
  { year: 2026, tag: "Digital Twin", title: "세종 디지털트윈 실험실", img: "https://ysong86.github.io/assets/thumbs/lab.jpg",
    desc: "행복도시 건물과 실제 지형을 3D 모형에 올려 그림자·일조, 금강 수위 시나리오, 출퇴근 정체를 시험합니다.",
    url: "https://ysong86.github.io/", main: true },
  { year: 2026, tag: "Water", title: "세종시 물환경 상황판", img: "https://ysong86.github.io/assets/thumbs/water.jpg",
    desc: "금강·미호강 수위와 강수, 하천 수질, 지하수, 기상을 실시간으로 모아 지도로 보여 줍니다.",
    url: "https://ysong86.github.io/", main: true },
];

/* 논문 · 보고서
   type: "journal"(학술논문) | "report"(연구보고서) | "conference"(학술발표) */
const PUBS = [
  { type: "journal", year: 2019,
    title: "Flood Forecasting and Warning System Structures: Procedure and Application to a Small Urban Stream in South Korea",
    src: "Song Y., Park Y., Lee J., Park M., Song Y. <i>Water</i>, 11(8), 1571.",
    url: "https://doi.org/10.3390/w11081571", main: true },
  /* 예시) 보고서 한 건 추가할 때
  { type: "report", year: 2026, title: "보고서 제목", src: "세종연구원, 정책연구 2026-00", url: "" },
  */
];

/* 경력 */
const CV = {
  "경력": [
    ["현재", "세종연구원 책임연구위원", ""],
    ["이전", "대전세종연구원 연구위원", "수자원·상하수도·도시방재 연구"],
  ],
  "위원회 활동": [
    ["2026", "물관리위원 위촉", ""],
  ],
  "학력": [
    ["박사", "한밭대학교 수자원공학 박사", ""],
  ],
};
