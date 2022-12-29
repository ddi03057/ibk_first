import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Container,Row,Col } from 'react-bootstrap';


function PreGuide() {
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const changeHandler = (checked, id) => {
        if (checked) {
            setDisabled(isAllChecked)
            setCheckedButtons([...checkedButtons, id]);
            console.log('체크 반영 완료');
        } else {
            setDisabled(isAllChecked)
            setCheckedButtons(checkedButtons.filter(Button => Button !== id));
            console.log('체크 해제 반영 완료');

        }
    };
    const isAllChecked = checkedButtons.length === 1;

    return (
        <>
               
        <div style={{textAlign:"center", marginTop:20}}> <h4>대출신청 전 사전안내</h4></div>
        <Container>
            
                <Row style={{ fontWeight: "bold"}}>
                    <Col >목적(단계)</Col>
                    <Col>준비 사항</Col>
                </Row>
                <hr/>
                <Row>
                    <Col>[ 본인확인 ]</Col>
                    <Col>본인 명의 휴대전화</Col>
                </Row>
                <hr/>

                <Row>

                    <Col> [스크래핑(정보수집)] </Col>
                    <Col><p><b>국세청/정부24에 등록된 개인공동인증서</b></p>
                        <p>- 개인공동인증서 스마트폰 복사 가이드</p>
                        <Button>안내화면</Button>
                        <p>- 국세청/정부24 미가입(미등록) 고객을 위한 해당 사이트</p>
                        <Button onClick={() => { window.location.href = 'https://www.nts.go.kr'; }}>국세청</Button>
                        <Button onClick={() => { window.location.href = 'https://www.gov.kr'; }}>정부24</Button>
                        <p>-개인공동인증서 등록 완료 후 스마트폰 내 개인공동인증서</p>
                        <Button>개인공동인증서 조회(관리)</Button></Col>
                </Row>
                <hr/>

                <Row>
                    <Col>[ 대출 실행 ]</Col>
                    <Col><p><b>OTP</b></p>
                        <p>-보유 OTP 활성화 상태 및 동작 확인</p>
                        <Button>OTP 테스트</Button></Col>
                </Row>
                <hr/>

                <Row>
                    <Col><input type="checkbox" id='preinfocheck' onChange={e => {
                        changeHandler(e.currentTarget.checked, 'check');
                    }}
                        checked={checkedButtons.includes('check') ? true : false}></input></Col>
                    <Col>위 내용을 확인하였습니다.</Col>
                </Row>

            
            


        </Container>
        <Link onClick={() => {

        }} to="/judgestep1"><Button
            variant='primary'
            className='PreGuidebutton'
            disabled={disabled}
            size="lg"
            style={{ width: '100%' }}>
                확인
            </Button></Link>
            </>
    );
}

export default PreGuide;