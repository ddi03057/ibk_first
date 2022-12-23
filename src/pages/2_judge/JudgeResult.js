import JudgeResultCss from '../css/JudgeResult.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer.js';
import data from '../json/judgeResultData.js';

function JudgeResult() {
    let jsonDetail = [];
    jsonDetail = data;
    return (
        <>
            <Table className='JudgeResultTable'>
                <thead>
                    <h3 className='title1'><b>적합성 적정성 고객정보 확인서(개인사업자용)</b></h3>
                    <br/>
                    <div>
                    <h5 className='title2' style={{backgroundColor: "LightCyan"}}>적합성 적정성 판단결과를 확인해 보시고 다음단계를 이어서 진행해주시기 바랍니다.</h5></div>
                    <br/>
                <tbody>
                    <tr align="left">
                        <td><b>적합성 적정성 판단 결과</b></td>
                        <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;적합</td>
                    </tr>
                    <br/>
                    <tr align="left">
                        <b>적성 정보</b></tr>
                    {jsonDetail.map(function (data, idx) {
                        return (
                            <tr align="left">
                                <td>{data.name}</td>
                                <td>{data.content}</td>
                            </tr>
                        )
                    })}
                </tbody>
                </thead>
            </Table>
            {/* Footer자리  */}
        </>
    )
}
export default JudgeResult;