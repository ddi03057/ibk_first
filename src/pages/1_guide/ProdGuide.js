import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { ButtonGroup, ToggleButton, Table, Button, Form } from 'react-bootstrap';

function FirstPage() {

  return (
    <>
      <ListGroup style={{ borderStyle: 'solid', marginTop: 20, width: '100%' }} >
        <ListGroup.Item align="left" >
          <h5><b>홍길동님께서 받을 수 있는</b></h5>
          <h6><b>온라인 플랫폼 입점 소상공인 보증부 대출</b></h6>
          <div style={{ color: "#C0C0C0" }}>
            <b>IBK기업은행</b>과 <b>신용보증기금</b>의 업무협약을 통해
            출시한 개인사업자 <b style={{ color: "blue" }}>비대면 전용상품</b>
          </div>
          <br />
          <br />
          <Button variant='primary' style={{ borderRadius: 20, width: 150, fontSize: 20, marginRight: 10 }}>금액<br /><strong>1억원</strong></Button>
          <Button variant='primary' style={{ borderRadius: 20, width: 150, fontSize: 20 }}>금리<br /><strong>2.68%</strong></Button>
          <br />
          <br />
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "#C0C0C0" }} align="left">
          <b>
            상품요약
          </b>
        </ListGroup.Item>
        <ListGroup.Item align="left">
          <b>
            가입대상
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>
            네이버 스토어 입점 개인사업자(개업일로부터 6개월 이상)<br />
            ※ 단독 개인사업자
          </li>
          <b>
            자금용도
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            사업장 운영자금
          </li>
          <b>
            대출기간
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            최대 8년 이내(3년 거치 5년 균등분할)
          </li>
          <b>
            서비스 이용시간(은행 영업일만 가능)
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            사전심사.보증: 09:00 ~ 21:00<br />
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            대출실행: 09:00 ~ 15:00

          </li>
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "#DCDCDC" }} align="left">
          <b>
            대출정보
          </b>
        </ListGroup.Item>
        <ListGroup.Item align="left">
          <b>
            대출한도
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            최대 1억원 (90% 신용보증기금 보증서)
          </li>
          <b>
            대출금리
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            KORIBOR(3,6,12개월물 中 선택) + 가산금리 - 우대금리<br />
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            연체이자 및 지연배상금(은행여신약관 기준)
          </li>
          <b>
            상환방식
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            원금균등분할상환<br />
            원금을 매달 같은 금액으로 나누어 갚고, 대출 잔액에 해당하는 이자를 매달 납부하는 방법
          </li>
          <b>
            부대비용
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            중도상환해약금 면제 / - 수입인지세 5천만원 초과
          </li>
          <b>
            금융지원 제외대상
          </b>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            휴.폐업 중인 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            법인 또는 공동대표가 등재된 개인기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            연체대출금 보유 또는 국세·지방세 체납기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            보증 금지/제한업종을 영위하는 기업(도박,유흥,오락,점술 등)
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            재단 우선업종을 영위하는 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            기타 신용상태가 불량하다고 판단되는 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            기타 신용상태가 불량하다고 판단되는 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            개업 1년 미만 기업(심사일 기준 경과 여부)
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            최근 1년 이내 대표자(실제경영자)가 변동된 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            신용보증기금 또는 기술보증기금 잔액이 있는 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            신용관리대상정보 등재 중인 기업
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            보증기관의 보증사고 관련자(사고 및 대위변제)
          </li>
        </ListGroup.Item>
        <ListGroup.Item style={{ backgroundColor: "#DCDCDC" }} align="left">
          <b>
            유의사항
          </b>
        </ListGroup.Item>
        <ListGroup.Item align="left">
        <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            신보 비대면 보증은 주민등록번호당 최대 1억원이내 지원이 가능합니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            고객님의 신용도와 당행 및 신용보증재단의 심사 기준에 따라 대출 여부 및 한도가 결정됩니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            금융기관 신용 정보관리 대상 고객 및 당행 대출 부적격자는 대출이 제한될 수 있습니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            자세한 내용은 IBK고객센터(1588-2588)또는 기업은행 가까운 영업점으로 문의하여 주시기 바랍니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            상품금액 및 종류에 따라 부대비용이 발생할 수 있습니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            계약을 체결하기 전에 상품(서비스)설명서 및 약관을 반드시 확인하시기 바랍니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            일반금융소비자는 「금융소비자 보호에 관한 법률」제19조 제1항에 따라 IBK기업은행으로부터 충분히 설명을 받을 권리가 있으며, 그 설명을 이해한 후 거래하시기 바랍니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            상환능력에 비해 대출금이 과도할 경우, 귀하의 개인신용평점이 하락할 수 있습니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            개인신용평점 하락 시 금융거래와 관련된 불이익이 발생할 수 있습니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            일정기간 대출 원리금을 연체할 경우, 모든 원리금을 변제할 의무가 발생할 수 있습니다.
          </li>
          <li style={{ fontSize: 13,color: '#C0C0C0' }}>

            대출취급이 부적정한 경우(연체금 보유, 신용점수 등 낮음)대출이 제한될 수 있습니다.
          </li>
        </ListGroup.Item>
        <ListGroup.Item>
          <b>
            준법감시인 심의필: 제2021-3154호(2021.08.26)
            <br/>
            유효기간(2022.08.26)
          </b>
          
          <b>
            미확정----------------------------------------------
          </b>
        </ListGroup.Item>
      <Button>진행</Button>

      </ListGroup>
    </>
  )
}
export default FirstPage;