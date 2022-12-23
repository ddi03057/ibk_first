import DocCollectListCss from '../css/DocCollectList.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './Header.js';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';
import Footer from './Footer.js';



function DocCollectList() {

    const [visible, setVisible] = useState(false);
    const [visible1, setVisible1] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);

    return (
        <>
            <Header pageId={4} stepCd={3} />
            <Table className='document5'>
                <tbody>
                    <h3 className='collecttitle'><b>서류수집내역</b></h3>
                    <br/>
                    <tr>
                        <td>
                            부가세 신고서
                        </td>
                        <td>
                        {visible ? "전송완료" : "전송"}
                        </td>
                        <td>
                        <Button variant='primary' onClick={()=> {setVisible(!visible);}}>가져오기</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            매입처별세금계산서합계표
                        </td>
                        <td>
                        {visible1 ? "전송완료" : "전송"}
                        </td>
                        <td>
                        <Button variant='primary' onClick={()=> {setVisible1(!visible1);}}>가져오기</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            매출처별세금계산서합계표
                        </td>
                        <td>
                        {visible2 ? "전송완료" : "전송"}
                        </td>
                        <td>
                        <Button variant='primary' onClick={()=> {setVisible2(!visible2);}}>가져오기</Button>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            표준재무제표증명
                        </td>
                        <td>
                        {visible3 ? "전송완료" : "전송"}
                        </td>
                        <td>
                        <Button variant='primary' onClick={()=> {setVisible3(!visible3);}}>가져오기</Button>
                        </td>
                    </tr>
                </tbody>
            </Table>

        </>

    )
}

export default DocCollectList;