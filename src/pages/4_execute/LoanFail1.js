import LoanFail1Css from '../css/LoanFail1.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function LoanFail1() {



    return (
        <>
            <Header pageId={5} />
            <Table className='LoanFail1Table'>
                <br />
                <div align='left'>
                    <h4><b>진행 현황</b></h4>
                </div><br />
                <div className='LoanFail1Parent'>
                    <div className='LoanFail1ChildLeft'><b>사전심사접수</b></div><div className='LoanFail1ChildRight'>사전심사 - 보증심사 - <b>심사완료</b></div>
                </div>
                <br />
                <div className='LoanFail1boxdiv'>
                <div className='NotCondition'><b>심사조건을 충족하지 않았습니다.</b></div>
                </div>
                <br />
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td>보증거절</td>
                    </tr>
                    <tr>
                        <td>신청일자</td>
                        <td>9999.01.01</td>
                    </tr>
                    <tr>
                        <td>신청금액</td>
                        <td>xxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>담당 영업점</td>
                        <td>을지로</td>
                    </tr>
                    <tr>
                        <td>담당자(연락처)</td>
                        <td>김보증(XXX-XXXX-XXXX)</td>
                    </tr>
                </tbody>
            </Table>
            <div style={{ color: 'red' }}><b>[유의사항]</b></div>
            <div>- 세부 내용은 담당 신용보증기금 영업점에 문의 바랍니다.</div>
            <Link onClick={() => {

            }} to="/">
                <Button variant='primary'>확인</Button></Link>
        </>

    )
}

export default LoanFail1;