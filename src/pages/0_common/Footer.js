import { useState, useEffect } from 'react';
import { Button, Navbar } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

/**
 * 각 화면 하단컴포넌트(버튼등) 출력
 * 사용법 : 
 * 1. import Footer from 'Footer.js';
 * 2. 해당화면 하단에 컴포넌트로 호출 
 * 3. props전송 ex)<Footer obj={{}} /> 
 *  obj형식은 Footer.js참고
 *
 */
function Footer(props) {

  const margin = {
    margin: 0, padding: 0, width: '100%'
  }
  /**
   * 각 컴포넌트에서 Footer에 보내는 props.obj의 propery 정의
   */
  const objVerif = {
    type: "",                 //ex)"button"
    disabled: true,           //ex)디폴드 disabled는 true
    text: [],                 //ex)[취소,확인]
    link: "",                 //ex)"/judgeStep3.js"
    callbackId: function(){}  //각 컴포넌트에 버튼클릭에 대한 콜백함수명 (각 컴포넌트에서 정의한 콜백함수)
  }
  /**
   * 각 컴포넌트에서 받아온 props.obj 속성과 Footer에서 정의한 object 속성 비교검증
   */
  useEffect(()=>{
    for(let key in objVerif) {
      if(!props.obj.hasOwnProperty(key) && (typeof objVerif[key] != typeof props.obj[key])) {
        console.log("props형식이 맞지 않습니다.");
        return null;
      }
    }
  },[]);
  // props = {
  //   obj : {
  //     type: "button",
  //     btnNum: 1,
  //     text: ["확인", "취소"],
  //     callbackId: actClick
  //   }
    
  // };
  const obj = props.obj;
  const type = obj.type;

  let [link, setLink] = useState(obj.link);
  const navigate = useNavigate();

  switch(type) {
    case "button" : 
      return (
        <Navbar style={margin}>
          {
            obj.text.map((data, idx)=>{
              return (
              <Button key={idx} variant={idx===0?"secondary":"primary"} size="lg" style={{width: '100%'}} onClick={()=>{setCallback(obj.callbackId, idx, navigate, link)}} disabled={obj.disabled}>
                {data}
              </Button>
              )  
            })
          }
        </Navbar>
      );
      
  }
}

function setCallback(callbackId, arg0, arg1, arg2) {

  if(typeof callbackId == 'function') {
    callbackId.call(callbackId, arg0, arg1, arg2);
  }else {
    console.log("콜백함수가 없습니다.");
    return;
  }
  
}

export default Footer;