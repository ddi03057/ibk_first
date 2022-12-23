import LoanCheck1Css from '../css/LoanCheck1.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';





function LoanCheck1() {



    return (
        <>
            <Header pageId={5} />
            <Table className='LoanCheck1Table' >
                <br />
                <div align='left'>
                    <h4><b>진행 현황</b></h4>
                </div><br />
                <div className='LoanCheck1Parent'>
                    <div className='LoanCheck1ChildLeft'><b>사전심사접수</b></div><div className='LoanCheck1Right'><b>사전심사</b>- 보증심사 - 심사완료</div>
                </div>
                <div className='LoanCheckboxdiv'>
                <div className='LoanCheckMessage'><b>안내문자 메시지 수신 후 아래 사전심사 결과확인 버튼을 눌러 주시기 바랍니다.</b></div>
                </div>
                <br/>
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td>사전심사대기</td>
                    </tr>
                    <tr>
                        <td>업체명</td>
                        <td>김기은센터</td>
                    </tr>
                    <tr>
                        <td>대표자</td>
                        <td>김기은</td>
                    </tr>

                </tbody>
            </Table>
            <div style={{ color: 'red' }}><b>[유의사항]</b></div>
            <div align='left'>사전심사 결과조회는 당일. 진행 가능여부는 수일 내 결정하여 통지드릴 예정이며 <b style={{ color: 'red' }}>네이버 톡톡</b>과 휴대폰 문자메시지로 알려드립니다.</div>
            <Link onClick={() => {

            }} to="/loancheck2">
                <Button variant='primary' size="lg" block>확인</Button></Link>
        </>

    )
}

export default LoanCheck1;