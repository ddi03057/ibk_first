import JudgeResultCss from '../../css/JudgeResult.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from '../0_common/Header';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet, useLocation } from 'react-router-dom';
import Footer from '../0_common/Footer';
import judgeResultData from '../../json/judgeResultData.js';
import judgeData from '../../json/judgeStep1Data.js';

function JudgeResult() {

  //const resultData = judgeResultData;
  const judgeItemList = judgeData;
  const { state } = useLocation();
  console.log(state);
  
  const navigate = useNavigate();
  if(!state) {
    return (
      <div>에러페이지</div>
    )
  }else {
    const result = state.result;
    let answer = state.value;
    if(answer.length === 0 || !answer) {
      return (
        <div>에러페이지</div>
      )
    }else {
      function cbFooter(idx, navigate, link) {
        if(result) {
          //적합
          navigate(link);
        }else {
          //부적합
        }
      }
      return (
        <>
          <Header pageId={4}></Header>
          <h3><b>적합성 적정성 고객정보 확인서(개인사업자용)</b></h3>
          <br />
          <h5 style={{ backgroundColor: "LightCyan" }}>적합성 적정성 판단결과를 확인해 보시고 다음단계를 이어서 진행해주시기 바랍니다.</h5>
          <Table>
            <thead>
            </thead>
            <br />
            <tbody>
              <tr>
                <td align="left"><b>적합성 적정성 판단 결과</b></td>
                <td align="right">{result?"적합":"부적합"}</td>
              </tr>
              <br />
              <tr align="left">
                <b>적성 정보</b></tr>
              {answer.map(function (data, idx) {
                return (
                  <tr align="left">
                    <td>{judgeItemList[idx].title}</td>
                    <td>{(typeof data === "object")?data.value:data}</td>
                  </tr>
                )
              })}
            </tbody>
    
          </Table>
          <Footer obj={{
            type: "button",  
            disabled: false,
            text: ["확인"],  
            link: "/judgestep3",  
            callbackId: cbFooter
          }} ></Footer>
        </>
      )
    }
  }
  
  
}
export default JudgeResult;