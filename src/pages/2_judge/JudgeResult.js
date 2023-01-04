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
import { ListGroup } from 'react-bootstrap';

function JudgeResult() {

  //const resultData = judgeResultData;
  const judgeItemList = judgeData;
  const { state } = useLocation();
  console.log(state);

  const navigate = useNavigate();
  if (!state) {
    return (
      <div></div>
    )
  } else {
    const result = state.result;
    let answer = state.value;
    if (answer.length === 0 || answer[6].id === 2 || answer[8].id === 0 || answer[9].value < 500) {
      let result = false;
      return (
        <>
        <h3><b>적합성·적정성 판단</b></h3>
        <ListGroup>
          <ListGroup.Item>
          <img src='/gImg/redcheck1.png' style={{padding:25, width:255}}></img>

            <br/>
            <br/>
            <h5 align="left" style={{ display: 'inline' }}><b>홍길동님의 적합성·적정성 판단결과 <div style={{ display: 'inline', color: 'red' }}>{result ? "적합" : "부적합"}</div>으로 확인됩니다.</b></h5>
            <br/>
            <br/>
            {answer.map(function (data, idx) {
              return (
                <div  align="left" style={{width:'100%', marginBottom:20}}>
                  <div  style={{ display: 'inline' ,width:'50%', color:'gray'}}><b>{judgeItemList[idx].title}</b></div>
                  <div  style={{ display: 'inline',  float:'right'}}>{(typeof data === "object") ? data.value : data}</div>
                </div>
              )
            })}
            
            <ListGroup style={{textAlign:'left', backgroundColor:'lightgray', paddingTop:20, width:'100%'}}>
            <div >
            <b>안내사항</b>
            </div>
            <br/>
            · 부적합 판정을 받으신 고객은, 당일자에는 대면 및 비대면 대출신청을 할 수 없습니다.
            <br/>
            · 확인서 재작성은 다음날부터 가능합니다.
            <br/>
            · 자세한 문의사항은 거래하실 영업점 또는 고객센터(1566-2566)으로 문의주시기 바랍니다.
            <br/>
            <br/>


            <Button
            variant='primary'
            style={{width:"100%", height:60}}
            onClick={() => { window.location.href = "/"; }}
            ><b>나가기</b></Button>
            </ListGroup>
          </ListGroup.Item>
        </ListGroup>
        </>
      )
    } else {
      function cbFooter(idx, navigate, link) {
        if (result) {
          //적합
          navigate(link);
        } else {
          //부적합
        }
      }
      setTimeout(()=>{
        navigate(
          "/judgestep2",{}
        )
      }, 2000)
      return (
        <>
          <h3><b>적합성·적정성 판단</b></h3>
          <ListGroup>
            <ListGroup.Item>
            <img src='/gImg/bluecheck.png'></img>
              <br />
              <br />
              <h5 align="left" style={{ display: 'inline' }}><b>홍길동님의 적합성·적정성 판단결과 <div style={{ display: 'inline', color: 'blue' }}>{result ? "적합" : "부적합"}</div>으로 확인됩니다.</b></h5>

            </ListGroup.Item>

          </ListGroup>

        </>
      )
    }
  }


}
export default JudgeResult;