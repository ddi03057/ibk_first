import { useEffect, useState, useRef } from 'react';
import { InputGroup, ListGroup, Container, Form, Dropdown, DropdownButton, Button, Modal, Accordion, Row, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';
import data from "../../json/SelfCheckSurveyData.js";
import AlertModal from '../0_common/AlertModal';
import '../../css/SelfCheckSurvey.css';
import cmmData from '../../json/cmmData.js';


function SelfCheckSurvey() {

  let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99]);

  let jsondata = data;

  const [popup, setPopup] = useState({ open: false, title: "", message: "", isHeader: false, confirmBtn: [], callback: function () { } });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>
      <h5><b>조사자료 자가체크</b></h5>
      <ListGroup>
        <ListGroup.Item>
          {jsondata.map(function (data, idx) {
            return (
              <div key={`tr${idx}`}>
                  <div align='left'>
                    <b>{data.title}</b>
                  </div>
                  <ButtonGroup key={idx} align='left' style={{ marginTop: 20, marginBottom: 20 }}>
                    <ItemForm  data={data} index = {idx}answer={answer} setAnswer={setAnswer} />
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
      </ListGroup>
      <NotiModal show={show} handleClose={handleClose} handleShow={handleShow}></NotiModal>
    </>
  )
}


function ItemForm(props) {
  const [checked, setChecked] = useState(false);
  const [checkListValue, setCheckListValue] = useState(true);
  
  let [loanTerm, setLoanTerm] = useState("대출기한 선택")

  if (props.data.type === "select") {
    return (
      <div key="default-button" className="mb-3">

        {props.data.checklist.map(function(data1, idx1) {
          return (
            <ToggleButton variant='outline-secondary'
            key={`${idx1}${props.index}`}
            id={`radio${idx1}-${props.index}`}
            type="radio"
            name={`${idx1}${props.index}`}
            value={data1.value}
            checked={props.answer[props.index] === data1.value}
            onChange={(e)=>{
              let copy = [...props.answer];
              copy[props.index] = e.currentTarget.value;
              props.setAnswer(copy)
              console.log(props.answer)
            }}
              style={{ width: 100, height: 50, marginRight: 5 }}
            >{data1.value}
            </ToggleButton>
          )
        })}
      </div>
    )}else if(props.data.type === "select2"){
      return(
        <div style={{paddingLeft:30}}>
        {props.data.checklist.map(function(data2,idx2){
          return(
            <ToggleButton variant='outline-secondary'
            key={`${idx2}${props.index}`}
            id={`radio${idx2}-${props.index}`}
            type="radio"
            name={`${idx2}${props.index}`}
            value={data2.value}
            checked={props.answer[props.index] === data2.value}
            onChange={(e)=>{
              let copy = [...props.answer];
              copy[props.index] = e.currentTarget.value;
              props.setAnswer(copy)
              console.log(props.answer)
            }}
              style={{ width: 130, height: 50, marginRight: 5 }}
            >{data2.value}
            </ToggleButton>
          )
        })}
        </div>
      )
    }else if(props.data.type === "select3"){
      return(
        <div style={{paddingLeft:30}}>
          {props.data.checklist.map(function(data3,idx3){
            return(
              <ToggleButton variant='outline-secondary'
            key={`${idx3}${props.index}`}
            id={`radio${idx3}-${props.index}`}
            type="radio"
            name={`${idx3}${props.index}`}
            value={data3.value}
            checked={props.answer[props.index] === data3.value}
            onChange={(e)=>{
              let copy = [...props.answer];
              copy[props.index] = e.currentTarget.value;
              props.setAnswer(copy)
              console.log(props.answer)
            }}
              style={{ width: 130, height: 50, marginRight: 5 }}
            >{data3.value}
            </ToggleButton>
            )
          })}
        </div>
      )
    }else if(props.data.id === 7){
      return(
        <div>
            <InputGroup size="lg" className="mb-3" >
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-lg"
              type='number'
              onChange={(e) => {
                let copy = [...props.answer];
                copy[props.index] = e.target.value;
                props.setAnswer(copy);
              }}
            />
          </InputGroup>
          </div>
      )
    }else if(props.data.id === 8){
      return(
        <DropdownButton
        variant='outline-secondary'
        title={loanTerm}
        id="input-group-dropdown-1"
        >
        {
          cmmData("loanTerm").map(function(data,idx){
            return(
              <Dropdown.Item
              key={idx}
              onClick={(e)=>{
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

export default SelfCheckSurvey