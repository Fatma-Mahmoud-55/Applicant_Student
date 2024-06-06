import React, {useEffect, useState, useRef, useLayoutEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import { useDispatch, useSelector } from "react-redux";
import {
    setGradeEvaluation,
    setGradeScore,
    setGradeYear,
    setLastGrade,
    setSchoolCountry,
    setSchoolNameAr,
    setSchoolNameEn,
    setGrades,
} from '../../../store/reducer/studentSlice';

import {
    setGradeEvaluationF,
    setGradeScoreF,
    setGradeYearF,
    setLastGradeF,
    setSchoolCountryF,
    setSchoolNameArF,
    setSchoolNameEnF,
    setIsChecked
} from '../../../store/reducer/Validations/frm3Slice.js'
import axiosInstance from '../../../axiosConfig/instanse';
import {setParentCityIdF} from "../../../store/reducer/Validations/frm6Slice.js";

function StudentForm3() {


    const [abled,setAbled]=useState(true)
    const [countries, setCountries] = useState([]);
    const [lastGradesList, setLastGradesList] = useState([]);
    const [enSchoolNameValidation, setEnSchoolNameValidation] = useState('');

    const [years,setYears]=useState([]);
    const dispatch = useDispatch();
    const school_name_en = useSelector((state) => state.student.last_attended_school);
    const school_name_lc = useSelector((state) => state.student.last_attended_school_ar);
    const school_country = useSelector((state) => state.student.last_country_id);
    const last_grade = useSelector((state) => state.student.last_grade_id);
    const grade_year = useSelector((state) => state.student.last_year_id);
    const evaluvation = useSelector((state) => state.student.evaluvation);
    const grade_score = useSelector((state) => state.student.last_score);
    const currentGradeId =useSelector((state)=>state.student.grade_id);

    const checkedd = useSelector((state)=>state.frm3.isCheckedd)







    const handleDisabledChange = (e) => {
           if(e.target.checked){
              setAbled(false)
               dispatch(setIsChecked(true))
               dispatch(setGradeYearF(false))
               dispatch(setGradeEvaluationF(false))
               dispatch(setGradeScoreF(false))
               dispatch(setLastGradeF(false))
               dispatch(setSchoolCountryF(false))
               dispatch(setSchoolNameEnF(false))
               dispatch(setSchoolNameArF(false))
           }else{

               setAbled(true);
               dispatch(setGradeYearF(true))
               dispatch(setIsChecked(false))
               dispatch(setGradeEvaluationF(true))
               dispatch(setGradeScoreF(true))
               dispatch(setLastGradeF(true))
               dispatch(setSchoolCountryF(true))
               dispatch(setSchoolNameEnF(true))
               dispatch(setSchoolNameArF(true))
           }
    };

    useEffect(() => {
        if(checkedd){
            setAbled(false);
        }
    }, []);
    const handleShoolNameEnChange = (e) => {
        dispatch(setSchoolNameEn(e.target.value));
        dispatch(setSchoolNameEnF(true));
    };
    const handleShoolNameArChange = (e) => {
        dispatch(setSchoolNameAr(e.target.value));
        dispatch(setSchoolNameArF(true));
    };
    const handleShoolCountryChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setSchoolCountry(valueAsNumber));
        dispatch(setSchoolCountryF(true));
       console.log(countries,"countries")
    };
    const handleLastGradeChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setLastGrade(valueAsNumber));
        dispatch(setLastGradeF(true))
    };
    const handleGradeYearChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setGradeYear(valueAsNumber))
        dispatch(setGradeYearF(true));
    };
    const handleGradeScoreChange = (e) => {
        const  score = e.target.value
        if (score !== "") {
            dispatch(setGradeScore(score ));
            dispatch(setGradeScoreF(true));
        } else {
            console.log("Invalid score entered");
            dispatch(setGradeScoreF(false));
        }
    };

    const handleGradeEvaluationChange = (e) => {
        dispatch(setGradeEvaluation(e.target.value));
        dispatch(setGradeEvaluationF(true));
    };



    const [nameArabicError, setNameArabicError] = useState('');

    // validate Arabic name 
    function arabicValidate(value, name) {
        const eleErr = document.getElementById(name);
        let pattern = new RegExp(/[\u0600-\u06FF\u0750-\u077F]/);
        if (!pattern.test(value)) {
            setNameArabicError(`School name must be in arabic characters and > 2 `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            return true;
        }
    }





    const [nameError, setNameError] = useState('');

    // validate Required EN School name 
    function validateRequired(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z\s]{3,}$/);
        if (!pattern.test(value)) {
            setNameError(`School name must be > 2 characters ,not have any speacial characters`);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            return true;
        }
    }

    function validateScoreRequired(value, name) {
        let eleErr = document.getElementById(name);
        if (!value) {

            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            return true;
        }
    }

    function lastGradeValidation(value, name) {
        let eleErr = document.getElementById(name);
        if(value==="" || value==="0" ){
            dispatch(setLastGradeF(false))
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setLastGradeF(true))
            eleErr.classList.add('d-none');
        }
    }


const schoolCountryValidation = (e)=>{
    let eleErr = document.getElementById(e.target.name);

    if(e.target.value==="" || e.target.value==="0" ){
        dispatch(setSchoolCountryF(false))
        eleErr.classList.remove('d-none');
    }else{
        dispatch(setSchoolCountryF(true))
        eleErr.classList.add('d-none');
    }
}


const yearValidation = (e)=>{
    let eleErr = document.getElementById(e.target.name);
    console.log(e.target.value,"DDDDDDDDDDDDDDdWER")

    if(e.target.value==="" || e.target.value==="0" ){
        dispatch(setGradeYearF(false))
        eleErr.classList.remove('d-none');
    }else{
        dispatch(setGradeYearF(true))
        eleErr.classList.add('d-none');
    }
}





    async function fetchCountries() {
        axiosInstance.post('/countries/view-all-countries/')
            .then(response => {
                setCountries(response.data.success.countries)
                console.log("country",response.data.success.countries);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function fetchLastGrade() {
        axiosInstance.post('/general_settings/view-last-grades/',{
            current_grade_id:currentGradeId
        })
            .then((response) => {
                console.log("last",response.data.success);
                setLastGradesList(response.data.success)
            })
            .catch((error) => {
                console.error(error);
            });
    }





    async function fetchAcademicYears() {
        axiosInstance.post('academic/view-all-years/')
            .then(response => {
                setYears(response.data.success);
                console.log("years",response.data.success);
            })
            .catch(error => {
                console.error(error);
            });
    }


    useEffect(() => {
        fetchCountries();
        fetchLastGrade()
        // console.log(teest.current.checked,"teest.current.checked")
// teest.current.checked=checkedd
        // console.log(teest.current.checked,"teest.current.checked")
        fetchAcademicYears()

        // if(checked){
        //     setAbled(false)
        // }else {
        //     setAbled(true)
        // }

    }, []);

    return (
        <>

            {/* <Navbar/> */}
            <div className='mt-3'>
                <div className=' scrollDiv m-auto '>
                    <div className='container bg-white'>

                        <form>
                            <div className='row mb-3'>
                                <div className='head text-center '>
                                    <h2 className='mb-3 text-capitalize'>last attended school details</h2>
                                    <p className='mb-3 topTxt'>Please fill this form with the required information</p>
                                    <label htmlFor="disabledInput">There is previous grade</label>
                                    <input type="checkbox" id="disabledInput"
                                           checked={checkedd}
                                           onChange={handleDisabledChange} />
                                </div>
                                {/*----------------------------------school name (EN)-------------------------*/}
                                <div className='col-md-12 col-sm-12 '>
                                    <label className='text-capitalize text-left d-block'> School Name (EN)
                                        <span className="d-inline-block text-left text-danger mx-1">*</span> </label>
                                    <input className="form-control" type="text"   disabled={abled}
                                        value={school_name_en}
                                        onChange={handleShoolNameEnChange}
                                        name='school_name_en'
                                        onBlur={(e) => {
                                            validateRequired(e.target.value, e.target.name)
                                        }}
                                        placeholder="School Name (EN)"
                                    />
                                    <p id="school_name_en"
                                        className=' mt-2 d-none text-danger validateError '>{nameError}</p>
                                </div>
                            </div>
                            {/*----------------------------------school name (AR)-------------------------*/}
                            <div className='row mb-3'>
                                <div className='col-md-12 col-sm-12'>
                                    <label className='text-capitalize d-block'> School Name(AR)
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>
                                    <input className="form-control" type="text" disabled={abled}
                                        value={school_name_lc}
                                        onChange={handleShoolNameArChange}
                                        name='school_name_lc'
                                        onBlur={(e) => {
                                            arabicValidate(e.target.value, e.target.name)

                                        }}
                                        placeholder="School Name (AR)"
                                    />
                                    <p id="school_name_lc"
                                        className=' d-none text-danger validateError  mt-2'>{nameArabicError}</p>
                                </div>
                            </div>
                            {/*************************************************country*************************** */}
                            <div className='row mb-3'>
                                <div className='col-md-12 col-sm-12'>
                                    <label className='text-capitalize d-block'>School Country
                                        <span className="d-inline-block text-danger mx-1">*</span></label>
                                    <select className="form-select" name="schoolCountry" disabled={abled}
                                            onBlur={(e)=>{
                                                schoolCountryValidation(e)
                                            }}

                                        onChange={handleShoolCountryChange}>
                                        <option value={0} selected disabled>select school country</option>
                                        {countries.map((country, index) => {
                                            return (
                                                <option key={index} value={country.country_id}>{country.name}</option>
                                            )
                                        })}
                                    </select>
                                    <p id="schoolCountry" className='mt-2 d-none text-danger validateError '>This Field is required</p>
                                </div>
                            </div>

                            <div className='row'>
                                {/*************************************************last grade******************************/}
                                <div className='col-md-6  mb-3'>
                                    <label className='text-capitalize d-block'> last grade
                                        <span className="d-inline-block text-danger mx-1"> *</span> </label>

                                    <select className="form-select" disabled={abled}
                                            onChange={handleLastGradeChange}
                                            onBlur={(e)=>{
                                                lastGradeValidation(e.target.value , e.target.name)
                                            }}
                                            name="lastGrade"
                                            >

                                        <option value={0}  selected disabled>select grade</option>
                                        {lastGradesList.map((grade, index) => {
                                            return (
                                                <option key={index} value={grade.last_grade_id}>{grade.grade_name}</option>
                                            )
                                        })}
                                    </select>
                                    <p id="lastGrade" className='mt-2 d-none text-danger validateError '>This Field is required</p>


                                </div>
                                {/**************************************************year**********************************/}
                                <div className='col-md-6  mb-3'>
                                    <label className='text-capitalize d-block'>Year
                                        <span className="d-inline-block text-danger mx-1">*</span></label>
                                    <select className="form-select" disabled={abled}
                                            name="year"
                                            onBlur={(e)=>{
                                                yearValidation(e)
                                            }}
                                            onChange={handleGradeYearChange}
                                    >
                                        <option value={0} selected disabled>select Year</option>
                                        {years.map((country, index) => {
                                            return (
                                                <option key={index} value={country.id}>{country.year}</option>
                                            )
                                        })}
                                    </select>
                                    <p id="year" className='mt-2 d-none text-danger validateError '>This Field is required</p>
                                </div>

                            </div>

                            <div className='row '>
                            {/************************************************* score*********************** */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>Score %
                                        <span className="d-inline-block text-danger mx-1"> *</span> </label>
                                    <input className="form-control" value={grade_score}
                                           onChange={(e)=>{
                                               handleGradeScoreChange(e)
                                           }}
                                           onBlur={(e)=>{
                                               validateScoreRequired(e.target.value, e.target.name)
                                           }}
                                           type="number"
                                           name="score" disabled={abled}
                                           placeholder="Enter Your Score"/>
                                    <p id="score" className='mt-2 d-none text-danger validateError'>This Field is required</p>
                                </div>
                                {/*************************************************** Evaluation*****************************/}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'> Evaluation
                                        <span className="d-inline-block text-danger mx-1"> *</span> </label>
                                    <input className="form-control"
                                           onBlur={(e)=>{
                                               validateRequired(e.target.value, e.target.name)
                                           }}
                                           disabled={abled}
                                        value={evaluvation}
                                           name="evaluation"

                                        onChange={handleGradeEvaluationChange} type="text"
                                        placeholder="Enter Your evaluation" />
                                    <p id="evaluation" className='mt-2 d-none text-danger validateError'>This Field is required</p>
                                </div>

                            </div>


                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default StudentForm3;