/*








NICE
KCB

전문금융 소비자여부를 선택하시기 바랍니다
연령을 입력하시기 바랍니다
대출용도를 선택하시기 바랍니다
보유자산을 선택하시기 바랍니다
현재소득을 선택하시기 바랍니다
미래예상소득을 선택하시기 바랍니다
부채를 선택하시기 바랍니다
고정지출을 선택하시기 바랍니다
연체정보를 선택하시기 바랍니다
신용점수를 입력하시기 바랍니다
변제방법을 선택하시기 바랍니다
이메일 주소를 입력하시기 바랍니다
유의사항 "내용 보기"를 클릭하여 내용을 확인하시기 바랍니다.

개인사업자만 신청 가능합니다.
금지, 제한업종의 경우 신청이 불가합니다.
https://www.ibk.co.kr/fup/customer/form/2022053115201429260014431270238.pdf
저촉사항이 있는 기업은 신청이 불가합니다.
사업자등록증 상 대표가 실질경영자인 경우만 신청 가능합니다.
공동대표가 등재된 사업자는 신청이 불가합니다.
신청기업이 주택기업이며 관계기업이 신보, 기보, 재단에 보증잔액(대출)이 없는 경우는 "아니요" 체크 후 신청 가능합니다.
신용보증기금 또는 기술신용보증기금에 보증잔액(대출)이 있으시면 신청이 불가합니다.
개업일 1년 미만은 신청 불가합니다.
최근 1년 이내 대표자(실제경영자)가 변경된 경우 신청이 불가합니다.
*/
const arrJudgeStepNm = ["정보제공동의", "본인인증", "서류수집", "서류전송현황", "정보입력", "사전심사신청"];
const arrLoanStepNm = ["보증승인정보","대출신청내역","여신거래약정","대출약관","대출실행"];
const pageList = [
    {
      id: 1,
      name: "고객정보 등록"
    }, 
    {
      id: 2,
      name: "상품안내"
    }, 
    {
      id: 3,
      name: "대출신청 전 사전안내"
    },
    {
      id: 4,
      name: "사전심사",
    },
    {
      id: 5,
      name: "신청 중인 대출 진행/조회/취소",
    },
    {
      id: 6,
      name: "대출신청",
    },
    {
        id: 7,
        name: "대출실행",
    }

];
const crdBruList = [
    {
        id : 1,
        name : "나이스",
        title : "NICE"
    },
    {
        id : 2,
        name : "올크레딧",
        title : "KCB"
    }
];

const emailList = [
    {
        id : 1,
        name : "",
        title : "직접입력",
    },
    {
        id : 2,
        name : "네이버",
        title : "naver.com",
    },
    {
        id : 3,
        name : "다음",
        title : "daum.net",
    },
    {
        id : 4,
        name : "구글",
        title : "gmail.com",
    },
    {
        id : 5,
        name : "한메일",
        title : "hanmail.net",
    },
    {
        id : 6,
        name : "네이트",
        title : "nate.com",
    },
    {
        id : 7,
        name : "야후",
        title : "yahoo.com",
    },
];
/*
let validList1 = [
    {
        id : 1,
        name : "",
        title : "전문금융 소비자여부",
        answer : ,
    },
    {
        id : 2,
        name : "",
        title : "연령",
        answer : ,
    },
    {
        id : 3,
        name : "",
        title : "대출용도",
        answer : ,
    },
    {
        id : 4,
        name : "",
        title : "보유자산",
        answer : ,
    },
    {
        id : 5,
        name : "",
        title : "현재소득",
        answer : ,
    },
    {
        id : 6,
        name : "",
        title : "미래예상소득",
        answer : ,
    },
    {
        id : 7,
        name : "",
        title : "부채",
        answer : ,
    },
    {
        id : 8,
        name : "",
        title : "고정지출",
        answer : ,
    },
    {
        id : 9,
        name : "",
        title : "연체정보",
        answer : ,
    },
    {
        id : 10,
        name : "",
        title : "신용점수",
        answer : ,
    },
    {
        id : 11,
        name : "",
        title : "변제방법",
        answer : ,
    },
    {
        id : 12,
        name : "",
        title : "이메일주소",
        answer : ,
    },
];
let validlist2 = [];
*/
function cmmData(props) {
    switch(props) {
        case 'crdBru'       : return crdBruList;
        case 'email'        : return emailList;
        case 'judgeStepNm'  : return arrJudgeStepNm;
        case 'loanStepNm'   : return arrLoanStepNm
        case 'page'         : return pageList;
        //case 'valid1' : return validList1;
        //case 'valid2' : return validlist2;
    }
    return null;
}

export default cmmData;