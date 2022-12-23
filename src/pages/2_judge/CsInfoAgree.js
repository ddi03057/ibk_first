import CsInfoAgreeCss from '../css/CsInfoAgree.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/cstinfoAddData';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';



function CsInfoAgree() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header pageId={4} stepCd={1} />
            <Table className='document1'>
                <tr align='left'>
                    <td><b><div className='agreetitle'>고객정보 조회 위임 동의 <h5 style={{color: 'blue', display: 'inline'}}>[필수]</h5></div></b></td>
                    <td><Button className='showcontent' variant="outline-primary" onClick={() => { handleShow() }}>내용보기</Button></td><br/>
                </tr>
                <tr align='left'>
                    <td><b>서류수집기관 : 정부24</b></td>
                </tr><br/>
                <tr align='left'>
                    <td>&nbsp;정부24에서 서류를 수집하여 기업은행에 제출합니다.</td>
                </tr><br/>
                <tr align='left'>
                    <td><b>정부24에서 등록되어있는 개인용 공동인증서</b>(금융 결제원 발급분만 가능, 범용인증서 불가)가 필요합니다.</td>
                </tr><br/>

                <div className='document2'>
                <tr align='left'>
                <ul>
                    <tr>
                    <li><td style={{ color: 'red'}}>개인용 공동인증서를</td><td>준비해주세요.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td>먼저 정부24 회원가입 및 개인공동인증서 등록 필요합니다.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td>PC에서 개인용 공동인증서를 정부24에 등록하신 뒤 "기업은행 기업인터넷뱅킹" 접속&gt;인증센터&gt;공동인증서&gt;공동인증서복사&gt;스마트기기로 복사를 이용하시고 스마트폰에서는 "i-ONE기업뱅킹" 앱 실행&gt;인증센터&gt;공동인증서&gt;PC에서 가져오기 하셔야합니다.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td>서류 수집분은 당일까지만 유효하며, 당일 사전심사신청을 완료하지 않은 경우 다음 영업일 자동 취소됩니다.</td></li>
                    </tr><br/>
                </ul>
                </tr>
                </div>

            </Table>
            <NotiModal show={show} handleClose={handleClose} handleShow={handleShow}></NotiModal>
        </>
    )
}
function NotiModal(props) {


    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>고객정보 조회 위임 동의</Modal.Title>
            </Modal.Header>
            <Modal.Body>본인은 대출신청을 위하여 본인의 공동인증서를 정부24,국세청(홈텍스)에 로그인 후 사업자번호, 성명, 부가세신고서, 매입매출 정보등을 전자적 방식으로 조회,수집 및 기업은행에 제공하는것에대해 이해하였으며 동의합니다.
                <br />
                <br />
                <Table>
                    <thead>
                        <div className="container1">
                        <h5 style={{textAlign: 'center', backgroundColor: 'LightCyan'}}> 정보 제공에 관한 사항</h5>
                        </div>
                    </thead>
                    <tbody>
                        <tr>
                            <td>위임받는자</td>
                            <td>중소기업은행</td>
                        </tr>
                        <tr>
                            <td>위임내용</td>
                            <td>정부24, 국세청 홈텍스에 등록된 개인 및 사업자 관련 정보에 대한 조회 및 활용(서류제출)</td>
                        </tr>
                        <tr>
                            <td>조회/수집<br />거래정보</td>
                            <td>사업자등록증명, 납세증명서(국세), 지방세납세증명, 부가가치세과세표준증평(또는 면세사업자 수입금액증명), 부가세신고서, 매입매출처별세금계산서합계표, 표준재무제표증명</td>
                        </tr>
                        <tr>
                            <td>동의를 거부 할 권리 및 동의를 거부할 경우의 불이익</td>
                            <td>위 거래정보 조회 위임 동의는 계약의 체결 및 이행을 위하여 필수적이므로, 위 사항에 동의하셔야만 서비스 이용이 가능합니다.</td>
                        </tr>

                    </tbody>
                </Table>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={props.handleClose}>
                    동의
                </Button>
            </Modal.Footer>
        </Modal>
    );
}
export default CsInfoAgree;