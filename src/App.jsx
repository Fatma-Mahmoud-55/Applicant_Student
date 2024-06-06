import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Main/Home/Home";
import Footer from "./components/Footer/Footer";
import FooterNormal from "./components/FooterNormal/FooterNormal";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import PasswordRecovery from "./components/PasswordRecovery/PasswordRecovery";
import Reset from "./components/ResetPassword/Reset";
import Activate from "./components/Activate/Activate";



import StudentForm from './pages/Admission/Student/studentForm.jsx';
import StudentLogin from './pages/Admission/student_login/Student_Login';
import StudentStatus from './pages/Admission/student_login/StudentStatus';
import ShowStuData from './pages/Admission/ShowStuData/ShowStuData.jsx';
import Reg_AcceptanceReport from './pages/Admission/Registration_Acceptance_report/Reg_AcceptanceReport.jsx';
import ViewApplicant from './pages/Admission/View_Applicant/ViewApplicant';
import Stu_Final_Page from './pages/Admission/Student/Stu_Final_Page.jsx';
import ViewDetails from './pages/Admission/ViewDetails/ViewDetails.jsx';
// -------------------------- end Admission and Registration modules componants  --------------------------//

import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                </Routes>
                <Routes>
                    {/* -------------------------------- common componants -----------------------------------*/}
                    <Route exact path="/" element={<>
                        <Navbar/>
                        <Home/>
                    </>}/>
                    <Route exact path="/home" element={<>
                        <Navbar/>
                        <Home/>
                    </>}/>
                    <Route exact path='/applicantReg' element={<StudentForm/>}/>
                    <Route exact path="/login" element={<>

                        <Login/>
                        </>}/>
                    <Route exact path="/register" element={<Register/>}/>
                    <Route exact path="/activate/:token" element={<Activate/>}/>
                    <Route exact path="/password_recovery" element={<PasswordRecovery/>}/>
                    <Route exact path="/reset_password" element={<Reset/>}/>

                    {/* -------------------------------- Admission Module -----------------------------------*/}
                    {/*<Route exact path ='/applicantReg' element = {<Form/>} />*/}
                    <Route exact path="/applicant_login" element={<StudentLogin/>}/>
                    <Route exact path="/applicant_status" element={<StudentStatus/>}/>
                    <Route exact path='/showStudentData' element={<ShowStuData/>}/>
                    <Route exact path='/rep' element={<Reg_AcceptanceReport/>}/>
                    <Route exact path='/viewApplicant' element={<ViewApplicant/>}/>
                    <Route exact path='/stu_final_page' element={<Stu_Final_Page/>}/>
                    <Route exact path='/view_details/:id' element={<ViewDetails/>}/>
                    {/* -------------------------------- General setting -----------------------------------*/}


                    <Route element={<PrivateRoutes/>}>
                        {/* -------------------------------- HR Module ----------------------------------*/}




                        {/* - Evaluation -*/}

                    </Route>
                </Routes>
                {/*<FooterNormal/>*/}
                {/*<Footer/>*/}
            </BrowserRouter>
        </>
    );
}

export default App;
