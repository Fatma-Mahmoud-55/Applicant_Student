import SideBar from '../../../components/SideBar/SideBar';
import style from './ViewApplicant.module.css';
import {Link} from 'react-router-dom';
import axiosInstance from "../../../axiosConfig/instanse.js";
import {useEffect, useState} from "react";
import * as React from "react";
import {HashLoader} from "react-spinners";
const token = localStorage.getItem('token');

function ViewApplicant() {
    const [viewApplicant, setViewApplicant] = useState([])
    const [loading, setLoading] = useState(false)

    async function applicantData() {
        setLoading(true)
        await axiosInstance.post('/stu/student_applicant_view', {
            token: token
        }).then(res => {
            console.log(res.data.applicant_arr)
            setViewApplicant(res.data.applicant_arr)
            setLoading(false)

        }).catch(err => {
            console.log(err)
            setLoading(false)
        })
    }
    useEffect(() => {
        applicantData()
    }, [])

    function filterData() {
        console.log("filter")
    }

    return (<>
            <SideBar/>
            <div
                className={`d-flex align-items-center justify-content-center ${style.w_80}  ${style.margin_top} m-auto flex-column `}>
                <div className={`py-5 px-4 ${style.reportTableBox} mt-2 mb-5  bg-white`}>
                    <h5 className={`w-100 mb-4 text-capitalize  ${style.color} ${style.header}`}>applicant registration
                        | Show</h5>
                    <div className={`row  ${style.w_80} mx-auto mb-3 justify-content-between`}>
                        <div className=' col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5  text-capitalize my-0   ${style.color} ${style.yearSize}`}>Applicant
                                    :</h6>
                                <select className={`col-md-7 ${style.selectBg} py-1 rounded`}>
                                    <option>2023/2024, first</option>
                                    <option>2023/2024, second</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5 text-capitalize my-0  ${style.color} ${style.yearSize}`}>Search
                                    :</h6>
                                <select className={`col-md-7 ${style.selectBg} py-1 rounded`}>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>

                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5 text-capitalize my-0  ${style.color} ${style.yearSize}`}>Status
                                    :</h6>
                                <select className={`col-md-7 ${style.selectBg} py-1 rounded`}>
                                    <option></option>
                                    <option></option>
                                </select>
                            </div>

                        </div>
                        <div className=' col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5 text-capitalize my-0  ${style.color} ${style.yearSize}`}>Gender
                                    :</h6>
                                <select className={`col-md-7 ${style.selectBg} py-1 rounded`} onChange={(e) => {
                                    (e.target.value)
                                }}>
                                    <option>Female</option>
                                    <option>Male</option>
                                </select>
                            </div>
                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5 text-capitalize my-0  ${style.color} ${style.yearSize}`}>From
                                    :</h6>
                                <input className={`col-md-7 ${style.selectBg} py-1 rounded`} type='date'/>
                            </div>

                        </div>
                        <div className='col-md-4 my-3'>
                            <div className='row d-flex justify-content-between px-3 align-items-center'>
                                <h6 className={`col-md-5 text-capitalize my-0  ${style.color} ${style.yearSize}`}>To
                                    :</h6>
                                <input className={`col-md-7 ${style.selectBg} py-1 rounded`} type='date'/>
                            </div>

                        </div>
                    </div>
                    <div className={`row justify-content-center align-items-center mb-2`}>
                        <button className={`btn btn-primary ${style.w_15} ${style.btnTxt}`}
                                onClick={filterData}>Filter
                        </button>
                    </div>
                    <div className={`row p-0 mx-0 my-3`}>
                        <div className='d-flex '>
                            <Link to='/rep' className={`p-2 text-decoration-none   ${style.color2}`}>
                                <button className={`btn btn-primary col-md-1 me-2 w-100 p-2 ${style.btnTxt}`}>main
                                </button>
                            </Link>
                            <Link to="/rep" className={`p-2 text-decoration-none  ${style.color2}`}>
                                <button className={`btn btn-primary col-md-1 me-2  w-100 p-2 ${style.btnTxt}`}> Allot
                                    Student
                                </button>
                            </Link>
                            <Link to="/rep" className={`p-2 text-decoration-none  ${style.color2}`}>
                                <button className={`btn btn-primary col-md-1 me-2 w-100 p-2 ${style.btnTxt}`}> Reject
                                    Applicant
                                </button>
                            </Link>
                        </div>
                    </div>
                    {loading ? <div className="d-flex justify-content-center">
                        <HashLoader color="#0d6efd"/>
                    </div> : <div className={`${style.reportTable} w-100 mx-1 py-0 row `}>
                        <div
                            className={`border-bottom col-md-12 d-flex justify-content-between align-items-center `}>
                            <p className={`col  py-1 h-100 mb-0 text-center ${style.repText_primary} fw-bold border-end text-primary ${style.courseTxt}`}>No</p>
                            <p className={` py-1 h-100 col mb-0 text-center fw-bold border-end ${style.repText_primary}`}>App-code</p>
                            <p className={` py-1 h-100 col-md-2 mb-0 ${style.repText_primary} text-center border-end fw-bold text-primary`}>Name</p>
                            <p className={` py-1 h-100 col mb-0 ${style.repText_primary} text-center border-end fw-bold text-primary`}>Mobile</p>
                            <p className={` py-1 h-100 col mb-0 ${style.repText_primary} text-center border-end fw-bold text-primary`}>Grade</p>
                            <p className={` py-1 h-100 col mb-0 ${style.repText_primary} text-center border-end fw-bold text-primary`}>Programme</p>
                            <p className={` py-1 h-100 col ${style.repText_primary} fw-bold mb-0 text-center text-primary border-end `}>Batch</p>
                            <p className={` py-1 h-100 col ${style.repText_primary} fw-bold mb-0 text-center text-primary border-end `}>Nationality</p>
                            <p className={` py-1 h-100 col ${style.repText_primary} fw-bold mb-0 text-center text-primary border-end `}>Statues</p>
                            <p className={` py-1 h-100 col ${style.repText_primary} fw-bold mb-0 text-center text-primary `}></p>
                        </div>
                        {viewApplicant.map((data) => {
                            return (<div
                                    className={`d-flex  border-bottom justify-content-between align-items-center ${style.height} ${style.bg_row}`}>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={`w-100 py-2 mb-0 text-center ${style.color}`}>{data.gnl_prog_idf}</p>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <Link to={`/view_details/${data.identifier}`} target="_blank"
                                              className={`${style.appLink} p-2`}><p
                                            className={`w-100 py-2 mb-0  ${style.color}`}>{data.stu_app_code}</p>
                                        </Link>
                                    </div>
                                    <div className={`col-md-2 h-100 border-end d-flex align-items-center`}>
                                        <Link to={`/view_details/${data.identifier}`} target="_blank"
                                              className={`${style.appLink} text-center p-2`}><p
                                            className={`w-100 py-2 mb-0 text-center ${style.color}`}>{data.s_en_first_name + data.s_en_second_name + data.s_en_last_name}</p>
                                        </Link>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>{data.s_mobile}</p>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>{data.grade_name}</p>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>{data.program_name}</p>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>مختلط-ط-4220</p>
                                    </div>
                                    <div className={`col h-100 border-end d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>{data.s_nationality_name}</p>
                                    </div>
                                    <div
                                        className={`col h-100 border-end d-flex align-items-center ${style.allotted}`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color} `}>{data.submission_stages_name}</p>
                                    </div>

                                    <div className={`col h-100 d-flex align-items-center`}>
                                        <p className={` w-100 py-2 mb-0 text-center ${style.color}`}>Reject</p>
                                    </div>
                                </div>)
                        })}
                        <div
                            className={`d-flex  border-bottom justify-content-between align-items-center ${style.height} `}>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={`w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={`w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col-md-2 h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>
                            <div className={`col h-100 border-end d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>

                            <div className={`col h-100 d-flex align-items-center`}>
                                <p className={` w-100 py-2 mb-0 text-center ${style.color}`}></p>
                            </div>

                        </div>
                    </div>}
                </div>

            </div>
        </>)

}

export default ViewApplicant;