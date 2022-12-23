import StartLoan2Css from '../css/StartLoan2.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import data from '../json/StartLoan2Data.js';
import Form from 'react-bootstrap/Form';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function StartLoan2() {

    let jsondata = data;

    let [sendData, setSendData] = useState([]);

    return (
        <>
            <Header pageId={6} stepCd={2}/>
            <Table>
                <div align='left'>
                    <h4 className='StartLoan2Title'><b>대출신청내역</b></h4>
                </div>
                {jsondata.map(function (data, idx) {
                    return (
                        <tbody align='left'>
                            <tr >
                                <td><b>{data.title}</b></td>
                                <td>{data.standardVal}
                                    <SelectBasicExample data={data} index={idx} sendData={sendData} setSendData={setSendData}  />
                                </td>
                            </tr>
                        </tbody>
                    )
                })}
            </Table>
        </>
    )
}

function SelectBasicExample(props) {


    if (props.data.id == "8") {
        return (
            <>
            <Form.Select aria-label="Default select example" onChange={(e)=> {
                let json = {
                    idx: props.data.jsonsendindex,
                    key: props.data.title,
                    value: e.currentTarget.value
                }
                let copy = [...props.sendData];
                copy[json.idx] = json;
                props.setSendData(copy);
                console.log(copy);
            
            }}>
                <option>선택하세요.</option>
                <option value={props.data.standardVal1}>{props.data.standardVal1}</option>
                <option value={props.data.standardVal2}>{props.data.standardVal2}</option>
            </Form.Select>
            </>
        );
    }else if(props.data.id == "10"){
        return(
            <>
            <Form.Select aria-label='Default select example'  onChange={(e)=> {
                let json = {
                    idx: props.data.jsonsendindex,
                    key: props.data.title,
                    value: e.currentTarget.value
                }
                let copy = [...props.sendData];
                copy[json.idx] = json;
                props.setSendData(copy);
                console.log(copy);
            }}>
                <option>선택하세요.</option>
                <option  value={props.data.standardVal1}>{props.data.standardVal1}</option>
                <option  value={props.data.standardVal2}>{props.data.standardVal2}</option>            
            </Form.Select>
            </>
        )
    }else if(props.data.id == "9"){
        return(
            <>
            <Form.Select aria-label='Default select example'  onChange={(e)=> {
                let json = {
                    idx: props.data.jsonsendindex,
                    key: props.data.title,
                    value: e.currentTarget.value
                }
                let copy = [...props.sendData];
                copy[json.idx] = json;
                props.setSendData(copy);
                console.log(copy);
            }}>
                <option>선택하세요.</option>
                <option value={props.data.standardVal1}>{props.data.standardVal1}</option>
                <option value={props.data.standardVal2}>{props.data.standardVal2}</option>            
            </Form.Select>
            </>
        )
         
    }
}

export default StartLoan2;