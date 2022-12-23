import { useState, useEffect } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import cmmData from '../common/cmmData.js';

import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * 각 화면 제목, 진행상태 띠 출력
 * 사용법 : 
 * 1. import Header from 'Header.js';
 * 2. 해당화면 상단에 컴포넌트로 호출 
 * 3. 페이지아이디, 단계코드 props전송 ex)<Header pageId={1} stepCd={2}/> 
 * 단계코드, 페이지아이디 cmmData.js 참고
 *
 */
function Header(props) {

  const pageList = cmmData("page");
  let arrStepNm = [];
  
  if(props.pageId === 4) {
    arrStepNm = cmmData("judgeStepNm");
  }else if(props.pageId === 6) {
    arrStepNm = cmmData("loanStepNm");
  }else if(props.pageId === 7) {
    arrStepNm = cmmData("loanStepNm");
  }    

  let [pageShow, setPageShow] = useState(false);
  let [stepShow, setStepShow] = useState(false);
  
  //마운트시 최초한번 실행
  useEffect(()=>{
    (props.pageId!=null)?setPageShow(true):setPageShow(false);
    (props.stepCd!=null)?setStepShow(true):setStepShow(false);
  },[]);

  return (
    <>
    
    <Navbar bg="primary" variant="dark" style={{display: pageShow?'':'none'}}>
      <Container>
        <Nav> </Nav>
        <Nav style={{color: 'white', align: 'center'}} className='justify-content-center'>{pageList.find((data) => data.id === props.pageId).name}</Nav>
        <Nav> </Nav>
      </Container>
    </Navbar>
    
    <Nav style={{
      textAlign: 'center',
      borderBottomStyle: 'solid',
      borderWidth: 'thin',
      display: stepShow?'':'none'
    }}>
      {
      
      arrStepNm.map((data, idx)=> {
        let num = idx + 1;
        if(num === props.stepCd) {
          return (
            <Nav.Item key={idx} style={{width: (data.length+1)*25+`px`, heigth: '20px', borderRadius: '50px', backgroundColor: '#004C9D', margin: '5px'}}>
              <span style={{color: 'white' }}>{num}. {data}</span>
            </Nav.Item>
          );
        }else {
          return (
            <Nav.Item key={idx} style={{width: '20px', heigth: '20px', borderRadius: '50%', border: '1px solid #004C9D', margin: '5px'}}>
              <span style={{color: '#004C9D' }}>{num}</span>
            </Nav.Item>
            )
        } 
      })
      }
    </Nav>
    </>
  );
}

export default Header;