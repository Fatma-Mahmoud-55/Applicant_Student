import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import axiosInstance from '../../../axiosConfig/instanse.js';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import img from '../../../assets/image/student-login 1.png';
import img from '../../../assets/image/login.svg';
import logo from "../../../assets/image/download.png";
import { Link } from 'react-router-dom';
import './student.css'
import Swal from "sweetalert2";


function StudentLogin() {

    const navigate = useNavigate();
    const [studentId, setStudentId] = useState("");
    const [nationalId, setNationalId] = useState("");
    const [registered, setRegistered] = useState(false);

const login = async () => {
    await axiosInstance.post("/student/applicant-login/", {
        iqama_id:nationalId ,
        applicant_no: studentId,
    }).then((res)=>{
        console.log(res.data,"RESSSSSSSSSS");
        if(res.data.token){
        localStorage.setItem("token",res.data.token);

                // Swal.fire({
                //     title: 'Success!',
                //     text: `Hello ${res.data.username}`,
                //     icon: 'success',
                //     timer:2000,
                //     showConfirmButton: false
                // });
                // navigate('/showStudentData')
            navigate('/applicant_status', { state: { applicant_no: studentId, iqama_id: nationalId } })
        }
    }).catch((err)=>{
        console.log(err,"errrrrr")
        // Swal.fire({
        //     title: 'Error!',
        //     text: ` ${err}`,
        //     icon: 'error',
        //
        // });
    })
}


    return (
        <>
            <div className="vh-100 d-flex flex-column m-0 p-0 ">
                <div className="row p-0 m-0 vh-100">
                    <div className='col-lg-6 col-md-6 col-sm m-0 p-0 '>
                        <nav className='navbar navbar-expand-lg shadow-sm bg-white pt-2 mt-auto '>
                            <Link className="col-md-6 navbar-brand  " to="/">
                                <img src={logo} style={{ width: '170px' }} className="ms-2 " />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="col-md-6 collapse navbar-collapse justify-content-end pe-5"
                                id="navbarSupportedContent">
                                <span className='text-dark fs-6 pe-1'>You Have Not Registered ?</span>
                                <Link  className=' text-decoration-none  mx-2 bg-primary rounded-3 ps-3 pe-3 p-1 text-white' to="/applicantReg">
                                    Register
                                </Link>

                            </div>
                        </nav>


                        <div className=" my-5 py-5 " style={{height:'83% ' , display:'flex' , alignItems:'center' , justifyContent:'center'}}>
                            <div className=" rounded-3 shadow row col-md-6 col-lg-6 col-sm-9
                            col-9 m-auto bg-white p-5 py-4 ps-0 pe-0 ">
                                <form>
                                    <h3 className='pb-3 mb-2 text-center'>Login</h3>

                                    <label>National ID:</label>
                                    <input className="form-control my-2 mb-3" onChange={(e) => { setNationalId(e.target.value) }} placeholder="Enter National ID" />

                                    <label>Order Number: </label>
                                    <input className="form-control my-2 mb-3" onChange={(e) => { setStudentId(e.target.value) }} placeholder="Enter Order Namber" />

                                    {/*<button className="btn btn-primary rounded-2 my-2 form-control" onClick={() => { navigate('/applicant_status', { replace: true, state: { studentId: studentId, nationalId: nationalId } }) }} >Login</button>*/}
                                    <button className="btn btn-primary rounded-2 my-2 form-control"
                                         type="button"   onClick={() => {login()}} >Login</button>
                                </form>
                            </div>
                        </div>
                    </div>


                    <div className="col-md-6 col-sm pt-5 d-none d-sm-none bg-primary
                    d-md-flex justify-content-center align-items-center ">
                        <img src={img} />
                    </div>
                </div>



                {/* </div> */}
                <div className="col-12 bg-primary fixed-bottom">
                    <div className='container-fluid'>
                        <div className='d-flex justify-content-between px-3'>
                            <div className='col-lg-6'>
                                <a href='#' className='text-white text-decoration-none'>AlRowad (AITSP) 2022 All rights
                                    reserved.</a>
                            </div>
                            <div className='col-md-6'>
                                <div className='d-flex justify-content-md-end align-items-center h-100'>
                                    <a href='#' className='text-white text-decoration-none'><FaFacebookSquare
                                        className='me-2 text-white' /></a>
                                    <a href='#' className='text-white text-decoration-none'><FaYoutube
                                        className='me-2 text-white' /></a>
                                    <a href='#' className='text-white text-decoration-none'><FaInstagram
                                        className='me-2 text-white' /></a>
                                    <a href='#' className='text-white text-decoration-none'><FaLinkedin
                                        className='me-2 text-white' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )



}


export default StudentLogin;