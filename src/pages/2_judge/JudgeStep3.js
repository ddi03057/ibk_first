import Judge3Css from '../css/JudgeStep3.css';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../json/judgeStep3Data.js';
import React, { useEffect, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Header from './Header.js';


function JudgeStep3() {

  let jsonItemList = [];
  jsonItemList = data;

  //Modal pdf밸류 분할필요
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);


  const [visible, setVisible] = useState(false);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idxData, setIdxData] = useState(0);
  


  return (
    <>
    <Header pageId={4} stepCd={1}/>
    <Table className="TotalSection3">
        <h2>정보제공동의 [필수] </h2><br/>
        <div className='JudgeStep1agree'>
          <h6 style={{backgroundColor: 'LightCyan'}}><b>대출 약정신청을 위해 아래 내용을 충분히 이해하신 후 동의하시기 바랍니다.</b></h6>
          </div>
      <tbody>
        {
          jsonItemList.map(function (data, idx) {
            return (

              <tr>
                <td align='left' colSpan={2}>
                  {data.id}. {data.title} <br />
                  {data.contents}
                </td>
                <td>
                    <Button key={idx} className="me-1 mb-1" 
                            onClick={() => {
                              setIdxData(idx);
                              handleShow(true);
                            }             
                    }>
                      내용보기
                    </Button>
                  
                <Button className="me-2 mb-2" onClick={()=> {setVisible(!visible);}}>{visible ? "동의완료" : "동의"}</Button>
                </td>
              </tr>
              

            )
          })
        }
        <tr>
                <td>
                    <Button className='nextButton' variant="primary">다음</Button>
                </td>
            </tr>
      </tbody>
    </Table>
    <ModalPdf show={show} handleClose={handleClose} handleShow={handleShow} data={jsonItemList} idx={idxData}></ModalPdf>
  </>
  );
}

function ModalPdf(props) {
  return (
    <Modal show={props.show} onHide={props.handleClose} fullscreen={true}>
    <Modal.Header closeButton>
      <Modal.Title></Modal.Title>
    </Modal.Header>
     <Modal.Body>
      <iframe src={props.data[props.idx].pdfvalue} height="100%" width="100%" title="ModalPdfViewer"/>
     </Modal.Body>
  </Modal>
  );
}


export default JudgeStep3;