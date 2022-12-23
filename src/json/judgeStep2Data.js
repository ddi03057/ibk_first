let data = [
    {
        id : 1,
        title : "영리목적으로 사업을 영위하는 개인기업에 해당하십니까?",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],

    },
    {
        id : 2,
        title : "보증금지/제한 기업 또는 보증제한/취급유의/지역신용보증재단 우선취급업종 영위기업에 해당하십니까?",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],

    },
    {
        id : 3,
        title : "심사항목 저촉사항이 있으십니까?",
        standardVal : "1. 신청일 현재 금융기관 연체 중\n2. 신청일 현재 국세, 지방세, 4대보험 체납 중\n 3. 최근 3개월 이내 10일 이상 계속된 연체대출금 보유\n 4. 최근 1년 이내 당좌부도, 신용관리정보, 부실정보 보유\n 5. 최근 1년 이내 사업장 또는 거주주택에 대한 권리침해",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],
        

    },
    {
        id : 4,
        title : "신청기업의 실제경영자가 사업자등록증상 대표자입니까?",
        type : "select",   
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ], 

    },
    {
        id : 5,
        title : "사업자등록증상 공동대표자가 있습니까?",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],

    },
    {
        id : 6,
        title : "신청일 현재 신청기업 이외에 다른 기업을 운영 중에 있으며, 해당기업이 신용보증기금,기술보증기금, 지역신용보증재단에 보증잔액이 있습니까?",
        standardVal : "",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],
        
    },
    {
        id : 7,
        title : "신청일 현재 신용보증기금 또는 기술보증기금에 보증잔액이 있습니까?",
        standardVal : "",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],
        

    },
    {
        id : 8,
        title : "사업자등록증상 개업일로부터 1년이 지났습니까?",
        standardVal : "",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],
        

    },
    {
        id : 9,
        title : "최근 1년 이내 대표자(실제경영자)가 변동된 사실이 있습니까?",
        standardVal : "",
        type : "select",
        answer : [
            {
                name : "예",
                value : "y" 
            },
            {
                name : "아니요",
                value : "n" 
            },
        ],
    },
    {
        id : '*',
        title : "고객님께서 입력하신 내용은 심사 시 사실여부를 다시 한번 확인하게 됩니다. 신청대상이 아님에도 불구하고 실제와 다르게 입력하였을 경우 보증서 발급이 거절될수 있습니다.",
        standardVal : "",
        type : "text"
    },

    
];

export default data;