import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { InputGroup, Table, Form, Dropdown, ToggleButton, DropdownButton, Button, Modal, Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../json/judgeStep3Data.js';
import AlertModal from '../0_common/AlertModal';
import Footer from '../0_common/Footer';
import Header from '../0_common/Header';

function JudgeStep3() {
  
  let jsonItemList = [];
  jsonItemList = data;

  //Modal pdf밸류 분할필요
  const values = [true];
  const [fullscreen, setFullscreen] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [idxData, setIdxData] = useState(0);

  const [checkItems, setCheckItems] = useState([]);

  // 체크박스 단일 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((el) => el !== id));
    }
  };

  // 체크박스 전체 선택
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      data.forEach((el) => idArray.push(el.id));
      setCheckItems(idArray);
      setAnswer([true, true, true, true, true, true, true])
      console.log(answer)

    }
    else {
      setCheckItems([]);
      setAnswer([false, false, false, false, false, false, false]);
      console.log(answer)
    }
  }
  const [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99]);

  ///////////////////////////////////////////////////////////
  //다음화면을 위한 navigate
  let navigate = useNavigate();
  useEffect(() => {
    console.log(answer);

    if (answer.indexOf(99) === -1) {
      setDisabledYn(false);
    } else {
      setDisabledYn(true);
    }
  }, [answer]);
  const [popup, setPopup] = useState({ open: false, title: "", message: "", isHeader: false, confirmBtn: [], callback: function () { } });
  let [disabledYn, setDisabledYn] = useState(true);
  const itemRef = useRef([]);

  function cbAlertModal(props, idx) {

    if (props === 0) { //아니오


    } else { //예

    }

  }

  function cbCompleteModal(props) {
    //tobe : axios 진단리스트

    navigate("/");
  }


  function cbFooter(idx, navigate, link) {

    //밸리데이션체크
    let validMsg = validCheck(answer);
    if (!validMsg) {
      //tobe : axios 진단리스트
      validMsg = "정말 동의하시겠습니까?"
      setPopup({
        open:true,
        titile: "Error",
        message: validMsg,
        isHeader: false,
        confirmBtn: ["확인"],
        callback: cbCompleteModal
      })
    } else {

      itemRef.current[validMsg[0]].focus();
      setPopup({
        open: true,
        title: "Error",
        message: validMsg[1],
        isHeader: false,
        confirmBtn: ["확인"],
        callback: cbAlertModal
        //curRef: validMsg[0]
      });
    }
  }


  return (
    <>
      <Header pageId={4} stepCd={1} />

      <h2>정보제공동의 [필수] </h2><br />
      <div>
        <h6 style={{ backgroundColor: 'LightCyan' }}><b>대출 약정신청을 위해 아래 내용을 충분히 이해하신 후 동의하시기 바랍니다.</b></h6>
      </div>
      <div>
        <ToggleButton
          style={{width:360}}
          id="toggle-check"
          type="checkbox"
          variant="outline-primary"
          checked={checkItems.length === data.length ? true : false}
          value=""
          onChange={(e) => {
            handleAllCheck(e.target.checked);
            //전체 pdf loop돌리기위해, 전체동의임의로 7로보냄
            setIdxData(7);
            handleShow(true);
          }}
        >
          전체 동의
        </ToggleButton>
      </div>
      <Table className="TotalSection3">
        <tbody>
          {
            jsonItemList.map(function (data, idx) {
              return (

                <tr>
                  <td align='left'>
                    {data.id}. {data.title} <br />
                    {data.contents}
                  </td>
                  <td >
                    <Button key={idx} style={{width:90}}
                      onClick={() => {
                        setIdxData(idx);
                        handleShow(true);
                      }
                      }>
                      내용보기
                    </Button>
                    <ToggleButton
                      key={data.id}
                      style={{width:90}}
                      id={idx}
                      type="checkbox"
                      name={`select-${data.id}`}
                      variant="outline-primary"
                      checked={checkItems.includes(data.id) ? true : false}
                      value={idx}
                      onChange={(e) => {
                        handleSingleCheck(e.target.checked, data.id)
                        let copy = [...answer];
                        copy[idx] = e.currentTarget.checked;
                        setAnswer(copy);
                        console.log(answer)
                      }}
                    >
                      동의
                    </ToggleButton>

                  </td>
                </tr>


              )
            })
          }
        </tbody>
      </Table>
      <Footer obj={{
        type: "button",
        disabled: disabledYn,
        text: ["취소", "다음"],
        link: "",
        callbackId: cbFooter
      }} ></Footer>
      <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback} />

      <ModalPdf show={show} handleClose={handleClose} handleShow={handleShow} data={jsonItemList} idx={idxData}></ModalPdf>
    </>
  );
}

function ModalPdf(props) {
  
  const itemRef = useRef([]);
  const [disabledYn, setDisabledYn] = useState(true);
  function cbFooter(idx, navigate, link) {
    //props.handleClose();
    console.log(idx);
    console.log(itemRef.current[6]);
  }
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const idx = props.idx;
  let arrData = [];
  //전체동의인지 체크
  if(idx != 7) {
    arrData.push(props.data[idx]);
  }else {
    arrData = props.data;
  }
  
  return (
    <Modal id="modalpdf" show={props.show} onHide={props.handleClose} fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body' onScroll={(e)=>{
        console.log(e.target.scrollTop);
        (document.querySelector(".modal-body").scrollHeight - Math.floor(document.querySelector(".modal-body").scrollTop) === document.querySelector(".modal-body").clientHeight)&&setDisabledYn(false)
      }}>
      {
        arrData.map((pdfData, pdfIdx)=>{
          
          return (
            <PdfViewer pdfData={pdfData}></PdfViewer>
          )
        })
      }
        
        <Modal.Footer>
          <Footer obj={{
            type: "button",
            disabled: disabledYn,
            text: ["확인"],
            link: "",
            callbackId: cbFooter
          }} ></Footer>
        </Modal.Footer>
        
      </Modal.Body>
    </Modal>
  );
};

const PdfViewer = memo(function (pdfData) {
  return (
    <Document file={{ url : pdfData.pdfData.pdfvalue, httpHeaders: { 'X-CustomHeader': '40359820958024350238508234' }, withCredentials: true}}>
      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false}/>
    </Document>
  );
});


function validCheck(answer) {

  let msg = [];
  const diffAnswer = [true, true, true, true, true, true, true];
  for (let idx = 0; idx < answer.length; idx++) {
    if (diffAnswer[idx] != answer[idx]) {
      msg[0] = idx;
      msg[1] = data[idx].msg;
      return msg;
      console.log(msg)
    }
  }
  return "";
}


export default JudgeStep3;
