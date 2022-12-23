import LoanContractCss from '../css/LoanContract.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import data from '../json/LoanContractData.js';
import Form from 'react-bootstrap/Form';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function LoanContract() {

  let jsondata = data;

  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = (checked, data) => {
    if (checked) {
      setCheckedList([...checkedList, data]);
      console.log("checked")

    } else if (!checked) {
      setCheckedList(checkedList.filter(el => el !== data));
      console.log("!checked")
    }
  };
  return (
    <>
      <Header pageId={6} stepCd={3} />
      <Table >
        <div align='left'>
          <h4 className='LoanContractTitle'><b>여신거래약정</b></h4>
        </div><br />
        <tbody align='left'>
          {jsondata.map(function (data, idx) {
            return (
              <tr key={idx}>
                <td key={idx}>
                  {data.title}
                </td>
                <td>
                  {data.standardVal}
                </td>
                <td>
                  <CheckExample key={idx} data={data} index={idx} checkedList={checkedList} setCheckedList={setCheckedList}
                    onCheckedElement={onCheckedElement} />
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>

  )
}

function CheckExample(props) {

  if (props.data.id == "4" || props.data.id == "6" || props.data.id == "9" || props.data.id == "10" || props.data.id == "11" || props.data.id == "12" || props.data.id == "13" || props.data.id == "14" || props.data.id == "15" || props.data.id == "16" || props.data.id == "17" || props.data.id == "18" || props.data.id == "19") {

    return (
      <>
        <Form>
          {['checkbox'].map((type) =>
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                value={props.data.standardVal}
                onChange={e => {
                  props.onCheckedElement(e.target.checked, e.target.value);
                  console.log(props.checkedList)

                }}
                checked={props.checkedList.includes(props.data.standardVal) ? true : false}

              />

            </div>
          )}
          <div id='result'></div>

        </Form>
      </>
    );
  }
}


export default LoanContract;