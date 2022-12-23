let data = [
    {
        id : 0,
        title : "전문금융 소비자 여부",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "일반금융소비자" 
            },
            {
                id : 1,
                value : "전문금융소비자" 
            },
        ],
        msg : "전문금융소비자가 맞으십니까?\n전문금융소비자는 청약철회권을 행사할 수 없습니다.\n -전문금융소비자: 국가, 금융회사, 주권상장법인 등"

    },
    {
        id : 1,
        title : "연령",
        standardVal : "",
        type : "text",
        text : [
            {
                id : 0,
                value : "" 
            },
            
        ],

    },
    {
        id : 2,
        title : "대출용도",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "운전자금" 
            },
            {
                id : 1,
                value : "사설자금" 
            },
        ],
        msg : "사설자금이 맞으십니까?\n사설자금은 비대면 대출 대상이 아닙니다.\n  *사설자금: 부동산의 매입, 신축, 증축 등"

    },
    {
        id : 3,
        title : "보유자산",
        standardVal : "현재기준",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "1억원 미만" 
            },
            {
                id : 1,
                value : "1억원 이상 10억원 미만" 
            },
            {
                id : 2,
                value : "10억원 이상" 
            }
        ],

    },
    {
        id : 4,
        title : "현재소득",
        standardVal : "최근 1년 기준",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "1억원 미만" 
            },
            {
                id : 1,
                value : "1억원 이상 10억원 미만" 
            },
            {
                id : 2,
                value : "10억원 이상" 
            }
        ],

    },
    {
        id : 5,
        title : "미래예상소득",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "현재보다 감소" 
            },
            {
                id : 1,
                value : "현재수준 유지" 
            },
            {
                id : 2,
                value : "현재보다 증가" 
            }
        ],

    },
    {
        id : 6,
        title : "부채",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "1억원 미만" 
            },
            {
                id : 1,
                value : "1억원 이상 10억원 미만" 
            },
            {
                id : 2,
                value : "10억원 이상" 
            }
        ],

    },
    {
        id : 7,
        title : "고정지출",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "현재소득의 10% 미만" 
            },
            {
                id : 1,
                value : "현재소득의 10% 이상 50% 미만" 
            },
            {
                id : 2,
                value : "현재소득의 50% 이상" 
            }
        ],

    },
    {
        id : 8,
        title : "연체 정보",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "현재 연체 중이며 연체정리가 어려움" 
            },
            {
                id : 1,
                value : "현재 연체 중이나 정리예정" 
            },
            {
                id : 2,
                value : "현재 연체정보 없음" 
            }
        ],

    },
    {
        id : 9,
        title : "신용점수",
        standardVal : "",
        type : "text",
        

    },
    {
        id : 10,
        title : "변제방법",
        standardVal : "",
        type : "select",
        radioList : [
            {
                id : 0,
                value : "사업소득" 
            },
            {
                id : 1,
                value : "임대소득" 
            },
            {
                id : 2,
                value : "금융소득" 
            },
            {
                id : 3,
                value : "기타소득" 
            }
        ],

    },
    {
        id : 11,
        title : "서류 교부용 이멜일 주소 입력",
        standardVal : "",
        type : "text",
        

    }
];

export default data;