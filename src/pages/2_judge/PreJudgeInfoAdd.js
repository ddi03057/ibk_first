import { Table } from "react-bootstrap";
import Header from "./Header.js";
import data from '../json/preJudgeInfoAddData.js';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { useState } from "react";


function PreJudgeInfoAdd() {

    let [sendData, setSendData] = useState([])

    const obj = JSON.parse(JSON.stringify(data))
    const [calc, setCalc] = useState("0");


    const setMoney = () => {

        const money = document.getElementById('moneyId').value;

        const origin = parseInt(money);
        let result = Math.round((90 / 100 * origin));

        document.getElementById("result").innerText = result;

    }

    return (
        <>
            <Header pageId={4} stepCd={5} />
            <Table className="prejudgedocument">

                <tbody>
                    <tr align='left'><h5>1. 기업정보</h5></tr>

                    <tr align='left'>
                        <td>{obj[0].title}</td>
                        <td>{obj[0].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[1].title}</td>
                        <td>{obj[1].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[2].title}</td>
                        <td>{obj[2].standardVal}</td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[3].title}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="고객입력필드"
                                    type="number"
                                    onChange={(e) => {
                                        let json = {
                                            idx: obj[0].id,
                                            key: obj[3].title,
                                            value: e.currentTarget.value
                                        }
                                        let copy = [...sendData];
                                        copy[obj[0].id] = json;
                                        setSendData(copy);
                                        console.log(copy);
                                    }}
                                />명
                            </InputGroup></td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[4].title}</td>
                        <td>{obj[4].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[5].title}</td>
                        <td>{obj[5].standardVal}</td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[6].title}<br />{obj[6].standardVal}<br />{obj[7].standardVal}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="전기"
                                    type="number"
                                    onChange={(e) => {
                                        let json = {
                                            idx: obj[1].id,
                                            key: obj[6].standardVal,
                                            value: e.currentTarget.value
                                        }
                                        let copy = [...sendData];
                                        copy[obj[1].id] = json;
                                        setSendData(copy);
                                        console.log(copy);
                                    }}
                                />원
                            </InputGroup>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="당기"
                                    type="number"
                                    onChange={(e) => {
                                        let json = {
                                            idx: obj[2].id,
                                            key: obj[7].standardVal,
                                            value: e.currentTarget.value
                                        }
                                        let copy = [...sendData];
                                        copy[obj[2].id] = json;
                                        setSendData(copy);
                                        console.log(copy);
                                    }}

                                />원
                            </InputGroup>
                        </td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[7].title}</td>
                        <td>{obj[7].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[8].title}</td>
                        <td>{obj[8].standardVal}</td>
                    </tr>

                    <tr align='left'><h5>2. 대표자 정보</h5></tr>

                    <tr align='left'>
                        <td>{obj[9].title}</td>
                        <td>{obj[9].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[10].title}</td>
                        <td>{obj[10].standardVal}</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[11].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"

                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[3].id,
                                                key: obj[11].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[3].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="창업">창업</option>
                                        <option value="인수">인수</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>


                    <tr align='left'>
                        <td>{obj[12].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[4].id,
                                                key: obj[12].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[4].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="여">여</option>
                                        <option value="부">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'><h5>3. 주소정보</h5></tr>
                    
                    <tr align='left'>
                        <td>{obj[13].title}</td>
                        <td>{obj[13].standardVal}</td>
                        </tr>
                        <tr>
                            <td align='left'>{obj[14].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[5].id,
                                                key: obj[14].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[5].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="예">예</option>
                                        <option value="아니요">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[15].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[6].id,
                                                key: obj[15].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[6].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="본인">본인</option>
                                        <option value="타인">타인</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[16].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[7].id,
                                                key: obj[16].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[7].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="자가">자가</option>
                                        <option value="임차">임차</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[17].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[8].id,
                                                key: obj[17].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[8].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="여">여</option>
                                        <option value="부">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[18].title}</td>
                        <td>{obj[18].standardVal}</td>
                    </tr><tr align='left'>
                        <td>{obj[19].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[9].id,
                                                key: obj[19].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[9].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="예">예</option>
                                        <option value="아니요">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[20].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[10].id,
                                                key: obj[20].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[10].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="본인">본인</option>
                                        <option value="가족">가족(배우자 또는 외)</option>
                                        <option value="타인">타인</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[21].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[11].id,
                                                key: obj[21].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[11].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="자가">자가</option>
                                        <option value="임차">임차</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[22].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[12].id,
                                                key: obj[22].title,
                                                value: e.currentTarget.value
                                            }
                                            let copy = [...sendData];
                                            copy[obj[12].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="여">여</option>
                                        <option value="부">부</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'><h5>4. 기타정보 (선택)</h5></tr>
                    <tr align='left'>
                        <td>{obj[23].title}</td>
                        <td>
                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[13].id,
                                                key: obj[23].title,
                                                value: e.currentTarget.value
                                            }

                                            let copy = [...sendData];
                                            copy[obj[13].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="예">예</option>
                                        <option value="아니요">아니요</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[24].title}</td>
                        <td>

                            <form class="was-validated">
                                <div class="mb-3">
                                    <select class="form-select" required aria-label="select example"
                                        onChange={(e) => {
                                            let json = {
                                                idx: obj[14].id,
                                                key: obj[24].title,
                                                value: e.currentTarget.value
                                            }

                                            let copy = [...sendData];
                                            copy[obj[14].id] = json;
                                            setSendData(copy);
                                            console.log(copy);
                                        }}>
                                        <option value=""></option>
                                        <option value="본인">본인</option>
                                        <option value="배우자">배우자</option>
                                    </select>
                                    <div class="invalid-feedback">선택해주세요.</div>
                                </div>
                            </form>
                        </td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[25].title}</td>
                        <td>{obj[25].standardVal}</td>
                    </tr>
                    <tr align='left'>* 해당정보는 보증심사과정에서 별도 진위여부 확인 예정임 </tr>
                    <tr align='left'><h5>5. 대출희망금액 (필수)</h5></tr>
                    <tr align='left'>
                        <td>{obj[26].title}</td>
                        <td>
                            <InputGroup size="sm" className="mb-3">

                                <Form.Control
                                    id="moneyId"
                                    aria-label="Small"
                                    aria-describedby="inputGroup-sizing-sm"
                                    placeholder="고객입력필드"
                                    type="number"
                                    onKeyUp={setMoney}
                                    onChange={(e) => {
                                        let json = {
                                            idx: obj[15].id,
                                            key: obj[26].title,
                                            value: e.currentTarget.value
                                        }
                                        let copy = [...sendData];
                                        copy[obj[15].id] = json;
                                        setSendData(copy);
                                        console.log(copy);
                                    }}
                                />
                            </InputGroup>
                        </td>
                        <td>원</td>
                    </tr>

                    <tr align='left'>
                        <td>{obj[27].title}</td>
                        <td id="result"></td><td>원</td>
                    </tr>
                    <tr align='left'><h5>6. 대출은행 선택 (필수)</h5></tr>

                    <tr align='left'>
                        <td>{obj[28].title}</td>
                        <td>IBK 기업은행</td>
                    </tr>
                    <tr align='left'>
                        <td>{obj[29].title}</td>
                        <td>{obj[29].standardVal}</td>
                    </tr>

                </tbody>
            </Table>
            <div className="ethics">
                <h5 align='left'>윤리경영 실천 및 보증브로커 피해예방을 위한 협조 확약 등</h5>
                <div align='left'>
                    <span>① 윤리경영 실천</span><br />
                    <span>② 보증브로커 피해예방</span><br />
                    <span>③ 입력내용 최종확인</span>
                </div>
            </div>

        </>
    )
}






export default PreJudgeInfoAdd;