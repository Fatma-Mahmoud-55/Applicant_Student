import SideBar from '../../../components/SideBar/SideBar';
import style from './ViewDetails.module.css';
import StudentImg from '../../../img/student/Ellipse 2.png'
import axiosInstance from "../../../axiosConfig/instanse.js";
import * as React from "react";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {AiFillPrinter} from "react-icons/ai";

function ViewDetails() {
    const [applicantData, setApplicant] = useState()
    const [submission_stages, setsubmission_stages] = useState()
    const token = localStorage.getItem('token');
    const id = useParams()

    async function applicantDetails() {
        await axiosInstance.post('/stu/student_applicant_view_one', {
            identifier: id.id
        }).then(res => {
            console.log(res.data.applicant)
            setApplicant(res.data.applicant)
            setsubmission_stages(res.data.applicant.submission_stages_idf)
        }).catch(err => {
            console.log(err)
        })
    }
    const Print = () => {
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        window.location.href = `http://localhost:5173/view_details/${id.id}`;
    }
    async function approve() {
        await axiosInstance.post('/stu/accept_reject_applicant', {
            token: token, stu_app_code: applicantData.stu_app_code, submission_stages_idf: 3
        }).then(res => {
            console.log(res)
            window.location.href = `http://192.168.11.39:5174/view_details/${id.id}`;
        }).catch(err => {
            console.log(err)
        })
    }
    async function disApprove() {
        await axiosInstance.post('/stu/accept_reject_applicant', {
            token: token, stu_app_code: applicantData.stu_app_code, submission_stages_idf: 2
        }).then(res => {
            console.log(res)
            window.location.href = `http://192.168.11.39:5174/view_details/${id.id}`;
        }).catch(err => {
            console.log(err)
        })
    }

    // console.log(applicantData.submission_stages_name == 'in process')
    if(submission_stages === 3  ){
        const app = document.getElementById('approv')
        app.disabled = true
    }
    useEffect(() => {
        if (id) {
            applicantDetails()
        }

    }, [id])
    console.log()
    return (<>
            <SideBar/>
            <div
                className={`d-flex align-items-center justify-content-center ${style.w_80}  ${style.margin_top} m-auto   flex-column mt-5`}>
                <div className={`py-3 px-4 ${style.reportTableBox} w-100 mt-2 mb-5 bg-white `} id='printablediv'>
                    <div className={`row  mb-3 justify-content-between align-items-center`}>
                        <div className={`col-md-4`}>
                            <h5 className={`w-100 mb-3 text-capitalize ${style.color} ${style.header}`}>applicant
                                registration | view details</h5>
                        </div>
                        <div className='col-md-5 my-3'>
                            <div className='row d-flex justify-content-end align-items-cente  ' id='sec' >
                                <button className={`btn ${style.button} me-2 `}>
                                    Edit
                                </button>
                                <button className={`btn ${style.button} me-2`}>
                                    Upload File
                                </button>
                                <button className={`btn ${style.button} me-2`} onClick={Print}>
                                    <AiFillPrinter className='mx-1'/>
                                    Print
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className={`${style.headerBox} `}>

                        <div className='row align-items-center'>
                            <div className={`col-md-3`}>
                                <img src={StudentImg} className='w-100'/>
                            </div>
                            <div className={`col-md-9 d-flex justify-content-center `}>
                                <div id='sec'>
                                    <h4 className={`${style.StudentName} text-capitalize fw-bold`}>{applicantData?.s_en_first_name} {applicantData?.s_en_second_name} {applicantData?.s_en_last_name}</h4>
                                    <h5 className={`${style.StudentName} text-capitalize fw-bold mb-4`}>status
                                        : {applicantData?.submission_stages_name} </h5>
                                    <button id='approv' className={`btn ${style.approveBtn} fw-bold me-2`} onClick={approve}>
                                        approve application
                                    </button>
                                    <button className={`btn ${style.RejectedBtn} fw-bold`} onClick={disApprove}>
                                        reject application
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>admission information</h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-4 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>Course</p>
                                        <p className={`${style.txt}`}>Programme</p>
                                        <p className={`${style.txt}`}>Semester</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.grade_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.program_name} </p>
                                        <p className={`${style.data}`}>{applicantData?.grade_year}</p>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-4 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt}`}>Reg No</p>
                                        <p className={`${style.txt}`}>Year</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}>
                                            {applicantData?.stu_app_code}
                                        </p>
                                        <p className={`${style.data}`}>
                                            {applicantData?.grade_year}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>placement test mark</h6>
                        <p className={`${style.txt} pt-2`}>placement test mark :</p>
                    </div>

                    <div className='mt-4'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>basic information</h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>applicant date </p>
                                        <p className={`${style.txt} text-capitalize`}>middle name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>first name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>last name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>national ID/iqama ID</p>
                                        <p className={`${style.txt} text-capitalize`}>source date</p>
                                        <p className={`${style.txt} text-capitalize`}>parent iqama ID source</p>
                                        <p className={`${style.txt} text-capitalize`}>gender</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.grade_year}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_lc_second_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_en_first_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_en_last_name}</p>
                                        <p className={`${style.data}`}>----</p>
                                        <p className={`${style.data}`}>{applicantData?.s_nationality_id}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_nationality_id_source}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_gender}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt} text-capitalize`}>first name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>last name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>middle name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>nationality</p>
                                        <p className={`${style.txt} text-capitalize`}>national ID source</p>
                                        <p className={`${style.txt} text-capitalize`}>birth country</p>
                                        <p className={`${style.txt} text-capitalize`}>religion</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}>{applicantData?.s_lc_first_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_lc_second_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_en_third_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_national_id_source}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_city}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_national_id_source}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_religion}</p>

                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>Contact Information</h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>address </p>
                                        <p className={`${style.txt} text-capitalize`}>district</p>
                                        <p className={`${style.txt} text-capitalize`}>phone</p>
                                        <p className={`${style.txt} text-capitalize`}>email </p>

                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.s_address}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_district}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_phone}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_email}</p>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt} text-capitalize`}>city</p>
                                        <p className={`${style.txt} text-capitalize`}>country</p>
                                        <p className={`${style.txt} text-capitalize`}>mobile</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}>{applicantData?.s_city}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_national_id_source}</p>
                                        <p className={`${style.data}`}>{applicantData?.s_mobile}</p>
                                    </div>

                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>Parent Or Guardian Information</h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>first name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>last name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>middle name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>national ID/iqama ID</p>
                                        <p className={`${style.txt} text-capitalize`}>source date</p>
                                        <p className={`${style.txt} text-capitalize`}>occupation</p>
                                        <p className={`${style.txt} text-capitalize`}>DOP</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.g_lc_first_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_lc_last_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_en_third_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_national_id}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_nationality_id_expiry}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_job}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_birth_date}</p>
                                    </div>

                                </div>

                            </div>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt} text-capitalize`}>middle name(aR)</p>
                                        <p className={`${style.txt} text-capitalize`}>first name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>last name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>middle name(EN)</p>
                                        <p className={`${style.txt} text-capitalize`}>national ID source</p>
                                        <p className={`${style.txt} text-capitalize`}>relation</p>
                                        <p className={`${style.txt} text-capitalize`}>education</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}>{applicantData?.g_lc_third_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_en_first_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_en_last_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_en_third_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_nationality_id_source}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_relation}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_education}</p>
                                    </div>

                                </div>
                            </div>

                            <div>

                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>Parent or Guardian Contact
                            Information</h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>office address </p>
                                        <p className={`${style.txt} text-capitalize`}>district</p>
                                        <p className={`${style.txt} text-capitalize`}>country</p>
                                        <p className={`${style.txt} text-capitalize`}>email</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.g_office_address}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_district}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_city}</p>
                                        <p className={`${style.data}`}>{applicantData?.g_email}</p>

                                    </div>

                                </div>

                            </div>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt} text-capitalize`}>home address</p>
                                        <p className={`${style.txt} text-capitalize`}>city</p>
                                        <p className={`${style.txt} text-capitalize`}>mother phone</p>
                                        <p className={`${style.txt} text-capitalize`}>emergency mobile</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}> {applicantData?.s_address} </p>
                                        <p className={`${style.data}`}> {applicantData?.g_city} </p>
                                        <p className={`${style.data}`}> {applicantData?.mother_mobile} </p>
                                        <p className={`${style.data}`}> {applicantData?.emergency_phone} </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                            </div>
                        </div>

                    </div>
                    <div className='mt-5'>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}></h6>
                        <div className='row p-0 m-0 pt-3'>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6'>
                                        <p className={`${style.txt} text-capitalize`}>last attended institution</p>
                                        <p className={`${style.txt} text-capitalize`}>last grade</p>
                                        <p className={`${style.txt} text-capitalize`}>score</p>
                                    </div>
                                    <div className='col-md-6'>
                                        <p className={`${style.data}`}>{applicantData?.s_lc_second_name}</p>
                                        <p className={`${style.data}`}>{applicantData?.last_grade}</p>
                                        <p className={`${style.data}`}>{applicantData?.grade_score}</p>

                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 m-0 p-0'>
                                <div className='row p-0 m-0 '>
                                    <div className='col-md-6 '>
                                        <p className={`${style.txt} text-capitalize`}>country</p>
                                        <p className={`${style.txt} text-capitalize`}>Year</p>
                                        <p className={`${style.txt} text-capitalize`}>evaluation</p>
                                    </div>
                                    <div className='col-md-6 '>
                                        <p className={`${style.data}`}>{applicantData?.school_country}</p>
                                        <p className={`${style.data}`}>{applicantData?.grade_year}</p>
                                        <p className={`${style.data}`}>{applicantData?.grade_evaluation}</p>
                                    </div>

                                </div>
                            </div>

                            <div>

                            </div>
                        </div>
                        <h6 className={`py-2 ${style.info} fw-bold text-capitalize`}>Additional Details</h6>

                    </div>

                </div>

            </div>
        </>

    )

}

export default ViewDetails;