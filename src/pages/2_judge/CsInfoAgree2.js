import CsInfoAgree2Css from '../css/CsInfoAgree2.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/cstinfoAddData';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer.js';

/* 수정 */


function CsInfoAgree2() {


    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Header pageId={4} stepCd={1} />
            <Table className='document3'>
                <tr align='left'>
                    <td><b><span2>서류수집기관 : 국세청(홈텍스)</span2></b></td>
                </tr><br/>
                <tr align='left'>
                    <td><div id="div_1">국세청(홈텍스)에서 서류를 수집하여 기업은행에 제출합니다.</div></td>
                </tr><br/>
                <tr align='left'>
                    <td><b><span2>국세청(홈텍스)에 등록되어있는 개인용 공동인증서</span2></b>
                    <br/><br/><div id="div_1">(금융 결제원 발급분만 가능, 범용인증서 불가)가 필요합니다.</div></td><br/>
                </tr><br/>
                <div className='document4'>
                <tr align='left'>
                <ul>
                    <tr>
                    <li><td style={{ color: 'red' }}>개인용 공동인증서를 준비해주세요.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td> 먼저 국세청(홈텍스) 회원가입 및 개인공동인증서 등록 필요합니다.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td> PC에서 개인용 공동인증서를 국세청(홈텍스)에 등록하신 뒤 "기업은행 기업인터넷뱅킹" 접속&gt;인증센터&gt;공동인증서&gt;공동인증서복사&gt;스마트기기로 복사를 이용하시고 스마트폰에서는 "i-ONE기업뱅킹" 앱 실행&gt;인증센터&gt;공동인증서&gt;PC에서 가져오기 하셔야합니다.</td></li>
                    </tr><br/>
                    <tr>
                    <li><td> 서류 수집분은 당일까지만 유효하며, 당일 사전심사신청을 완료하지 않은 경우 다음 영업일 자동 취소됩니다.</td></li>
                    </tr><br/>
                </ul>
                </tr>
                </div>

            </Table>
            

        </>
        
    )
}
export default CsInfoAgree2;
