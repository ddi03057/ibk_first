import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputGroup, ListGroup, Table, Form, Dropdown, ToggleButton, DropdownButton, Button, Modal, Accordion, ModalFooter } from 'react-bootstrap';
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
  const handleShow = () => {setShow(true)}

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
        open: true,
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
      <ListGroup style={{ borderStyle: 'solid', marginTop: 20, width: '100%' }}>
        <ListGroup.Item>
          <h5>심사준비 - 고객정보 제공 동의</h5>
        </ListGroup.Item>
        <ListGroup.Item>
          <h5 align="left"><b>온라인 플랫폼 입점 소상공인 보증부 대출을 위해 다음 항목에 동의해주세요.</b></h5>
          <div style={{ color: "#C0C0C0" }}>
            대출 한도 조회용으로 고객님의 정보를 수집합니다. 신용도의 영향이 없으니 안심하세요.
          </div>
        </ListGroup.Item>
        <ListGroup.Item>
          <ListGroup as='ul'>
            {
              jsonItemList.map(function (data, idx) {
                return (
                  <>
                    <ListGroup.Item as='li'>
                      <Form.Check
                        style={{ width: '90%', float: 'left' }}
                        type='checkbox'
                        label={data.title}
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
                      ></Form.Check>
                      <a className='right_arrowBtn' key={idx} onClick={() => {
                        setIdxData(idx);
                        handleShow(true);
                      }}></a>
                    </ListGroup.Item>
                  </>
                )
              })}
          </ListGroup>
        </ListGroup.Item>


        <ListGroup.Item>
          <ToggleButton
            style={{ width: "100%" }}
            id="toggle-check"
            type="checkbox"
            variant="primary"
            checked={checkItems.length === data.length ? true : false}
            value=""
            onChange={(e) => handleAllCheck(e.target.checked)}
          >
            모두 동의하고 다음
          </ToggleButton>
        </ListGroup.Item>
      </ListGroup>

      
      <Footer obj={{
        type: "button",
        disabled: disabledYn,
        text: ["취소", "다음"],
        link: "",
        callbackId: cbFooter
      }} ></Footer>
      <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback} />

      <ModalPdf show={show} handleClose={handleClose} handleShow={handleShow} data={jsonItemList} idx={idxData} disabledYn={disabledYn} setDisabledYn={setDisabledYn}></ModalPdf>
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
        <iframe src={props.data[props.idx].pdfvalue} height="100%" width="100%" title="ModalPdfViewer" id='iframe'/>
      </Modal.Body>
      <ModalFooter>
        <Button
        variant='primary'
        style={{width:"100%"}}
        >확인</Button>
        </ModalFooter>
    </Modal>
  );
}

function validCheck(answer) {

  let msg = [];
  const diffAnswer = [true, true, true, true, true, true, true];
  for (let idx = 0; idx < answer.length; idx++) {
    if (diffAnswer[idx] != answer[idx]) {
      msg[0] = idx;
      msg[1] = data[idx].msg;
      return msg;

    }
  }
  return "";
}


export default JudgeStep3;
