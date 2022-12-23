import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';





function PreJudgeResult() {



    return (
        <>
            <Header pageId={5} stepCd={6} />
            <br/>
            <br/>
            <br/>
            <div><img src='check-mark.png' width={200}></img></div>
            <br/>
            <div><b>사전심사 신청완료</b></div>
            <br/>
            <br/>
            <br/>
            <div>＊사전심사 결과조회는 당일. 진행 가능여부는 수일 내 결정하여 통지드릴 예정이며 <b style={{color:'red'}}>네이버 톡톡</b>과 휴대폰 문자메시지로 알려드립니다.
            <br/>
                ＊결과통지 후 후속거래는 대출메뉴 > 신청중인 대출 진행/조회/취소 메뉴에서 진행 가능합니다.
            </div>
            <br/>
            <br/>

            <Link onClick={() => {

            }} to="/loancheck1">
                <Button variant='primary'>신청중인 대출진행/조회/취소</Button></Link>
        </>

    )
}

export default PreJudgeResult;