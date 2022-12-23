import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import data from '../json/LoanEndData.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function LoanEnd() {

    let jsondata = data;

    return (
        <>
<Header pageId={7} stepCd={5} />
            <br />
            <br />
            <br />
            <div><img src='check-mark.png' width={200}></img></div>
            <br />
            <div><b>대출 실행완료</b></div>
            <br />
            <br />
            <tr align='left'><b>신청 완료 정보</b></tr>
            <br />
            <Table>
                <tbody>
                    {jsondata.map(function (data, idx) {
                        return (
                            <>
                            <tr>
                                <td align='left'>
                                    <b>{data.title}</b>
                                </td>
                                <td>
                                    {data.contents}
                                </td>
                                
                            </tr>
                            <br/>
                            <tr align='left'><Inji  data={data}/></tr>
                            </>
                        )
                    })}
                </tbody>
            </Table>
        </>

    )
}
function Inji(props) {
    if (props.data.id == "20") {
        return (
            <>
                * 인지세는 은행과 고객이 절반씩 부담합니다.
            </>
        )
    }
}

export default LoanEnd;