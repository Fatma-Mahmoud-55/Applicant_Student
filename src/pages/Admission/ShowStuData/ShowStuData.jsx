import * as React from 'react';
import {useEffect, useState} from 'react';
import axiosInstance from '../../../axiosConfig/instanse.js';
import style from './ShowStuData.module.css';
import {AiFillPrinter} from 'react-icons/ai';
import { useLocation } from 'react-router-dom';
import login from "../../../components/Login/Login.jsx";

function ShowStuData() {


    const [student_national_id, setStudent_national_id] = useState('');
    const [application_birth_date, setApplication_birth_date] = useState('');
    const [academic_year, setAcademic_year] = useState('');
    const [grade, setGrade] = useState('');
    const [en_first_name, setEn_first_name] = useState('');
    const [en_second_name, setEn_second_name] = useState('');
    const [en_third_name, setEn_third_name] = useState('');
    const [en_last_name, setEn_last_name] = useState('');
    const [lc_first_name, setLc_first_name] = useState('');
    const [lc_second_name, setLc_second_name] = useState('');
    const [lc_third_name, setLc_third_name] = useState('');
    const [lc_last_name, setLc_last_name] = useState('');
    const [s_gender, setS_gender] = useState('');
    const [s_nationality_id, setS_nationality_id] = useState('');
    const [birth_date, setBirth_date] = useState('');
    const [birth_country_id, setBirth_country_id] = useState('');
    const [s_national_id_source, setNational_id_source] = useState('');
    const [s_national_id_expiry, setNational_id_expiry] = useState('');
    const [s_passport_id, setS_passport_id] = useState('');
    const [s_passport_country_id, setS_passport_country_id] = useState('');
    const [s_passport_expiry, setS_Passport_expiry] = useState('');
    const [religion, setReligion] = useState('');
    const [native_language, setNative_language] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [district, setDistrict] = useState('');
    const [mobile, setMobile] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [school_name_en, setSchool_name_en] = useState('');
    const [school_name_lc, setSchool_name_lc] = useState('');
    const [school_country, setSchool_country] = useState('');

    const [last_grade, setLast_grade] = useState('');
    const [grade_year, setGrade_year] = useState('');
    const [grade_score, setGrade_score] = useState('');

    const [grade_evaluation, setGrade_evaluation] = useState('');
    const [mother_mobile, setMother_mobile] = useState('');
    const [employee_name, setEmployee_name] = useState('');
    const [emergency_phone, setEmergency_phone] = useState('');
    const [note, setNote] = useState('');





    const location = useLocation();
    //to get student country name
    const [countries, setCountries] = useState([]);
    const [Coptions, setCOptions] = useState([]);
    //to get academic year Name 
    const [academic_years, setAcademic_years] = useState([]);
    //to get grade name 
    const [grades, setGrades] = useState([]);
    const [religions, setReligions] = useState([]);
    const applicant_nomm = location?.state?.applicant_no;
    const iqama_iddd = location?.state?.iqama_id;
    const [userData , setUserData] = useState({
        address_line:"",
        applicant_no:"",
        birth_country_name:"",
        city:"",
        country:"",
        created_at:"",
        date_of_birth:"",
        third_name:"",
        email:"",
        employee_id_name:"",
        evaluation:"",
        first_name:"",
        first_name_ar:"",
        gender:"",
        grade_name:"",
        guardian_address_line:"",
        guardian_city:"",
        guardian_company:"",
        guardian_country:"",
        guardian_date_of_birth:"",
        guardian_education:"",
        guardian_email:"",
        guardian_emergency_phone:"",
        guardian_first_name:"",
        guardian_first_name_ar:"",
        guardian_iqama_id:"",
        guardian_iqama_source:"",
        guardian_iqama_source_date:"",
        guardian_job:"",
        guardian_last_name:"",
        guardian_last_name_ar:"",
        guardian_mobile_phone:"",
        guardian_mother_phone:"",
        guardian_relation:"",
        guardian_second_name:"",
        guardian_second_name_ar:"",
        guardian_state:"",
        have_siblling:"",
        iqama_id:"",
        iqama_source:"",
        iqama_source_date:"",
        language:"",
        last_attended_school:"",
        last_attended_school_ar:"",
        last_country:"",
        last_grade:"",
        last_name:"",
        last_name_ar:"",
        last_score:"",
        last_year:"",
        nationality:"",
        parent_iqama_id:"",
        parent_iqama_source:"",
        parent_iqama_source_date:"",
        passport_country_name:"",
        passport_expiry_date:"",
        passport_id:"",
        phone1:"",
        phone2:"",
        programme_name:"",
        religion:"",
        second_name:"",
        second_name_ar:"",
        state:"",
        guardian_third_name_ar:"",
        guardian_third_name:""


    })

    // print button
    const Print = () =>{
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        window.location.href = 'http://localhost:5173/showStudentData';
    }





    //fetch Data
    // async function fetchData() {
    //
    //
    //     //api to get country
    //     await axiosInstance.get('emp/drop')
    //         .then(response => {
    //             console.log(response,"LKLLLLLLLLLLL");
    //             setCountries(response.data.drop.ahrm_countries);
    //             // console.log(response.data.drop.ahrm_countries.length);
    //             let countriesOptions = [];
    //             for (var i = 0; i < (response.data.drop.ahrm_countries).length; i++) {
    //                 countriesOptions.push({
    //                     value: response.data.drop.ahrm_countries[i][0], label: response.data.drop.ahrm_countries[i][3]
    //                 })
    //             }
    //             console.log('...');
    //             console.log(countriesOptions);
    //             setCOptions(countriesOptions);
    //             console.log('hhh');
    //             console.log(Coptions);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //
    //     //academic year
    //     await axiosInstance.post('gnl_settings/gnl_academic_year_view')
    //         .then(response => {
    //             console.log('academic year ................ ', response);
    //             setAcademic_years(response.data.aca_year_arr);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //
    //     //grade Name
    //     await axiosInstance.post('gnl_settings/grades_view')
    //         .then(response => {
    //             console.log('garde ... ', response);
    //             setGrades(response.data.gnl_grades_arr);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    //
    //
    //     //studentData
    //
    //     await axiosInstance.post('stu/student_applicant_view_one', {
    //         // token: "",
    //         // student_id: "A_001",
    //         identifier: "1"
    //     }).then(response => {
    //         console.log('res', response);
    //         if (response.data) {
    //             setStudent_national_id(response.data.student[0].s_national_id);
    //             setApplication_birth_date(response.data.student[0].application_birth_date);
    //             setS_gender(response.data.student[0].s_gender);
    //             setMobile(response.data.student[0].s_mobile);
    //             setEn_first_name(response.data.student[0].s_en_first_name);
    //             setEn_last_name(response.data.student[0].s_en_last_name);
    //             setEn_second_name(response.data.student[0].s_en_second_name);
    //             setEn_third_name(response.data.student[0].s_en_third_name);
    //             setLc_first_name(response.data.student[0].s_lc_first_name);
    //             setLc_last_name(response.data.student[0].s_lc_last_name);
    //             setLc_second_name(response.data.student[0].s_lc_second_name);
    //             setLc_third_name(response.data.student[0].s_lc_third_name);
    //             setBirth_date(response.data.student[0].s_birth_date);
    //             setS_nationality_id(response.data.student[0].s_nationality_id);
    //             setBirth_country_id(response.data.student[0].s_birth_country_id);
    //             setNational_id_source(response.data.student[0].s_national_id_source);
    //             setNational_id_expiry(response.data.student[0].s_national_id_expiry);
    //             setS_passport_id(response.data.student[0].s_passport_id);
    //             setS_passport_country_id(response.data.student[0].s_passport_country_id);
    //             setS_Passport_expiry(response.data.student[0].s_passport_expiry);
    //             setReligion(response.data.student[0].s_religion);
    //             setNative_language(response.data.student[0].s_native_language);
    //
    //         }
    //     });
    // };






    // // view one
    const fetchData = async ()=>{
        await axiosInstance.post('/student/view-one-applicant/',{
            iqama_id:iqama_iddd,
            applicant_no:applicant_nomm
        }).then((res)=>{
            console.log(res.data.success[0],"ffrytddddddddtr")
            const allData = res.data.success[0]
            console.log(allData,"DDDDDDDDDddddddddd")

            setUserData({
                address_line:allData.address_line,
                applicant_no:allData.applicant_no,
                birth_country_name:allData.birth_country_name,
                city:allData.city,
                third_name:allData.third_name,
                third_name_ar:allData.third_name_ar,
                country:allData.country,
                created_at:allData.created_at,
                date_of_birth:allData.date_of_birth,
                email:allData.email,
                employee_id_name:allData.employee_id_name,
                evaluation:allData.evaluation,
                first_name:allData.first_name,
                first_name_ar:allData.first_name_ar,
                gender:allData.gender,
                grade_name:allData.grade_name,
                guardian_address_line:allData.guardian_address_line,
                guardian_city:allData.guardian_city,
                guardian_company:allData.guardian_company,
                guardian_country:allData.guardian_country,
                guardian_date_of_birth:allData.guardian_date_of_birth,
                guardian_education:allData.guardian_education,
                guardian_email:allData.guardian_email,
                guardian_emergency_phone:allData.guardian_emergency_phone,
                guardian_first_name:allData.guardian_first_name,
                guardian_first_name_ar:allData.guardian_first_name_ar,
                guardian_iqama_id:allData.guardian_iqama_id,
                guardian_iqama_source:allData.guardian_iqama_source,
                guardian_iqama_source_date:allData.guardian_iqama_source_date,
                guardian_job:allData.guardian_job,
                guardian_last_name:allData.guardian_last_name,
                guardian_last_name_ar:allData.guardian_last_name_ar,
                guardian_mobile_phone:allData.guardian_mobile_phone,
                guardian_mother_phone:allData.guardian_mother_phone,
                guardian_relation:allData.guardian_relation,
                guardian_second_name:allData.guardian_second_name,
                guardian_second_name_ar:allData.guardian_second_name_ar,
                guardian_state:allData.guardian_state,
                have_siblling:allData.have_siblling,
                iqama_id:allData.iqama_id,
                iqama_source:allData.iqama_source,
                iqama_source_date:allData.iqama_source_date,
                language:allData.language,
                last_attended_school:allData.last_attended_school,
                last_attended_school_ar:allData.last_attended_school_ar,
                last_country:allData.last_country,
                last_grade:allData.last_grade,
                last_name:allData.last_name,
                last_name_ar:allData.last_name_ar,
                last_score:allData.last_score,
                last_year:allData.last_year,
                nationality:allData.nationality,
                parent_iqama_id:allData.parent_iqama_id,
                parent_iqama_source:allData.parent_iqama_source,
                parent_iqama_source_date:allData.parent_iqama_source_date,
                passport_country_name:allData.passport_country_name,
                passport_expiry_date:allData.passport_expiry_date,
                passport_id:allData.passport_id,
                phone1:allData.phone1,
                phone2:allData.phone2,
                programme_name:allData.programme_name,
                religion:allData.religion,
                second_name:allData.second_name,
                second_name_ar:allData.second_name_ar,
                state:allData.state,
                guardian_third_name_ar:allData.guardian_third_name_ar,
                guardian_third_name:allData.guardian_third_name

            })
        }).catch((err)=>{
            console.log(err)
        })




        //////////////////////////////////////////
        // countries/view-all-countries/
        await axiosInstance.post('countries/view-all-countries/',{

        }).then((res)=>{
            console.log(res,"Fatmaaaaa")
            console.log(res.data.success.countries);
            setCountries(res.data.success.countries);


        }).catch((err)=>{
            console.log(err)

        })



    //     -------------------------------------------------
        await  axiosInstance.post('/countries/view-all-religions/')
            .then((res)=>{
                console.log(res.data.success.religions,"religionssss")
                setReligions(res.data.success.religions)
            }).catch((err)=>{
                console.log(err)
            })
    }








    useEffect(() => {

        fetchData();
        // viewOne()

    }, []);


    return (

        <>
            <section className={`${style.parentSection} `}>
                <div className={`${style.space}  d-flex align-items-end justify-content-between `}>
                    <h3 className={`${style.stuDataTxet} text-primary`}>Applicant </h3>
                    <button className='btn btn-primary' onClick={()=>{
                        console.log("onclick()")
                        Print()
                         }}>
                        <AiFillPrinter className='mx-1'/>
                        Print
                    </button>
                    {console.log(userData,"userData")}
                </div>
                <div className={`${style.boxContainer} py-5 my-2 bg-white`} id='printablediv'>
                    <div className={`${style.detailBox}`}>
                        <h4 className={`${style.applicantText} pb-3 `}>Applicant (student)</h4>
                        <div className='row  p-0 pt-4 m-0'>
                            {/*------------------------------- national iD -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national iD
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.iqama_id} disabled/>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------  application date -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>application date
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.created_at} disabled/>
                                    </div>
                                </div>
                            </div>

                            {/*------------------------------- application Number -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>application Number
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.applicant_no} disabled/>
                                    </div>
                                </div>
                            </div>


                            {/*------------------------------- Gender -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>Gender
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`} value={userData.gender}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*------------------------------- nationality -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>nationality
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.nationality}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------Data Of Birth -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>Data Of Birth
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.date_of_birth}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------programme_name -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>Programme Name
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.programme_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------grade_name -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>the grade that you
                                            want to join
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.grade_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>


                            {/*-------------------------------academic year -------------------------------*/}
                            {/*<div className='col-md-6 my-2'>*/}
                            {/*    <div className='row'>*/}
                            {/*        <div className='col-md-5 m-0 d-flex align-items-center'>*/}
                            {/*            <label className={`text-capitalize ${style.studentData}`}>academic year*/}
                            {/*                <span className={`${style.span_style} px-0 mx-1`}>*</span></label>*/}

                            {/*        </div>*/}
                            {/*        <div className='col-md-7 m-0'>*/}
                            {/*            <select className={`form-control ${style.inputTxt} py-1`}*/}
                            {/*                    value={academic_year} disabled>*/}
                            {/*                {academic_years.map((value, index) => {*/}
                            {/*                    return (<option key={index}*/}
                            {/*                                    value={value.identifier}>{value.title_en}</option>)*/}
                            {/*                })}*/}

                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            {/*<div className='col-md-6 my-2'>*/}
                            {/*    <div className='row'>*/}
                            {/*        <div className='col-md-5 m-0 d-flex align-items-center'>*/}
                            {/*            <label className={`text-capitalize ${style.studentData}`}>the grade that you*/}
                            {/*                want to join*/}
                            {/*                <span className={`${style.span_style} px-0 mx-1`}>*</span>*/}
                            {/*            </label>*/}

                            {/*        </div>*/}
                            {/*        <div className='col-md-7 m-0'>*/}
                            {/*            <select className={`form-control ${style.inputTxt} py-1`}*/}
                            {/*                    value={grade} disabled>*/}
                            {/*                {grades.map((value, index) => {*/}
                            {/*                    return (<option key={index}*/}
                            {/*                                    value={value.id}>{value.grd_name_en}</option>)*/}
                            {/*                })}*/}
                            {/*            </select>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>

                        {/*--------------------------------- Personal Details (Student) ----------------------------------------*/}

                        <h4 className={`${style.applicantText} my-5 pb-3 `}>Personal Details (Student)</h4>
                        <div className='row  p-0 pt-2 m-0'>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} `}>mobile 1
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`} disabled
                                               value={userData.phone1}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} `}>mobile 2
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`} disabled
                                               value={userData.phone2}/>
                                    </div>
                                </div>
                            </div>


                            {/*--------------------------------- first name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.first_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- second name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.second_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- third name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.third_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- last name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={userData.last_name}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- first name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.first_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- second name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.second_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- third name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.third_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- last name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.last_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/*--------------------------------- religions ----------------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label
                                            className={`text-capitalize ${style.studentData} px-0 mx-0`}>Religion</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className='form-select  '
                                                value={userData.religion}
                                                name="religion">
                                            <option value={0} selected disabled>Select religion</option>

                                            {religions.map((reli) => {
                                                return (<option
                                                    key={reli.religion_id}
                                                    value={reli.religion_id}
                                                >
                                                    {reli.name}
                                                </option>)

                                            })}


                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------Birth country-------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label
                                            className={`text-capitalize ${style.studentData} px-0 mx-0`}>Birth
                                            Country</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className='form-select  '
                                                value={userData.birth_country_name}
                                                name="religion">
                                            <option value={0} selected disabled>Select religion</option>

                                            {countries.map((reli) => {
                                                return (<option
                                                    key={reli.country_id}
                                                    value={reli.country_id}
                                                >
                                                    {reli.name}
                                                </option>)

                                            })}


                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------Data Of Birth -------------------------------*/}

                            {/*------------------------------- nationality -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>nationality
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.nationality} disabled/>
                                    </div>

                                </div>
                            </div>


                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national id
                                            source</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_national_id_source}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national id
                                            expiry</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_national_id_expiry}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>Passport
                                            ID</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_passport_id}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>passport
                                            country</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={s_passport_country_id} disabled
                                        >
                                            {Coptions.map((input, index) => {
                                                return (<option key={index} value={input.value}>{input.label}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>Passport
                                            expiry</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_passport_expiry}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>native
                                            language</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={native_language}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>student
                                            religion</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={religion} disabled/>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/*--------------------------------- Parent or Guardian Details ----------------------------------------*/}
                        <h4 className={`${style.applicantText} pb-3  mt-5`}>Parent or Guardian Details</h4>


                        <div className='row  p-0 pt-2 m-0'>



                            {/*--------------------------------- first name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_first_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- second name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_second_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- third name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_third_name}/>
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- last name (En) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={userData.guardian_last_name}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- first name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_first_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- second name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_second_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- third name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_third_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>
                            {/*--------------------------------- last name (Ar) ----------------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (Ar)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`}
                                               value={userData.guardian_last_name_ar}
                                        />
                                    </div>
                                </div>
                            </div>


                            {/*--------------------------------- religions ----------------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label
                                            className={`text-capitalize ${style.studentData} px-0 mx-0`}>Religion</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className='form-select  '
                                                value={userData.religion}
                                                name="religion">
                                            <option value={0} selected disabled>Select religion</option>

                                            {religions.map((reli) => {
                                                return (<option
                                                    key={reli.religion_id}
                                                    value={reli.religion_id}
                                                >
                                                    {reli.name}
                                                </option>)

                                            })}


                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------Birth country-------------------------------*/}
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label
                                            className={`text-capitalize ${style.studentData} px-0 mx-0`}>Birth
                                            Country</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className='form-select  '
                                                value={userData.birth_country_name}
                                                name="religion">
                                            <option value={0} selected disabled>Select religion</option>

                                            {countries.map((reli) => {
                                                return (<option
                                                    key={reli.country_id}
                                                    value={reli.country_id}
                                                >
                                                    {reli.name}
                                                </option>)

                                            })}


                                        </select>
                                    </div>
                                </div>
                            </div>

                            {/*-------------------------------Data Of Birth -------------------------------*/}

                            {/*------------------------------- nationality -------------------------------*/}
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>nationality
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={userData.nationality} disabled/>
                                    </div>

                                </div>
                            </div>


                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national id
                                            source</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_national_id_source}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national id
                                            expiry</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_national_id_expiry}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>Passport
                                            ID</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_passport_id}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>passport
                                            country</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={s_passport_country_id} disabled
                                        >
                                            {Coptions.map((input, index) => {
                                                return (<option key={index} value={input.value}>{input.label}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>Passport
                                            expiry</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={s_passport_expiry}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>native
                                            language</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={native_language}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>student
                                            religion</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={religion} disabled/>
                                    </div>
                                </div>
                            </div>

                        </div>



                    </div>

                </div>

            </section>
        </>)
}


export default ShowStuData;