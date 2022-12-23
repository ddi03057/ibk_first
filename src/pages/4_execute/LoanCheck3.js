import LoanCheck3Css from '../css/LoanCheck3.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';





function LoanCheck3() {



    return (
        <>
            <Header pageId={5} />
            <Table className='LoanCheck3Table'>
                <br />
                <div align='left'>
                    <h4><b>진행 현황</b></h4>
                </div><br />
                <div className='LoanCheck3Parent'>
                    <div className='LoanCheck3ChildLeft'><b>사전심사접수</b></div><div className='LoanCheck3Right'>사전심사 - 보증심사 - <b>심사완료</b></div>
                </div>
                <br />
                <div className='LoanCheck3boxdiv'>
                <div className='LoanProgress'><b>아래 대출실행 버튼을 눌러 진행해주세요.</b></div>
                </div>
                <br />
                <br />
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td>보증승인</td>
                    </tr>
                    <tr>
                        <td>신청일자</td>
                        <td>9999.01.01</td>
                    </tr>
                    <tr>
                        <td>승인금액</td>
                        <td>xxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>대출실행 기한</td>
                        <td>9999.01.01</td>
                    </tr>

                </tbody>
            </Table>
            <div style={{ color: 'red' }}><b>[유의사항]</b></div>
            <div>- 대출실행 기한 이내에 대출실행을 완료해주시기 바랍니다. 경과 시 보증승인은 자동 취소됩니다.<br/>
            - 아래 버튼을 눌러 대출실행을 진행하시기 바랍니다. 대출실행은 영업일 09시 ~ 15시에만 가능합니다.</div>
            <Link onClick={() => {

            }} to="/">
                <Button variant='primary'>대출실행</Button></Link>
        </>

    )
}

export default LoanCheck3;