import '../css/JudgeStep2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import data from '../json/judgeStep2Data.js';


import { ButtonGroup, ToggleButton, Table, Button } from 'react-bootstrap';

function JudgeStep2() {

    let [answer, setAnswer] = useState([99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);


    const jsonItemList = data;
    const [radio, setRadio] = useState(["y", "n"]);

    const [isAllChecked, setIsAllChecked] = useState([]);
    
    const [checkedButtons, setCheckedButtons] = useState([]);
    const [disabled, setDisabled] = useState(true);

    const changeHandler = (checked, id) => {
        if (checked) {
            setDisabled(isChecked)
            setCheckedButtons([...checkedButtons, id]);
            
        }
         else {
            setDisabled(isChecked)
            setCheckedButtons(checkedButtons.filter(Button => Button !== id));
            
        }
    };
    const isChecked = checkedButtons.length === 1;

    return (
        <>
            <Table className="TotalSection2">
                <thead>
                    <tr>
                        <td>
                            <h2>자가진단 체크리스트</h2>
                        </td>

                    </tr>
                    <tr align="left">
                        <td style={{ backgroundColor: "LightCyan" }}>
                            보증심사 진행 가능여부를 사전에 확인해주시기 바랍니다.
                        </td>
                    </tr>
                </thead>
                <tbody >
                    {
                        jsonItemList.map((data1, idx1) => {
                            return (
                                <tr key={idx1}>
                                    <td key={idx1}>
                                        {idx1 + 1}. {data1.title}
                                        <br />

                                        <ButtonGroup key={idx1}>
                                            {
                                                radio.map((data2, idx2) => {
                                                    return (
                                                        <ToggleButton
                                                            key={`${idx1}${idx2}`}
                                                            id={`radio${idx1}-${idx2}`}
                                                            type="radio"
                                                            variant={idx2 % 2 ? 'outline-danger' : 'outline-primary'}
                                                            name={`${idx1}${idx2}`}
                                                            value={data2}
                                                            checked={answer[idx1] === data2}
                                                            onChange={(e) => {
                                                                let copy = [...answer];
                                                                copy[idx1] = e.currentTarget.value;
                                                                setAnswer(copy);
                                                                console.log(copy);
                                                            }}>
                                                            {data2 === 'y' ? "예" : "아니오"}
                                                        </ToggleButton>
                                                    );
                                                })

                                            }
                                        </ButtonGroup>
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <br />
                    <tr>
                        <td style={{ backgroundColor: "lightgray" }}>고객님께서 입력하신 내용은 심사 시 사실여부를 다시 한번 확인하게 됩니다. 신청대상이 아님에도 불구하고 실제와 다르게 입력하였을 경우 보증서 발급이 거절될 수 있습니다.</td>
                    </tr>

                </tbody>
            </Table>
            <div>위 내용에 동의하십니까?</div>
            <br/>
            <div><input type="checkbox" onChange={e => {
                    changeHandler(e.currentTarget.checked, 'check');
                    if(answer.includes(99) == true) {
                        alert("체크리스트 항목을 확인 바랍니다.")
                        changeHandler(e.currentTarget.checked,)
                    }
                    

                }}
                    checked={checkedButtons.includes('check') ? true : false}></input></div>
            <div>동의합니다.</div>
            <div><Button className='selfcheck'
                variant='primary'
                id='button'
                disabled= {disabled}>
                    확인</Button></div>
            


        </>
    );
}

export default JudgeStep2;