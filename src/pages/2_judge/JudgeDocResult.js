import JudgeDocResultCss from '../css/JudgeDocResult.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import data from '../json/judgeDocResultData.js';



function JudgeDocResult() {
    const reload = () => {
        window.location.reload("/judgedocresult");
    }
    let jsonDetail = [];
    jsonDetail = data;
    return (
        <>
            <Header pageId={4} stepCd={4} />
            <Table className='judgedocument'>
                <tr align='left'>
                    <h4 className='today'><b>사전심사 서류 수집 현황</b></h4><br/>
                    <td><Button className='refresh' variant="outline-primary" onClick={reload}>새로고침</Button></td>
                </tr>
                <div className='ResultCheck'>
                    <h5 style={{ backgroundColor: 'LightCyan'}}>사전심사서류 수집 여부를 확인합니다.</h5>
                </div>   
                
                <br/>
                <tbody align='left'>
                {
            jsonDetail.map(function (data, idx) {
                return(
                    <tr>
                        <td>{data.name}</td>
                        {/* 밸류값 받아서 분류해줘야함 */}
                        <td>{data.valuechecklist.value}</td>
                    </tr>
                    )})}
                </tbody>
                

            </Table>
            <div className='question'>
            <tr>
            <ul>
            <li>부적합 판단을 받으신 고객은 당일자에는 대면 및 비대면 대출 신청이 불가 합니다. 다만, 익영업일 부터 다시 적합성, 적정성 판단거래 수행이 가능합니다.</li>
            <li>자세한 문의사항은 거래하실 영업점 또는 고객센터(1566-2566)으로 문의 주시기 바랍니다.</li>
            </ul>
            </tr>
            </div>
            <br/>
        </>
    )
}

export default JudgeDocResult;