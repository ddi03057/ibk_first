import { useEffect, useState } from 'react';
import { InputGroup, ListGroup, Container, Form, Dropdown, DropdownButton, Button, Modal, Accordion, Row, Col, ToggleButton, ButtonGroup } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../0_common/Header';
import data from '../../json/judgeDocResultData.js';



function JudgeDocResult() {

    const reload = () => {
        window.location.reload("/judgedocresult");
    }
    let jsonDetail = [];
    jsonDetail = data;
    return (
        <>
            <ListGroup style={{ borderStyle: 'solid', marginTop: 20, width: '100%' }}>
                <ListGroup.Item >
                    <h5 align='left'><b>아직 전송되지 않은 서류가 있습니다. 서류 수집내역을 확인해 주세요.</b></h5>
                    <div align='left' style={{ color: "#C0C0C0" }}>
                        <b>전체 서류가 전송 완료인 경우에만 다음 화면 진행이 가능합니다.</b>
                    </div>
                    <br />
                    <div >
                        <Button style={{ borderRadius: 50, width: 200 }} variant='outline-primary'>모두 재전송</Button>
                    </div>
                </ListGroup.Item>
                <br />
                <ListGroup align='left' variant='flush'>
                    {jsonDetail.map(function (data, idx) {
                        return (
                            <ListGroup.Item>
                                <div style={{ float: 'left' }}><b>{data.name}</b></div>
                                <ItemForm
                                    data={data} />
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
                <br />
                <div align='left' style={{ color: "gray", paddingLeft: 20 }}>
                    주민등록상 행적구역을 선택해주세요.
                </div>
                <br />
                <div align='left' style={{ paddingLeft: 20 }}>
                    시도
                    <br />
                    <br />
                    <div >
                        <DropdownButton
                            variant='outline-secondary'
                            title="선택&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                            id="input-group-dropdown-1">
                                    <Dropdown.Item></Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br />
                <div align='left' style={{ paddingLeft: 20 }}>
                    시군구
                    <br />
                    <br />
                    <div >

                        <DropdownButton
                            variant='outline-secondary'
                            title="선택&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                            id="input-group-dropdown-1">
                            <Dropdown.Item></Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>

            </ListGroup>


        </>
    )
}
function ItemForm(props) {
    if (props.data.value === "재전송 요청") {

        return (
            <Button style={{ float: 'right', borderRadius: 20 }} variant="outline-danger">
                {props.data.value}
            </Button>
        )
    } else if ("전송완료") {
        return (
            <>
                <div align="right">
                    <img style={{ width: "10%" }} src="/gImg/checkresult.png" />
                    <b>{props.data.value}</b>
                </div>
            </>
        )
    }
}

export default JudgeDocResult;