import { useEffect, useState, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonGroup, ToggleButton, Table, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import judgeData from '../../json/judgeStep2Data.js';
import Header from '../0_common/Header';
import Footer from '../0_common/Footer';
import AlertModal from '../0_common/AlertModal';


function JudgeStep2() {

  let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99]);

  const jsonItemList = judgeData;
  const [popup, setPopup] = useState({open: false, title: "", message: "", isHeader: false, confirmBtn:[], callback: function(){}});
  const itemRef = useRef([]);
  
  let [disabledYn, setDisabledYn] = useState(true);
  let [agrmCheck, setAgrmCheck] = useState(false);
  //다음화면을 위한 navigate
  let navigate= useNavigate();
  useEffect(() => {
    console.log(answer);  

    if(answer.indexOf(99) === -1 && agrmCheck) {
      setDisabledYn(false);
    }else {
      setDisabledYn(true);
    }
  }, [answer, agrmCheck]);
  

  function cbCompleteModal(props) {
    
  }
  function cbAlertModal(props, idx) {
    
    if(props === 0) { //아니오
      
      
    }else { //예
      
    }
    
  }
  function cbFooter(idx, navigate, link) {
    
    //밸리데이션체크
    let validMsg = validCheck(answer);
    if(!validMsg) {
      //tobe : axios 진단리스트

      navigate("/judgestep3");
    }else {
      
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


  // const changeHandler = (checked, id) => {
  //   if (checked) {
  //     setDisabled(isChecked)
  //     setCheckedButtons([...checkedButtons, id]);

  //   }
  //   else {
  //     setDisabled(isChecked)
  //     setCheckedButtons(checkedButtons.filter(Button => Button !== id));

  //   }
  // };
  // const isChecked = checkedButtons.length === 1;

  return (
    <>
      <Header pageId={4} />
      <Table className="TotalSection2">
        <tbody >
          <tr>
            <td >
              <h2>자가진단 체크리스트</h2>
            </td>

          </tr>
          <tr align="left">
            <td style={{ backgroundColor: "LightCyan" }}>
              보증심사 진행 가능여부를 사전에 확인해주시기 바랍니다.
            </td>
          </tr>
          {
            jsonItemList.map((data1, idx1) => {
              return (
                <tr key={idx1}>
                  <td key={idx1} align="left">
                    {idx1 + 1}. {data1.title}
                    
                    <div style={{textAlign: "center"}}>
                      <ButtonGroup key={idx1}>
                        {
                          ["y", "n"].map((data2, idx2) => {
                            return (
                              <ToggleButton
                                key={`${idx1}${idx2}`}
                                id={`radio${idx1}-${idx2}`}
                                type="radio"
                                variant={idx2 % 2 ? 'outline-danger' : 'outline-primary'}
                                name={`${idx1}${idx2}`}
                                value={data2}
                                checked={answer[idx1] === data2}
                                inputRef={(element)=>{itemRef.current[idx1] = element}}
                                onChange={(e) => {
                                  let copy = [...answer];
                                  copy[idx1] = e.currentTarget.value;
                                  setAnswer(copy);
                                }}>
                                {data2 === 'y' ? "예" : "아니오"}
                              </ToggleButton>
                            );
                          })

                        }
                      </ButtonGroup>
                    </div>
                  </td>
                </tr>
              )
            })
          }
          
          <tr>
            <td style={{ backgroundColor: "lightgray" }}>고객님께서 입력하신 내용은 심사 시 사실여부를 다시 한번 확인하게 됩니다. 신청대상이 아님에도 불구하고 실제와 다르게 입력하였을 경우 보증서 발급이 거절될 수 있습니다.</td>
          </tr>
          <tr>
            <td align="center">위 내용에 동의하십니까?<br/>
              <Form.Check 
                type="checkbox"
                id={`check-checkbox`}
                label="동의합니다."
                inline={true}
                onChange={(e)=>{
                  setAgrmCheck(e.currentTarget.checked);
                }}
              />
            </td>
          </tr>
        </tbody>
      </Table>
      
      <br />
      
      
      <Footer obj={{
        type: "button",
        disabled: disabledYn,
        text: ["다음"],
        link: "",
        callbackId: cbFooter
      }} ></Footer>
      <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback}/>


    </>
  );
}

function validCheck(answer) {

  let msg = [];
  const diffAnswer = ["y", "n", "n", "y", "n", "n", "n", "y", "n"];
  for(let idx=0; idx<answer.length; idx++) {
    if(diffAnswer[idx] != answer[idx]) {
      msg[0] = idx;
      msg[1] = judgeData[idx].msg;
      return msg;
    }
  }
  return "";
}

export default JudgeStep2;