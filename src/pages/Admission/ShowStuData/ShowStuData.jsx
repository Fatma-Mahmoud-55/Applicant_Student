import * as React from 'react';
import {useEffect, useState} from 'react';
import axiosInstance from '../../../axiosConfig/instanse.js';
import style from './ShowStuData.module.css';
import {AiFillPrinter} from 'react-icons/ai';


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

    //to get student country name
    const [countries, setCountries] = useState([]);
    const [Coptions, setCOptions] = useState([]);
    //to get academic year Name 
    const [academic_years, setAcademic_years] = useState([]);
    //to get grade name 
    const [grades, setGrades] = useState([]);

    // print button
    const Print = () =>{
        let printContents = document.getElementById('printablediv').innerHTML;
        let originalContents = document.body.innerHTML;
        document.body.innerHTML = printContents;
        window.print();
        window.location.href = 'http://localhost:5173/showStudentData';
    }


    //fetch Data
    async function fetchData() {


        //api to get country
        await axiosInstance.get('emp/drop')
            .then(response => {
                // console.log(response.data.drop);
                setCountries(response.data.drop.ahrm_countries);
                // console.log(response.data.drop.ahrm_countries.length);
                let countriesOptions = [];
                for (var i = 0; i < (response.data.drop.ahrm_countries).length; i++) {
                    countriesOptions.push({
                        value: response.data.drop.ahrm_countries[i][0], label: response.data.drop.ahrm_countries[i][3]
                    })
                }
                console.log('...');
                console.log(countriesOptions);
                setCOptions(countriesOptions);
                console.log('hhh');
                console.log(Coptions);
            })
            .catch(error => {
                console.log(error);
            })

        //academic year
        await axiosInstance.post('gnl_settings/gnl_academic_year_view')
            .then(response => {
                console.log('academic year ................ ', response);
                setAcademic_years(response.data.aca_year_arr);
            })
            .catch(error => {
                console.log(error);
            })

        //grade Name
        await axiosInstance.post('gnl_settings/grades_view')
            .then(response => {
                console.log('garde ... ', response);
                setGrades(response.data.gnl_grades_arr);
            })
            .catch(error => {
                console.log(error);
            })


        //studentData

        await axiosInstance.post('stu/student_applicant_view_one', {
            // token: "",
            // student_id: "A_001",
            identifier: "1"
        }).then(response => {
            console.log('res', response);
            if (response.data) {
                setStudent_national_id(response.data.student[0].s_national_id);
                setApplication_birth_date(response.data.student[0].application_birth_date);
                setS_gender(response.data.student[0].s_gender);
                setMobile(response.data.student[0].s_mobile);
                setEn_first_name(response.data.student[0].s_en_first_name);
                setEn_last_name(response.data.student[0].s_en_last_name);
                setEn_second_name(response.data.student[0].s_en_second_name);
                setEn_third_name(response.data.student[0].s_en_third_name);
                setLc_first_name(response.data.student[0].s_lc_first_name);
                setLc_last_name(response.data.student[0].s_lc_last_name);
                setLc_second_name(response.data.student[0].s_lc_second_name);
                setLc_third_name(response.data.student[0].s_lc_third_name);
                setBirth_date(response.data.student[0].s_birth_date);
                setS_nationality_id(response.data.student[0].s_nationality_id);
                setBirth_country_id(response.data.student[0].s_birth_country_id);
                setNational_id_source(response.data.student[0].s_national_id_source);
                setNational_id_expiry(response.data.student[0].s_national_id_expiry);
                setS_passport_id(response.data.student[0].s_passport_id);
                setS_passport_country_id(response.data.student[0].s_passport_country_id);
                setS_Passport_expiry(response.data.student[0].s_passport_expiry);
                setReligion(response.data.student[0].s_religion);
                setNative_language(response.data.student[0].s_native_language);

            }
        });
    };


    useEffect(() => {
        fetchData();

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

                </div>
                <div className={`${style.boxContainer} py-5 my-2 bg-white`} id='printablediv'>
                    <div className={`${style.detailBox}`}>
                        <h4 className={`${style.applicantText} pb-3 `}>Applicant</h4>
                        <div className='row  p-0 pt-4 m-0'>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>national iD
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={student_national_id} disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>application date
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`}
                                               value={application_birth_date} disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>Gender
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`} value={s_gender}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} `}>mobile
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`${style.inputTxt} form-control py-1`} disabled
                                               value={mobile}/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>nationality
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        {/* <input className={`${style.inputTxt} form-control py-1`} value={s_nationality_id} disabled/> */}
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={s_nationality_id}
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
                                        <label className={`text-capitalize ${style.studentData}`}>academic year
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={academic_year} disabled>
                                            {academic_years.map((value, index) => {
                                                return (<option key={index}
                                                                value={value.identifier}>{value.title_en}</option>)
                                            })}

                                        </select>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData}`}>the grade that you
                                            want to join
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={grade} disabled>
                                            {grades.map((value, index) => {
                                                return (<option key={index}
                                                                value={value.id}>{value.grd_name_en}</option>)
                                            })}
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h4 className={`${style.applicantText} my-5 pb-3 `}>personal details </h4>
                        <div className='row  p-0 pt-2 m-0'>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                        </label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} disabled
                                               value={en_first_name}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} disabled
                                               value={en_second_name}/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} disabled
                                               value={en_third_name}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (En)
                                            <span className={`${style.span_style} px-0 mx-1`}>*</span></label>

                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={en_last_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>first name
                                            (lc)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={lc_first_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>second name
                                            (lc)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={lc_second_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>

                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>third name
                                            (lc)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={lc_third_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2 '>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>last name
                                            (lc)</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={lc_last_name}
                                               disabled/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>date of
                                            birth </label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} disabled
                                               value={birth_date}/>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6 my-2'>
                                <div className='row'>
                                    <div className='col-md-5 m-0 d-flex align-items-center'>
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>birth
                                            country</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={birth_country_id} disabled
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
                                        <label
                                            className={`text-capitalize ${style.studentData} px-0 mx-0`}>nationality</label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <select className={`form-control ${style.inputTxt} py-1`}
                                                value={s_nationality_id} disabled
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
                                        <label className={`text-capitalize ${style.studentData} px-0 mx-0`}>nationality
                                            ID/iqma ID</                                            label>
                                        <span className={`${style.span_style} px-0 mx-1`}>*</span>
                                    </div>
                                    <div className='col-md-7 m-0'>
                                        <input className={`form-control ${style.inputTxt}`} value={student_national_id}
                                               disabled/>
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