import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Document, Page, pdfjs } from 'react-pdf';
import { InputGroup, Table, Form, Dropdown, ToggleButton, DropdownButton, Button, Modal, Accordion, ListGroup, Container, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../json/judgeStep3Data.js';
import AlertModal from '../0_common/AlertModal';
import Footer from '../0_common/Footer';
import Header from '../0_common/Header';
import '../../css/FirstPage.css';

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
  const [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, ]);

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
        open: true,
        titile: "Error",
        message: validMsg,
        isHeader: false,
        confirmBtn: ["모두 동의하고 다음"],
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
      <ListGroup>
        <ListGroup.Item>
          <h5>심사준비 - 고객정보 제공 동의</h5>
        </ListGroup.Item>
        <ListGroup.Item>
          <div align="left" style={{ fontSize: 18, marginBottom: 10 }}><b>온라인 플랫폼 입점 소상공인 보증부 대출을 위해 다음 항목에 동의해주세요.</b></div>
          <div style={{ color: "#C0C0C0" }}>
            대출 한도 조회용으로 고객님의 정보를 수집합니다. 신용도의 영향이 없으니 안심하세요.
          </div>
        </ListGroup.Item>
        <ListGroup>
          {
            jsonItemList.map(function (data, idx) {
              return (
                <>
                  <div>
                    <div class="container">
                      <div class="row"  >
                        <div class="chiller_cb" style={{ width: '100%', height: 55, textAlign: 'left', marginBottom: 10 }}>
                          <div style={{ width: '90%' }}>
                            <input
                              type="checkbox"
                              key={data.id}
                              id={idx}
                              name={`select-${data.id}`}
                              checked={checkItems.includes(data.id) ? true : false}
                              value={idx}
                              onChange={(e) => {
                                handleSingleCheck(e.target.checked, data.id)
                                let copy = [...answer];
                                copy[idx] = e.currentTarget.checked;
                                setAnswer(copy);
                              }}
                            />
                            <label for={idx} style={{ color: "gray" }}>{data.title}</label>
                            <span></span>
                            <a className='right_arrowBtn' key={idx} onClick={() => {
                              setIdxData(idx);
                              handleShow(true);
                            }}></a>
                          </div>
                        </div>

                      </div>
                    </div>

                  </div>
                </>
              )
            })
          }
          <div align="left" style={{ marginTop: 20, marginBottom: 20, fontSize: 18 }}><b>신청 전 유의사항을 꼭 확인해주세요.</b></div>
          <div class="container">
            <div class="row">
              <div class="chiller_cb" style={{ width: '90%', height: 55, textAlign: 'left', marginBottom: 40 }}>
                <input
                  id="myCheckbox1"
                  type="checkbox"
                  
                />
                <label for="myCheckbox1" style={{ color: "gray" }}>IBK기업은행에 상담중인 대출이 없습니다.</label>
                <span></span>
              </div>
            </div>
            <div class="row">
              <div class="chiller_cb" style={{ width: '95%', textAlign: 'left', marginBottom: 30 }}>
                <input
                  id="myCheckbox2"
                  type="checkbox"
                />
                <label for="myCheckbox2" style={{ color: "gray" }}>기타은행에서 정한 신용등급 등 취급제한 사유에 따라 대출 취급이 거절될 수 있음을 충분히 이해하였습니다.</label>
                <span></span>
              </div>
            </div>
          </div>
          <ToggleButton
            style={{ width: '100%', }}
            id="toggle-check"
            type="checkbox"
            variant="outline-primary"
            checked={checkItems.length === data.length ? true : false}
            value=""
            disabled={disabledYn}
            callbackId={cbFooter}
            onChange={(e) => {
              handleAllCheck(e.target.checked);
              //전체 pdf loop돌리기위해, 전체동의임의로 7로보냄
              setIdxData(7);
              handleShow(true);
            }}
          >
            모두 동의하고 다음
          </ToggleButton>
        </ListGroup>
      </ListGroup>
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
  if (idx != 7) {
    arrData.push(props.data[idx]);
  } else {
    arrData = props.data;
  }

  return (
    <Modal id="modalpdf" show={props.show} onHide={props.handleClose} fullscreen={true}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-body' onScroll={(e) => {
        console.log(e.target.scrollTop);
        (document.querySelector(".modal-body").scrollHeight - Math.floor(document.querySelector(".modal-body").scrollTop) === document.querySelector(".modal-body").clientHeight) && setDisabledYn(false)
      }}>
        {
          arrData.map((pdfData, pdfIdx) => {

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
    <Document file={{ url: pdfData.pdfData.pdfvalue, httpHeaders: { 'X-CustomHeader': '40359820958024350238508234' }, withCredentials: true }}>
      <Page pageNumber={1} renderTextLayer={false} renderAnnotationLayer={false} />
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
