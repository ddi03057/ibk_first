import Progress from './pages/0_common/Progress.js';
import ProdGuide from './pages/1_guide/ProdGuide.js'
import PreGuide from './pages/1_guide/PreGuide.js';
import JudgeStep1 from './pages/2_judge/JudgeStep1.js';
import JudgeStep2 from './pages/2_judge/JudgeStep2.js';
import JudgeStep3 from './pages/2_judge/JudgeStep3.js';
import JudgeResult from './pages/2_judge/JudgeResult.js';
import JudgeDocResult from './pages/2_judge/JudgeDocResult.js';
import ProCheck from './pages/2_judge/ProCheck.js';
import PreJudgeInfoAdd from './pages/2_judge/PreJudgeInfoAdd.js';
import PreJudgeResult from './pages/2_judge/PreJudgeResult.js';
import LoanCheck1 from './pages/3_apply/LoanCheck1.js';
import LoanCheck2 from './pages/3_apply/LoanCheck2.js';
import LoanCheck3 from './pages/3_apply/LoanCheck3.js';
import LoanFail1 from './pages/3_apply/LoanFail1.js';
import LoanFail2 from './pages/3_apply/LoanFail2';
import LoanCancle from './pages/3_apply/LoanCancle.js';
import StartLoan1 from './pages/4_execute/StartLoan1.js';
import StartLoan2 from './pages/4_execute/StartLoan2.js';
import LoanContract from './pages/4_execute/LoanContract.js';
import LoanClause from './pages/4_execute/LoanClause.js';
import LoanEnd from './pages/4_execute/LoanEnd.js';
import PathConstants from './modules/constants/PathConstants.js';
import { Route, Routes } from "react-router";


//라우터 목록 정의
function Routing() {
  // const EsgRouting = (path) => {
  //   return location.href = `//${window.location.host}/esgLogin.html${path.location.search}&apiurl=${process.env.REACT_APP_API_URL}`;
  // }
  
  return (
    <Routes>
      <Route path={PathConstants.PROGRESS} element={<Progress prams={null}/>} />
      <Route path={PathConstants.GUIDE_DETAIL} element={<ProdGuide />} />
      <Route path={PathConstants.GUIDE_READY} element={<PreGuide />} />
      <Route path={PathConstants.PREJUDGE_CUSTAGREE} element={<JudgeStep3 />} />
      <Route path={PathConstants.PREJUDGE_SUITTEST} element={<JudgeStep1 />} />
      <Route path={PathConstants.PREJUDGE_SUITRESULT} element={<JudgeResult />} />
      <Route path={PathConstants.PREJUDGE_SELFCHECK} element={<JudgeStep2 />} />
      <Route path={PathConstants.PREJUDGE_GRTINFOINPUT} element={<div>사전심사자료작성(보증신청정보입력)</div>} />
      <Route path={PathConstants.PREJUDGE_DOCSTATUS} element={<JudgeDocResult />} />
      <Route path="/procheck" element={<ProCheck />} />
      <Route path="/PreJudgeInfoAdd" element={<PreJudgeInfoAdd />} />
      <Route path="/prejudgeresult" element={<PreJudgeResult />} />
      <Route path="/loancheck1" element={<LoanCheck1 />} />
      <Route path="/loancheck2" element={<LoanCheck2 />} />
      <Route path="/loancheck3" element={<LoanCheck3 />} />
      <Route path="/loanfail1" element={<LoanFail1 />} />
      <Route path="/loanfail2" element={<LoanFail2 />} />
      <Route path="/loancancle" element={<LoanCancle />} />
      <Route path="/startloan1" element={<StartLoan1 />} />
      <Route path="/startloan2" element={<StartLoan2 />} />
      <Route path="/loancontract" element={<LoanContract />} />
      <Route path="/loanclause" element={<LoanClause />} />
      <Route path="/loanend" element={<LoanEnd />} />
      {/* <EsgRouting path={`/common/login`} /> */}
      <Route path="*" element={<div>404</div>} />
    </Routes>
  );

}

export default Routing;