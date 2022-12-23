import { Button, Modal } from 'react-bootstrap';

/**
 * alert 모달 공통
 * 1. import AlertModal from 'AlertModal.js';
 * 2. state변수 선언 ex) const [popup, setPopup] = useState({open: false, title: "", message: "", isHeader: false, confirmBtn:[], callback: ()=>{}});
 * 3. 각 화면 하단에 태그정의 ex) <AlertModal open={popup.open} setPopup={setPopup} message={popup.message} title={popup.title} isHeader={popup.isHeader} confirmBtn={popup.confirmBtn} callback={popup.callback}/>
 * 4. setPopup({
              open: true,
              title: "Error",
              message: msg,
              isHeader: false,
              confirmBtn: ["아니오", "예"],
              callback: cbAlertModal
          });
  state변경함수 호출로 모달호출
 * @param {*} param0 
 * @returns 
 */

function AlertModal({open, setPopup, message, title, isHeader, confirmBtn, callback}) {
  
  const handleClose = (props) => {
    
    setPopup({open: false, message: "", confirmBtn: [], callback: ()=>{}});
    
    if(typeof callback === "function"){
      
      callback(props);
    }
  }

  return (
    <>
      <Modal size="sm" show={open} onHide={handleClose}>
        {
        isHeader?
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        :null
        }
        <Modal.Body>
        {
          message.split('\n').map( line => {
            return (<>{line}<br/></>)
          })
        }  
        </Modal.Body>
        <Modal.Footer>
        {
          confirmBtn.map((data, idx)=>{
            return (
              <Button variant={idx===0?"secondary":"primary"} onClick={()=>{handleClose(idx)}}>{data}</Button>  
            )
          })
        }
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AlertModal;