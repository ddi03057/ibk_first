import LoanClauseCss from '../css/LoanClause.css';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import { useCallback, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import data from '../json/LoanClauseData.js'
import File from '../test/test.txt';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';


function LoanClause() {

    console.log("asdfsadf")
    const jsondata = data;

    return (
        <>
            <Header pageId={6} stepCd={4} />
            <Table>
                <div align='left'>
                    <h4 className='LoanClauseTitle'><b>대출약관 안내</b></h4>
                </div><br />
                <div className='LoanClauseDocument'>
                <h6 style={{ backgroundColor: 'lightgray' }}>기업대출 상품설명서, 여신거래약정서 및 은행여신거래 기본약관 등을 제공하오니 참고하시기 바랍니다.</h6></div>
                <br/>
                <tbody>
                    {jsondata.map(function (data, idx) {
                        return (<tr align='left'>
                            <td>

                                {data.name}
                            </td>
                            {/* href에 경로(import를 해주어야함) download에 파일이름
                            a href는 폴더 안에 있는경로에 있는 파일을  download에 있는값으로
                            다운로드함*/}
                            <a href={File} download=""><img src='/floppy-disk.png' style={{ width: 30 }}/></a>
                            <td>
                            </td>

                        </tr>)
                    })}
                </tbody>

            </Table>
        </>
    )
}
export default LoanClause;