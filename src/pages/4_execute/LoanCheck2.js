import LoanCheck2Css from '../css/LoanCheck2.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';





function LoanCheck2() {



    return (
        <>
            <Header pageId={5} />
            <Table className='LoanCheck2Table'>
                <br />
                <div align='left'>
                    <h4><b>진행 현황</b></h4>
                </div><br />
                <div className='LoanCheck2Parent'>
                    <div className='LoanCheck2ChildLeft'><b>사전심사접수</b></div><div className='LoanCheck2Right'>사전심사 - <b>보증심사</b> - 심사완료</div>
                </div>
                <br />
                <div className='LoanCheck2boxdiv'>
                <div className='OnsiteAudit'><b>사업장 현장 실사 및 심사 예정</b></div>
                </div>
                <br />
                <br />
                <tbody align='left'>
                    <tr >
                        <td>진행단계</td>
                        <td>보증심사 중</td>
                    </tr>
                    <tr>
                        <td>신청일자</td>
                        <td>9999.01.01</td>
                    </tr>
                    <tr>
                        <td>신청금액</td>
                        <td>xxxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>예상대출금액</td>
                        <td>xxxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>예상보증금액</td>
                        <td>xxxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>예상보증료</td>
                        <td>xxxx.xxx.xxx원</td>
                    </tr>
                    <tr>
                        <td>예상보증료율</td>
                        <td>xx.xx%</td>
                    </tr>

                </tbody>
            </Table>
            <div style={{ color: 'red' }}><b>[유의사항]</b></div>
            <div>- 신용보증기금 영업점 직원의 사업장 현장실사를 통해 최종 결과가 확정됩니다.<br/>
            - 현장실사 시 특이사항이 있는 경우 심사결과가 변동될 수 있습니다.<br/>
            - 신청일부터 최종승인까지 최대 10 영업일 소요됩니다.<br/>
            - 최종 승인 이후 보증료 납부. 대출실행 가능합니다.<br/>
            - 기타 사항은 담당 신용보증기금 영업점에 문의바랍니다.</div>
            <Link onClick={() => {

            }} to="/loancancle">
                <Button variant='primary'>보증신청 취소</Button></Link>
        </>

    )
}

export default LoanCheck2;