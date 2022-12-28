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
        msg : "개인사업자만 신청 가능합니다."
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
        msg : "금지, 제한업종의 경우 신청이 불가합니다.\nhttps://www.ibk.co.kr/fup/customer/form/2022053115201429260014431270238.pdf"
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
        msg : "저촉사항이 있는 기업은 신청이 불가합니다."

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
        msg : "사업자등록증 상 대표가 실질경영자인 경우만 신청 가능합니다."
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
        msg : "공동대표가 등재된 사업자는 신청이 불가합니다."
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
        msg : "신청기업이 주택기업이며 관계기업이 신보, 기보 재단에 보증잔액(대출)이 없는 경우는 '아니요' 체크 후 신청 가능합니다."
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
        msg : "신용보증기금 또는 기술신용에 보증잔액(대출)이 있으시면 신청이 불가합니다."
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
        msg : "개업일 1년 미만은 신청이 불가합니다."

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
        msg : "최근 1년 이내 대표자(실제경영자)가 변경된 경우 신청이 불가합니다."
    },
    

    
];

export default data;