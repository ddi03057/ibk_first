//뎁스별 경로 정의
const PathConstants = {
  //진행상태조회
  //안내
    //상품안내
    //대출신청 전 사전준비안내
  //사전심사
    //심사준비: 고객동의(pdf)
    //(공통API)공동인증서
    //심사준비: 적합성 적정성 확인
    //심사준비: 적합성 적정성 결과
    //심사준비: 자가진단
    //사전심사자료작성(보증신청정보입력) (공통API)스크래핑?
    //스크래핑 서류제출상태
    //(진행상태)사전심사 상태/결과
  //보증심사
    //(진행상태)보증심사 상태/결과
    //보증승인내역 확인
    //(공통API)계좌개설
  //대출실행
    //대출신청서작성 및 실행요청
    //여신거래약정서 작성
    //비대면 약정
    //(공통API)공동인증서
    //대출 실행 결과
  //사후관리
    //(진행상태)대출현황 조회
    //대출상환
    //대출계약 철회 후 상환
    //대출계약 미철회 상환(일반상환)
  
  //depth 1
  MAIN: '/main',
  LOGIN: '/login', //로그인
  LOGOUT: '/logout', //로그아웃
  PROGRESS: '/progress', //진행상태
    //dummy
  GUIDE: '/guide',  //안내
  PREJUDGE: '/prejudge',  //사전심사
  GRTJUDGE: '/grtjudge', //보증심사
  LONAPPLY: '/lonapply', //대출신청
  LONEXECUTE: '/lonexecute', //대출실행
  POSTMANAGEMENT: '/postmanagement', //사후관리

  //depth2
  GUIDE_DETAIL: '/guide/detail',
  GUIDE_READY: '/guide/ready',

  PREJUDGE_CUSTAGREE: '/prejudge/custagree',
  PREJUDGE_SUITTEST: '/prejudge/suittest',
  PREJUDGE_SUITRESULT: '/prejudge/suitresult',
  PREJUDGE_SELFCHECK: '/prejudge/selfcheck',
  PREJUDGE_GRTINFOINPUT: '/prejudge/grtinfoinput',
  PREJUDGE_DOCSTATUS: '/prejudge/docstatus',
  
  GRTJUDGE_APPRINFO: '/grtjudge/apprinfo',
  GRTJUDGE_ACCOPEN: '/grtjudge/accopen',

  LONEXECUTE_APPLYINFOINPUT: '/lonexecute/applyinfoinput',
  LONEXECUTE_AGRMINPUT: '/lonexecute/agrminput',
  LONEXECUTE_UNTACTAGRM: '/lonexecute/untactagrm',
  LONEXECUTE_SUCCRESULT: '/lonexecute/succresult',
  LONEXECUTE_FAILRESULT: '/lonexecute/failresult',

  POSTMANAGEMENT_REPAY: '/postmanagement/repay',
  POSTMANAGEMENT_REVOKREPAY: '/postmanagement/revokrepay'


}

export default PathConstants;