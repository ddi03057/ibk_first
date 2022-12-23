import StartLoan1Css from '../css/StartLoan1.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import data from '../json/StartLoanData.js';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function StartLoan1() {

    let jsonItemList = [];
    jsonItemList = data;

    return (
        <>
            <Header pageId={6} stepCd={1}/>

            <Table >
                <br />
                <div align='left'>
                    <h4><b>보증승인정보</b></h4>
                </div>
            {   
            jsonItemList.map(function (data, idx) {
              return (
                <tbody align='left'>
                    <tr >
                        <td>{data.name}</td>
                        <td>{data.content}</td>
                    </tr>
                    

                </tbody>
              )
            })
          }
                
            </Table>
            <div className='StartLoan1Option'>* 대출실행 기간 이내에 대출실행을 완료해주시기 바랍니다. 경과 시 보증승인은 자동 취소됩니다.
                <br/>
                * 보증료는 대출실행시점에 따라 변경될 수 있습니다.
            </div>
            <br/>
            <Link onClick={() => {

            }} to="/">
                <Button className='LoanCheckButton'variant='primary'>다음</Button></Link>
        </>

    )
}

export default StartLoan1;