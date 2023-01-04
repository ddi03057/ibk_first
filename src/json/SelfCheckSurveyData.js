let data = [
  {
    id: 0,
    title: "주사업장 소유자",
    standardVal: "",
    type: "select",
    checklist: [
      {
        id: 0,
        value: "본인"
      },
      {
        id: 1,
        value: "배우자"
      },
      {
        id: 2,
        value: "타인"
      },
    ],

  },
  {
    id: 1,
    title: "주사업장 권리침해(최근 1년 이내)",
    standardVal: "",
    type: "select2",
    checklist: [
      {
        id: 0,
        value: "있음"
      },
      {
        id: 1,
        value: "없음"
      },

    ],

  },
  {
    id: 2,
    title: "주민등록상 주소지와 실제 거주지 주소가 같습니까?",
    standardVal: "",
    type: "select3",
    checklist: [
      {
        id: 0,
        value: "예"
      },
      {
        id: 1,
        value: "아니요"
      },

    ],

  },
  {
    id: 3,
    title: "주민등록상 주소지 소유자",
    standardVal: "",
    type: "select",
    checklist: [
      {
        id: 0,
        value: "본인"
      },
      {
        id: 1,
        value: "배우자"
      },
      {
        id: 2,
        value: "타인"
      },
    ],

  },
  {
    id: 4,
    title: "거주주택 소유자",
    standardVal: "",
    type: "select",
    checklist: [
      {
        id: 0,
        value: "본인"
      },
      {
        id: 1,
        value: "배우자"
      },
      {
        id: 2,
        value: "타인"
      },
    ],

  },
  {
    id: 5,
    title: "본인 또는 배우자 명의로 소유하고 있는 주택(실거주 불문)이 있습니까?",
    standardVal: "",
    type: "select3",
    checklist: [
      {
        id: 0,
        value: "예"
      },
      {
        id: 1,
        value: "아니요"
      },
      
    ],

  },
  {
    id: 6,
    title: "거주주택 권리침해(최근 1년 이내)",
    standardVal: "",
    type: "select2",
    checklist: [
      {
        id: 0,
        value: "있음"
      },
      {
        id: 1,
        value: "없음"
      },
      
    ],

  },
  {
    id: 7,
    title: "대출희망금액",
    standardVal: "",
    type: "input",
    checklist: [
      {
        id: 0,
        value: "본인"
      },
      {
        id: 1,
        value: "배우자"
      },
      {
        id: 2,
        value: "타인"
      },
    ],
    msg : "1백만원 단위로 입력 가능합니다."


  },
  {
    id: 8,
    title: "대출기간",
    standardVal: "",
    type: "selectbox",
    checklist: [
      {
        id: 0,
        value: "5년"
      },
      {
        id: 1,
        value: "8년"
      },
      
    ],

  },
 
];

export default data;