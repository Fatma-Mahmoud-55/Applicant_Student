import axiosInstance from '../../../axiosConfig/instanse.js';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import accepted from '../../../assets/image/Accepted.svg';
import reject from '../../../assets/image/Reject.svg';
import inproccess from '../../../assets/image/InProccess.svg';
import { AiFillEye } from 'react-icons/ai';
import { useNavigate, Link } from 'react-router-dom';
import { AiFillPrinter } from 'react-icons/ai';
import logo from "../../../assets/image/download.png";
import './student.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import Swal from "sweetalert2";

function StudentStatus() {

    const [registered, setRegistered] = useState(false);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const location = useLocation();

    const applicant_nom = location.state.applicant_no;
    const iqama_idd = location.state.iqama_id;



    const [statusData , setStatusData] = useState({
        applicant_no:"",
        applicant_status:"",
        email:"",
        full_name:"",
        grade_name:"",
        iqama_id:"",
        phone1:""
    });


    const logout = async ()=>{
        // localStorage.removeItem("token");
        await axiosInstance.post('/student/applicant-logout/',{
            token:token
        },{
            headers:{
                "Authorization" : `Token ${token}`,
            }
        }).then((response) => {
            console.log(response,"hhhhhhhhhh")
            if (response.data.success){
                localStorage.removeItem("token");
                Swal.fire({
                    title: 'Success!',
                    text: `${response.data.success}`,
                    icon: 'success',
                    timer:2000,
                    showConfirmButton: false
                });
                navigate("/applicant_login")
            }
        }).catch((error) => {
            console.log(error)
        })
    }



    const  viewStatus = async ()=>{
        await axiosInstance.post("/student/view-status-applicant/",{
            iqama_id:iqama_idd,
            applicant_no:applicant_nom
        }).then((res)=>{
            console.log(res,"RESSSSSSSSSSSS");
            // const data = res.data.success;
            const data = res.data.success[0];
            setStatusData({
                applicant_no: data.applicant_no,
                applicant_status: data.applicant_status,
                email: data.email,
                full_name: data.full_name,
                grade_name: data.grade_name,
                iqama_id: data.iqama_id,
                phone1: data.phone1
            });
            console.log(data.applicant_no,"asfdtuyut")
        }).catch((err)=>{
            console.log(err,"Error")
        })
    }

    useEffect(() => {
        viewStatus()
        console.log(statusData,"fatma")

        if (token) {
            setRegistered(true)
        }else {
            setRegistered(false)
        }

    }, []);

    function print() {
        window.print();
    }
    function showData() {
        navigate('/showStudentData')
    }

    return (

        <>


                        <nav className='navbar navbar-expand-lg shadow-sm bg-white pt-2 mt-auto fixed-top col-12'>
                            <Link className=" navbar-brand  " to="/">
                                <img src={logo} style={{ width: '170px' }} className="ms-2 " />
                            </Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className=" collapse navbar-collapse justify-content-end pe-5"
                                id="navbarSupportedContent">
                                <span className='text-dark fs-6 pe-1'>You Have Not Registered ?</span>
                                <button onClick={()=>{
                                    {registered?logout():console.log("dddddddddd")}
                                }}
                                    className=' mx-2 bg-primary rounded-3 ps-3 pe-3 p-1 text-white'>
                                    {registered ? 'Logout' : 'Register'}
                                </button>
                            </div>
                        </nav>











<div className="d-flex flex-column justify-content-center align-items-center ">


                        <div className="w-lg-75 w-sm-100" style={{display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:'10%' }}>
                            <div className=" rounded-3 shadow row col-md-9 col-lg-9 col-sm-9
                            col-9 m-auto bg-white p-5 py-4 ps-0 pe-0 ">
                                <form >
                                    <h3 className='pb-3 mb-2 text-center'>Student Status</h3>


                                    <div className='w-100'>
                                        <label>Status</label>
                                        <input
                                            className={`form-control mb-4 text-center  `}

                                            value={statusData.applicant_status}
                                            disabled
                                        />

                                        <div className='row '>
                                            <div className='col-md-12 col-lg-6 mb-3'>
                                                <label>Registration number</label>
                                                <input className='form-control' value={statusData.applicant_no} disabled />
                                            </div>

                                            <div className='col-md-12 col-lg-6 mb-3'>
                                                <label>National id / Iqama id</label>
                                                <input className='form-control' value={statusData.iqama_id} disabled />
                                            </div>
                                        </div>


                                        <div className='row'>
                                            <div className='col-md-12 col-lg-6 mb-3'>
                                                <label>Name of Applicant</label>
                                                <input className='form-control' disabled
                                                       value={`${statusData.full_name}`} />
                                            </div>

                                            <div className='col-md-12 col-lg-6 mb-3'>
                                                <label>Registration Course</label>
                                                <input className='form-control' value={statusData.grade_name} disabled />
                                            </div>
                                        </div>

                                        <div className='row '>
                                            <div className='cocol-md-12 col-lg-6 mb-3'>
                                                <label>Email</label>
                                                <input className='form-control'
                                                       value={statusData.email}
                                                       disabled />
                                            </div>

                                            <div className='col-md-12 col-lg-6 mb-3'>
                                                <label>Mobile Number</label>
                                                <input className='form-control'
                                                       value={statusData.phone1}
                                                       disabled
                                                />
                                            </div>
                                        </div>

                                        <div className='row'>
                                            <div className='col-md-12 col-lg-6 mb-3 mb-md-1 mb-sm-1'>
                                                <button className='btn btn-outline-primary my-2 my-md-1 my-sm-1 w-100' onClick={showData}> Show</button>
                                            </div>

                                            <div className='col-md-12 col-lg-6 mb-3 mb-md-1 mb-sm-1'>
                                                <button className='btn btn-primary my-2 my-md-1 my-sm-1 w-100' onClick={print}>
                                                    Print
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>
                            </div>
                        </div>

</div>

                    {/*<div className="col-md-6 col-sm pt-5 d-none d-sm-none bg-primary */}
                    {/*d-md-flex justify-content-center align-items-center ">*/}
                    {/*    {data.en_submission_status === 'Accepted' && (*/}
                    {/*        <img src={accepted} alt="Accepted" />*/}
                    {/*    )}*/}
                    {/*    {data.en_submission_status === 'in process' && (*/}
                    {/*        <img src={inproccess} alt="In Process" />*/}
                    {/*    )}*/}
                    {/*    {data.en_submission_status === 'rejected' && (*/}
                    {/*        <img src={reject} alt="Reject" />*/}
                    {/*    )}*/}
                    {/*</div>*/}

            <div className=" d-flex flex-column m-0 p-0 w-100">




                {/* </div> footer  */}
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


export default StudentStatus;