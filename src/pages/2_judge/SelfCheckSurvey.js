import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputGroup, ListGroup, Container, Form, Dropdown, DropdownButton, Button, Modal, Accordion, Row, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';
import data from "../../json/SelfCheckSurveyData.js";
import AlertModal from '../0_common/AlertModal';
import '../../css/SelfCheckSurvey.css';
import cmmData from '../../json/cmmData.js';
import Footer from '../0_common/Footer';
import { func } from 'prop-types';


function SelfCheckSurvey() {

  let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99]);

  let jsondata = data;

  const [popup, setPopup] = useState({ open: false, title: "", message: "", isHeader: false, confirmBtn: [], callback: function () { } });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [disabledYn, setDisabledYn] = useState(true);

  let navigate = useNavigate();
  useEffect(() => {
    console.log(answer);

    if (answer.indexOf(99) === -1) {
      setDisabledYn(false);
    }
  }, [answer]);


  function cbAlertModal(props) {
    if (props === 0) { //아니오

    } else { //예

    }
  }
  function cbCompleteModal(props) {
    //tobe : axios 진단리스트
    //axios콜백에서 적합/부적합결과 받아서 적합성적정성결과화면 이동
    
    
      
  }

  function cbFooter(idx, navigate, link) {

    //빈값 밸리데이션
    let emptyMsg = validCheckEmpty(answer);
    console.log(emptyMsg)

    if (!emptyMsg) {
      setDisabledYn(false);
      emptyMsg = "신청하신 내용이 맞습니까?";
      setPopup({
        open: true,
        title: "Error",
        message: emptyMsg,
        isHeader: false,
        confirmBtn: ["확인"],
        callback: cbCompleteModal
      });
    }
  }

  return (
    <>
      <h5><b>조사자료 자가체크</b></h5>
      <ListGroup>
        <ListGroup.Item >
          {jsondata.map(function (data, idx) {
            return (
              <div key={`tr${idx}`}>
                <div align='left'>
                  <b>{data.title}</b>
                </div>
                <ButtonGroup key={idx} align='left' style={{ marginTop: 20, marginBottom: 20 ,width:'100%'}}>
                  <ItemForm data={data} index={idx} answer={answer} setAnswer={setAnswer} popup={popup} setPopup={setPopup} setDisabledYn={setDisabledYn} />
                </ButtonGroup>
                <br />
              </div>
            )
          })}
          <div style={{ color: 'gray' }} align='left'>
            * 대출 희망금액은 최대 1억원까지 입력 가능하며, 보증기관
            심사과정에서 금액이 변동될 수 있습니다.
            <br />
            * 최초 신청 희망금액은 1천만원이며, 1백만원 단위로 입력 가능합니다.
            <br />
            * 한도조회 이후 보증 신청 시 사업자등록증 상 주소로 사업장 현장실사 예정입니다.

          </div>
          <br />
          <div className="checkbox" style={{ width: '90%', float: 'left' }}>
            <label className="my-checkbox">윤리경영 실천 및 보증 브로커 피해예방을 위한 협조 확약 등
              <input type="checkbox"
              />
              <span className="my-checkbox__checkmark"></span>
            </label>

          </div>
          
          <div>
            <a className='arrowBtn' onClick={() => { handleShow() }}></a>
          </div>
        </ListGroup.Item>
        <Footer style={{marginTop:20}}
                obj={{
                  type: "button",
                  disabled: disabledYn,
                  text: ["다음"],
                  link: "",
                  callbackId: cbFooter
                }} ></Footer>
      </ListGroup>
      <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback} />

      <NotiModal show={show} handleClose={handleClose} handleShow={handleShow}></NotiModal>
    </>
  )
}


function ItemForm(props) {
  const [checked, setChecked] = useState(false);
  const [checkListValue, setCheckListValue] = useState(true);

  let [loanTerm, setLoanTerm] = useState("대출기한 선택")

  let navigate = useNavigate();
  /**
   * 라디오버튼 클릭이벤트시 항목별 처리
   * @param {*} props 
   * @param {*} idx1 
   */

  function clickRadioBtn(props, idx1) {

    //주사업장 소유자 콜백
    const cbRadio0 = (is) => {
      if (is != 0) {
        console.log("1231")
        props.setDisabledYn(true);
      } else {
        document.querySelector("#radio10").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }
    //주민등록상 주소지 소유자 콜백
    const cbRadio1 = (is) => {
      if (is != 0) {
      } else {
        document.querySelector("#radio10").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }
    //거주주택 소유자 콜백
    const cbRadio2 = (is) => {
      if (is != 0) {
      } else {
        document.querySelector("#radio10").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }
    switch (props.index) {

      case 0:
        if (props.data.checklist[idx1].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio0
          });
        } else if (props.data.checklist[idx1].id === 2) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio0
          });
        }
        break;
      case 3:
        if (props.data.checklist[idx1].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio1
          });
        } else if (props.data.checklist[idx1].id === 2) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio1
          });
        }
        break;
      case 4:
        if (props.data.checklist[idx1].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio1
          });
        } else if (props.data.checklist[idx1].id === 2) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio1
          });
        }
        break;
    }//진단리스트저장
    let copy = [...props.answer];
    copy[props.index] = {
      id: props.data.checklist[idx1].id,
      value: props.data.checklist[idx1].value
    };
    props.setAnswer(copy);
    

  }

  //있음 없음 버튼 함수
  function clickRadioBtn1(props, idx2) {
    //주사업장 권리침해(최근 1년이내) 콜백
    const cbRadio0 = (is) => {
      if (is != 0) {
      } else {
        document.querySelector("#radio01").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }
    const cbRadio1 = (is) => {
      if (is != 0) {
      } else {
        document.querySelector("#radio06").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }

    switch (props.index) {

      case 1:
        if (props.data.checklist[idx2].id === 0) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio0
          });
        }
        break;
      case 6:
        if (props.data.checklist[idx2].id === 0) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio1
          });
        }
        break;
    }
    //진단리스트저장
    let copy = [...props.answer];
    copy[props.index] = {
      id: props.data.checklist[idx2].id,
      value: props.data.checklist[idx2].value
    };
    props.setAnswer(copy);
    console.log(props.answer)

  }

  //예 아니요 버튼 함수
  function clickRadioBtn2(props, idx3) {
    //본인또는 배우자 명의 소유 주택 콜백
    const cbRadio0 = (is) => {
      if (is != 0) {
      } else {
        document.querySelector("#radio01").checked = false;
        let copy = [...props.answer];
        copy[props.index] = 99;
        props.setAnswer(copy);
      }
    }

    switch (props.index) {

      case 5:
        if (props.data.checklist[idx3].id === 1) {
          props.setPopup({
            open: true,
            title: "Error",
            message: data[props.index].msg,
            isHeader: false,
            confirmBtn: ["아니오", "예"],
            callback: cbRadio0
          });
        }
        break;
    }
    //진단리스트저장
    let copy = [...props.answer];
    copy[props.index] = {
      id: props.data.checklist[idx3].id,
      value: props.data.checklist[idx3].value
    };
    props.setAnswer(copy);
    console.log(props.answer)

  }

  if (props.data.type === "select") {
    return (
      <div key="default-button" className="mb-3">

        {props.data.checklist.map(function (data1, idx1) {
          return (
            <ToggleButton variant='outline-secondary'
              key={`${idx1}${props.index}`}
              id={`radio${idx1}${props.index}`}
              type="radio"
              value={data1.value}
              checked={props.answer[props.index].value === data1.value}
              onClick={(e) => {
                if (true) {
                  clickRadioBtn(props, idx1);
                }
              }}
              style={{ width: 100, height: 50, marginRight: 5 }}
            >{data1.value}
            </ToggleButton>
          )
        })}
      </div>
    )
  } else if (props.data.type === "select2") {
    return (
      <div style={{ paddingLeft: 30 }}>
        {props.data.checklist.map(function (data2, idx2) {
          return (
            <ToggleButton variant='outline-secondary'
              key={`${idx2}${props.index}`}
              id={`radio${idx2}${props.index}`}
              type="radio"
              value={data2.value}
              checked={props.answer[props.index].value === data2.value}
              onClick={(e) => {
                if (true) {
                  console.log(idx2)
                  clickRadioBtn1(props, idx2)
                }
              }}
              style={{ width: 130, height: 50, marginRight: 5 }}
            >{data2.value}
            </ToggleButton>
          )
        })}
      </div>
    )
  } else if (props.data.type === "select3") {
    return (
      <div style={{ paddingLeft: 30 }}>
        {props.data.checklist.map(function (data3, idx3) {
          return (
            <ToggleButton variant='outline-secondary'
              key={`${idx3}${props.index}`}
              id={`radio${idx3}${props.index}`}
              type="radio"
              name={`${idx3}${props.index}`}
              value={data3.value}
              checked={props.answer[props.index].value === data3.value}
              onClick={(e) => {
                if (true) {
                  clickRadioBtn2(props, idx3)
                }
              }}
              style={{ width: 130, height: 50, marginRight: 5 }}
            >{data3.value}
            </ToggleButton>
          )
        })}
      </div>
    )
  } else if (props.data.id === 7) {
    return (
        <InputGroup  className="mb-3" bsPrefix='input-group'>
          <Form.Control
            type='number'
            min = "1000000"
            max = "100000000"
            defaultValue="1000000"
            onChange={(e) => {
              if (e.target.value > "100000000") {
                props.setPopup({
                  open: true,
                  title: "Error",
                  message: data[props.index].msg,
                  isHeader: false,
                  confirmBtn: ["아니오", "예"],
                });
              }else if (e.target.value.length < 8) {
                props.setPopup({
                  open: true,
                  title: "Error",
                  message: data[props.index].msg1,
                  isHeader: false,
                  confirmBtn: ["아니오", "예"],
                });
              } else if (e.target.value.length < 7) {
                props.setPopup({
                  open: true,
                  title: "Error",
                  message: data[props.index].msg1,
                  isHeader: false,
                  confirmBtn: ["아니오", "예"],
                });
              }
              let copy = [...props.answer];
              copy[props.index] = e.target.value;
              props.setAnswer(copy);
            }}
          />
        </InputGroup>
    )
  } else if (props.data.id === 8) {
    return (
      <DropdownButton
        variant='outline-secondary'
        title={loanTerm}
        id="input-group-dropdown-1"
      >
        {
          cmmData("loanTerm").map(function (data, idx) {
            return (
              <Dropdown.Item
                key={idx}
                onClick={(e) => {
                  setLoanTerm(data.name);
                  let copy = [...props.answer];
                  copy[props.index] = data.name
                  props.setAnswer(copy)
                  console.log(props.answer)
                }}
              >{data.name}</Dropdown.Item>
            )
          })


        }
      </DropdownButton>
    )
  }
}
function NotiModal(props) {

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ListGroup>
          <ListGroup.Item >
            <h5><b>윤리경영 실천 및 보증 브로커 피해예방을 위한 협조 확약</b></h5>
            <b>①윤리경영 실천</b>
            <li>
              본인은 신용보증 신청 등과 관련하여 신용보증기금(이하 '신보')의 인권·윤리경영
              실천과 고객 밈 신보 임직원 등의 인권보호에 적극 협조한다.
            </li>
            <li>
              본인은 신보 임직원 등에게 보증청탁 및 금품, 선물, 향응 등을 제공하지 않을 것이며,
              만약 신보 임직원 등으로부터 금전거래, 금품, 선물, 향응 등을 요구받은 경우에는 즉시 신보의 인권
              윤리팀 또는 홈페이지 부패 신고센터나 감사제보센터에 신고한다.
            </li>
            <li>
              상기 사항을 위반하여 발생하는 모든 피해 및 불이익은 본인이 책임지며 이의를 제기하지 않는다.
            </li>
            <li>
              신고자의 신분은 관련 법률과 신보의 내규에 따라 철저하게 보호됩니다.
            </li>
            <b>②보증브로커 피해예방</b>
            <li>
              본인은 보증의 알선을 목적으로 대가성 수수료를 요구하거나 허위자료 작성 및 자료 위변조해주는 대가로 금품을 요구하는 보증브로커 등과 관련이 없으며, 만일 이에 해당되는 경우 보증전액해지, 신규보증 중단 등의 불이익을 받게 되어도 이의를 제기하지않는다.
            </li>
            <li>
              브로커 등 제3자 부당 개입사건 신고: 홈페이지 부조리신고센터 또는 신보 VOC팀(1588-6565)
            </li>
            <b>①윤리경영 실천</b>
            <li>
              조사자료 입력내용이 실제와 다를 경우 보증 신청이 거절될 수 있습니다.
            </li>
            <li>
              입력내용을 다시 한번 확인하시려면 취소 버튼을, 계속하여 보증을 신청하시려면 확인 버튼을 눌러 계속 진행해 주십시오.
            </li>
            <br />
            <Button
              style={{ width: '50%' }}
              variant="primary"
              onClick={props.handleClose}
            >
              동의함
            </Button>
            <Button style={{ width: '50%' }} variant="danger" onClick={props.handleClose}>
              동의안함
            </Button>

          </ListGroup.Item>

        </ListGroup>

      </Modal.Body>
      <Modal.Footer>

      </Modal.Footer>
    </Modal>
  )
}
/**
 * 항목별 빈값 체크
 * @param {*} answer 
 * @returns 
 */
function validCheckEmpty(answer) {
  let title = "";
  let index = 0;
  let verb = "하시기 바랍니다.";
  let msg = "전부 체크해주시기 바랍니다.";

  // answer.forEach((data, idx) => {
  for (let idx = 0; idx < answer.length; idx++) {
    if (!answer[idx] || answer[idx] === 99) {
      console.log(answer[idx])
      return msg;
    }else{
      return "";
    }
  }
}



export default SelfCheckSurvey