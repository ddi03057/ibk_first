import PreGuideCss from '../css/PreGuide.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


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
        <Table className='preguidemain'>
            <thead>
                <h4 className='PreGuideh4'>대출신청 전 사전안내</h4>
                
            </thead>
            <tbody>
            <tr>
                    <th>목적(단계)</th>
                    <th>준비 사항</th>
                </tr>
                <tr>
                    <td>[ 본인확인 ]</td>
                    <td>본인 명의 휴대전화</td>
                </tr>
                <tr>
                
                    <td> [ 스크래핑(정보수집) ] </td>
                    <td><p>국세청/정부24에 등록된 개인공동인증서</p>
                    <p>- 개인공동인증서 스마트폰 복사 가이드</p>
                    <Button>안내화면</Button>
                    <p>- 국세청/정부24 미가입(미등록) 고객을 위한 해당 사이트</p>
                    <Button onClick={() => {window.location.href = 'https://www.nts.go.kr';}}>국세청</Button>
                    <Button onClick={() => {window.location.href = 'https://www.gov.kr';}}>정부24</Button>
                    <p>-개인공동인증서 등록 완료 후 스마트폰 내 개인공동인증서</p>
                    <Button onClick={() => {window.location.href = ''}}>개인공동인증서 조회(관리)</Button></td>
                </tr>
                <tr>
                    <td>[ 대출 실행 ]</td>
                    <td><p>OTP</p>
                    <p>-보유 OTP 활성화 상태 및 동작 확인</p>
                    <Button>OTP 테스트</Button></td>
                </tr>
                <tr>
                    <td><input type="checkbox" id='preinfocheck' onChange={e => {
                        changeHandler(e.currentTarget.checked, 'check');
                    }}
                    checked={checkedButtons.includes('check') ? true : false}></input></td>
                    <td>위 내용을 확인하였습니다.</td>
                </tr>

            </tbody>
            <Link onClick={() => {

}} to="/judgestep1"><Button variant='primary' className='PreGuidebutton' disabled= {disabled}>확인</Button></Link>
      

        </Table>
    );
}

export default PreGuide;