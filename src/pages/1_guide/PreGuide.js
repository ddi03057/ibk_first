import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, ListGroup } from 'react-bootstrap';


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

            <div style={{ textAlign: "center", marginTop: 20 }}> <h4>대출신청 전 사전안내</h4></div>
            <ListGroup style={{ borderStyle: 'solid', marginTop: 20, width: '100%' }}>
                <ListGroup.Item style={{ textAlign: "left", backgroundColor: "#C0C0C0",fontSize: "large" }}>
                    <b>
                    본인확인 
                    </b>
                </ListGroup.Item>
                <ListGroup.Item align="left" >
                    <b>
                    본인 명의 휴대전화
                    </b>
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "left", fontSize: "large",backgroundColor: "#C0C0C0" }}>
                    <b>
                    스크래핑
                    </b>
                </ListGroup.Item>

                <ListGroup.Item align="left">

                    <p><b>국세청/정부24에 등록된 개인공동인증서</b></p>
                    <ul>
                        <li> 개인공동인증서 스마트폰 복사 가이드</li>
                        <Button>안내화면</Button>
                        <li>국세청/정부24 미가입(미등록) 고객을 위한 해당 사이트</li>
                        <Button onClick={() => { window.location.href = 'https://www.nts.go.kr'; }}>국세청</Button>
                        <Button onClick={() => { window.location.href = 'https://www.gov.kr'; }}>정부24</Button>
                        <li>개인공동인증서 등록 완료 후 스마트폰 내 개인공동인증서 확인</li>
                        <Button>개인공동인증서 조회(관리)</Button>
                        <li>전자서명을 위한 기업(사업자)공동인증서</li>
                        <Button>기업(사용자),공동인증서 조회(관리)</Button></ul>

                </ListGroup.Item>

                <ListGroup.Item style={{ textAlign: "left", fontWeight: "bold", fontSize: "large", backgroundColor: "#C0C0C0"}}>
                    대출 실행
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "left", fontWeight: "bold", fontSize: "large" }}>
                    <b>OTP</b>
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "left" }}>
                    <ul>
                    <p><li>보유 OTP 활성화 상태 및 동작 확인</li></p>
                    <Button>OTP 테스트</Button>
                    </ul>
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "left", fontWeight: "bold", fontSize: "large",backgroundColor: "#C0C0C0" }}>
                    유의사항
                </ListGroup.Item>
                <ListGroup.Item style={{ textAlign: "left" }}>
                    <b>계좌</b>
                    <li> 한도 계좌를 풀어두지 않은 상황에서 진행 시 취소 될 수 있음</li>
                    <li>1인 1계좌</li>
                    <li>최근 20일 이내에 사업</li>
                </ListGroup.Item>

                <ListGroup.Item style={{ textAlign: "left" }}>
                    <input type="checkbox" id='preinfocheck' onChange={e => {
                        changeHandler(e.currentTarget.checked, 'check');
                    }}
                        checked={checkedButtons.includes('check') ? true : false}></input>
                    &nbsp;위 내용을 확인하였습니다.
                </ListGroup.Item>
            <Link onClick={() => {

            }} to="/judgestep1"><Button
                variant='primary'
                className='PreGuidebutton'
                disabled={disabled}
                size="lg"
                style={{ width: '100%' }}>
                    확인
                </Button></Link>
                </ListGroup>
        </>
    );
}

export default PreGuide;