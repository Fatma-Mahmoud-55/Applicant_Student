import * as React from 'react';
import {useEffect, useState} from 'react';
import SideBar from '../../../components/SideBar/SideBar';
import style from './Reg_AcceptanceReport.module.css';
import {Link} from 'react-router-dom';
import axiosInstance from '../../../axiosConfig/instanse';
import {HashLoader} from "react-spinners";
import {AiFillPrinter} from "react-icons/ai";

function Reg_AcceptanceReport() {
    const [s_academic_year, setYearId] = useState(1);
    const [data, setData] = useState([]);
    const [yearData, setYearData] = useState([]);
    const [loading, setLoading] = useState(false)

    async function fetchData() {
        //Year_id
        await axiosInstance.post('gnl_settings/gnl_academic_year_view', {
            token: '54a7c267b5708567c296e5b2e201318a8c11dfdd'
        }).then(res => {
            setYearData(res.data.aca_year_arr);
            console.log(res.data.aca_year_arr)

        }).catch(error => {
            console.log(error)
        })
        //report
        setLoading(true)
        await axiosInstance.post("stu/student_applicant_report", {
            s_academic_year: s_academic_year
        }).then(res => {
            setData(res.data.student_applicant_report)
            setLoading(false)
            console.log('res', res.data.student_applicant_report);
        }).catch(error => {
            console.log(error);
            setLoading(false)

        });
    }

    const Print = () => {
        document.getElementById('sec').style.display = 'none';
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        window.location.href = 'http://localhost:5173/rep';
    }

    useEffect(() => {
        fetchData()
    }, [s_academic_year]);
    return (<>
        <SideBar/>
        <div className='mt-5'>
            <div
                className={`d-flex align-items-center justify-content-center    ${style.margin_top} m-auto flex-column `}>
                <h5 className={`w-75 mb-3 me-5 text-capitalize ${style.color} fs-5`}>applicant registration |
                    dashboard</h5>
                <div className={`py-5 px-4 ${style.reportTableBox}  mt-2 mb-5 bg-white w-75`} id='printablediv'>
                    <div className={`row  w-100 mb-3 justify-content-between align-items-center`}>
                        <div className=' col-md-4 '>
                            <div className='d-flex justify-content-between '>
                                <h6 className={`text-capitalize my  ${style.color} ${style.yearSize}`}>year &
                                    semester</h6>
                                <select className={` ${style.selectBg} w-50 rounded`} onChange={(e) => {
                                    setYearId(e.target.value)
                                }}>
                                    {/*<option >{yearData[0].tit}</option>*/}
                                    {yearData.map((year, index) => {
                                        return (<option key={index} value={year.id}>{year.title_en}</option>)
                                    })}
                                </select>
                            </div>
                        </div>
                        <div className='col-md-6 p-0 m-0 ' id='sec'>
                            <div className='d-flex justify-content-between'>
                                <button className='btn btn-primary' onClick={() => {
                                    console.log("onclick()")
                                    Print()
                                }}>
                                    <AiFillPrinter className='mx-1'/>
                                    Print
                                </button>
                                <button className='btn btn-primary'>
                                    <Link to='/ViewApplicant'
                                          className={`p-2 text-decoration-none ${style.color2} `}>View
                                        Applicants</Link>
                                </button>
                                <button className='btn btn-primary'>
                                    <Link to='/ViewApplicant'
                                          className={`p-2 text-decoration-none ${style.color2} `}>Alloted
                                        Applicants</Link>
                                </button>
                                <button className='btn btn-primary'>
                                    Rejected Applicants
                                </button>
                            </div>
                        </div>
                    </div>
                    {loading ? <div className="d-flex justify-content-center">
                        <HashLoader color="#0d6efd"/>
                    </div> : <div className={`${style.reportTable} w-100 mx-1 py-0 row `}>

                        <div
                            className={`border-bottom col-md-12 d-flex justify-content-between align-items-center text-capitalize p-0 m-0`}>
                            <p className={`col-md-2 p-2 h-100 mb-0 text-start ${style.repText_primary} fw-bold border-end text-primary ${style.courseTxt}`}>Course</p>
                            <p className={`p-2 h-100 col mb-0 text-start fw-bold border-end ${style.repText_primary}`}>pending </p>
                            <p className={`p-2 h-100 col mb-0 ${style.repText_primary} text-start border-end fw-bold text-primary`}>in
                                process</p>
                            <p className={`p-2 h-100 col mb-0 ${style.repText_primary} text-start border-end fw-bold text-primary`}>Rejected</p>
                            <p className={`p-2 h-100 col mb-0 ${style.repText_primary} text-start border-end fw-bold text-primary`}>accepted</p>
                            <p className={`p-2 h-100 col mb-0 ${style.repText_primary} text-start border-end fw-bold text-primary`}>Total</p>
                            <p className={`p-2 h-100 col-md-2 ${style.repText_primary} fw-bold mb-0 text-start text-primary ${style.courseTxt}`}>Actions</p>
                        </div>
                        {data.map((data) => {
                            return (<div className='p-0 m-0'>
                                <div
                                    className={`d-flex border-bottom justify-content-between align-items-center ${style.bg_row}`}>
                                    <p className={`col-md-2 p-2 h-100 mb-0 text-start ${style.color} border-end`}>{data.grd_name_en}</p>
                                    <p className={`p-2 h-100 col mb-0 text-start ${style.color} border-end`}>{data.submission_stages_title[0].count}</p>
                                    <p className={`p-2 h-100 col mb-0 text-start ${style.color} border-end`}>{data.submission_stages_title[1].count}</p>
                                    <p className={`p-2 h-100 col mb-0 text-start ${style.color} border-end`}>{data.submission_stages_title[2].count}</p>
                                    <p className={`p-2 h-100 col mb-0 text-start ${style.color} border-end`}>{data.submission_stages_title[3].count}</p>
                                    <p className={`p-2 h-100 col mb-0 text-start ${style.color} border-end`}>
                                        {data.submission_stages_title[0].count + data.submission_stages_title[1].count + data.submission_stages_title[2].count + data.submission_stages_title[3].count}
                                    </p>
                                    <Link to={`/ViewApplicant/`}
                                          className={`p-2 fw-bold text-decoration-none h-100 col-md-2 mb-0 text-start ${style.color} ${style.link}`}>View
                                        Applicants</Link>
                                </div>
                            </div>)
                        })}
                        <div className={`d-flex justify-content-between align-items-center ${style.bg_row}`}>
                            <p className={`col-md-2  ${style.repText_primary} p-2 mb-0 ${style.courseTxt} text-start  border-end`}>
                                Total : {data.length}</p>
                            <p className={`p-2 col mb-0 text-start  h-100 border-end`}>{data.acadimec_year_title_en}</p>
                            <p className={`p-2 col mb-0 text-start  h-100 border-end`}></p>
                            <p className={`p-2 col mb-0 text-start  h-100 border-end`}></p>
                            <p className={`p-2 col mb-0 text-start  h-100 border-end`}></p>
                            <p className={`p-2 col mb-0 text-start  h-100 border-end`}></p>
                            <p className={`p-2 col-md-2 mb-0 h-100  text-start  `}></p>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    </>)

}

export default Reg_AcceptanceReport;