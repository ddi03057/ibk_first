import { useEffect, useState, useRef } from 'react';
import { Container,Row,Col,InputGroup,Form} from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from '../../json/cstinfoAddData';
import Footer from '../0_common/Footer';
import AlertModal from '../0_common/AlertModal';

function CstInfoAdd() {

  //항목별 체크 상태
  let [answer, setAnswer] = useState([99]);

  //footer버튼 활성화를 위한 state
  let [disabledYn, setDisabledYn] = useState(true);

  //다음화면을 위한 navigate
  let navigate = useNavigate();
  useEffect(() => {

    if (answer.indexOf(99) === -1) {
      setDisabledYn(false);
    }
  }, [answer]);

  const [popup, setPopup] = useState({ open: false, title: "", message: "", isHeader: false, confirmBtn: [], callback: function () { } });

  function cbAlertModal(props) {
    if (props === 0) {

    } else {

    }
  }
  function cbCompleteModal(props) {
    //tobe : axios 진단리스트

    navigate("/prodguide");
  }

  function cbFooter(idx, navigate, link) {

    //빈값 밸리데이션
    let emptyMsg = validCheckEmpty(answer);

    if (!emptyMsg) {
      setDisabledYn(false);
      emptyMsg = "고객님의 소중한 정보제공에 감사합니다.";
      setPopup({
        open: true,
        title: "Error",
        message: emptyMsg,
        isHeader: false,
        confirmBtn: ["확인"],
        callback: cbCompleteModal,

      });
    } else {

      setPopup({
        open: true,
        title: "Error",
        message: emptyMsg,
        isHeader: false,
        confirmBtn: ["확인"],
        callback: cbAlertModal
      });
    }
  }


  let jsonDetail = [];
  jsonDetail = data;
  return (
    <>
      <div style={{ textAlign: "center", marginTop: 20 }}>
        <h4><b>고객 정보 등록</b></h4>
      </div>
      <br/>
      <Container>
          {
            jsonDetail.map(function (data, idx) {
              return (
                <Row
                  key={idx} style={{textAlign:"left" }}>
                  <Col xs={4}><b>{data.name}</b></Col>
                  <Col xs={8}>
                    <ItemForm data={data} index={idx} answer={answer} setAnswer={setAnswer} />
                    </Col>
                  <hr/>
                </Row>
              )
            })
          }
          <br/>
      </Container>
      <Footer obj={{
        type: "button",
        disabled: disabledYn,
        text: ["취소", "확인"],
        link: "",
        callbackId: cbFooter
      }} ></Footer>
      <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback} />

    </>
  );
}
function ItemForm(props) {

  if (props.data.type == "input") {
    return (
      <Container>
        <Row>
          <Col>{data.name}</Col>
          <Col>
            <InputGroup style={{width:200}} className="mb-3">

              <Form.Control
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
                type='text'
                onChange={(e) => {
                  let copy = [...props.answer];
                  copy[props.index] = e.target.value;
                  props.setAnswer(copy);
                  console.log(copy)

                }}
              />
            </InputGroup>
          </Col>
        </Row>
        </Container>
    )
  } else if (props.data.type == "text") {
    return (
      <Container>
        <Row>
          <Col>{props.data.content}</Col>
        </Row>
        </Container>
    )
  }
}

function validCheckEmpty(answer) {
  let title = "";
  let index = 0;
  let verb = "하시기 바랍니다.";
  let msg = "";

  for (let idx = 0; idx < answer.length; idx++) {
    if (!answer[idx] || answer[idx] === 99) {

      title = data[idx].name;

      let josa = "";
      if (checkBatchimEnding(title)) {
        josa = "을";
      } else {
        josa = "를 ";
      }
      msg = title + josa + verb;
      return msg;
    }
  }
}

/**
 * 단어별 맞춤 조사 선택을 위한 함수
 * @param {*} word 
 * @returns 
 */
function checkBatchimEnding(word) {
  if (typeof word !== 'string') return null;

  var lastLetter = word[word.length - 1];
  var uni = lastLetter.charCodeAt(0);

  if (uni < 44032 || uni > 55203) return null;

  return (uni - 44032) % 28 != 0;
}
export default CstInfoAdd;
