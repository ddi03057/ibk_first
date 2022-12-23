import ProdGuideCss from '../css/ProdGuide.css';
import Table from 'react-bootstrap/Table';
import data from '../json/prodGuideData.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function ProdGuide() {

    let jsonDetail = [];
    jsonDetail = data;

    return (
      <Table className='ProdGuidetable'>
        <thead>
        <h2 className='ProdGuideh2'>상품 안내</h2>
          
        </thead>
        <tbody>
        <tr>
            <th>구분</th>
            <th>상세내용</th>
          </tr>
        {
            jsonDetail.map(function(data, idx) {
                return (
                    <tr>
                        <td>{data.name}</td>
                        <td align='left'>
                        {
                            data.content.split('\n').map( line => {
                                return (<span>{line}<br/></span>)
                            })
                        }
                        </td>
                    </tr>
                )
            })
        }    
        </tbody>
        <Link onClick={() => {

}} to="/preguide"><Button variant='primary' className='ProGuidebutton'>확인</Button></Link>
      </Table>
    );
}

export default ProdGuide;