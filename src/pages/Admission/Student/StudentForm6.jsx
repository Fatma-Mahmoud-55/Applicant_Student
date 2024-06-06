import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import { useDispatch, useSelector } from "react-redux";
import {
    setEmergencyMobile,
    // setEmployeeName,
    setMotherMobile,
    setParentCompany,
    setParentCompanyAddress,
    setParentDateOfBirth,
    setParentEducation,
    setParentJop,
    setParentMobile,
    setParentNationalIdExpiry,
    setParentNativeLanguage,
    setParentPassportId,
    setParentRelation,
    setParentRiligion,
    setEmployeeName_id,
    setParentState,
    setParentEmail,
    setParentCity,
    setParentPassportCountry,
    setParentCountry, setNationlaty, setEmail, setStateId

} from '../../../store/reducer/studentSlice';

import {
    setEmployeeNameF,
    setEmergencyMobileF,
    setParentCompanyF,
    setParentCompanyAddressF,
    setParentDateOfBirthF,
    setParentEducationF,
    setParentJopF,
    setParentMobileF,
    setParentNationalIdExpiryF,
    setParentNativeLanguageF,
    setParentPassportIdF,
    setParentRelationF,
    setParentRiligionF,
    setMotherMobileF,
    setParentPassportCountryF,
    setParentEmailF,
    setParentCountryIdF,
    setParentStateIdF,
    setParentCityIdF,

} from '../../../store/reducer/Validations/frm6Slice.js'


import axiosInstance from "../../../axiosConfig/instanse.js";
import {setCityF, setEmailF, setStateF} from "../../../store/reducer/Validations/frm2Slice.js";




function StudentForm6() {
    const [countries, setCountries] = useState([]);
    const [officeError, setOfficeError] = useState('');
    const [jobError, setJobError] = useState('');
    const [employeeName_idError, setEmployeeName_idError] = useState('');
    const [pMobileError, setPMobileError] = useState('');
    const [endDateError, setEndDateError] = useState('');
    const [passportError, setPassportError] = useState('');
    const [religions,setReligions]=useState([]);
    const [language,setLanguage]=useState([]);
    const [parentBirthDateErr,setParentBirthDateErr]=useState('');
    const [parentEmailError, setParentEmailError] = useState('');
    const [religionError, setReligionError] = useState('');
    const [languageError, setLanguageError] = useState('');
    const [relationError, setRelationError] = useState('');
    const [passportCountryError, setPassportCountryError] = useState('');
    const [displayState,setDisplayState]=useState({display:"none"});
    const [displayCity,setDisplayCity]=useState({display:"none"})
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);





    const dispatch = useDispatch();
    const s_passport_id = useSelector((state) => state.student.s_passport_id);
    const g_birth_date = useSelector((state) => state.student.g_birth_date);
    const g_education = useSelector((state) => state.student.g_education);
    const g_job = useSelector((state) => state.student.g_job);
    const g_company = useSelector((state) => state.student.g_company);
    const g_office_address = useSelector((state) => state.student.g_office_address);
    const g_mobile = useSelector((state) => state.student.g_mobile);
    const mother_mobile = useSelector((state) => state.student.mother_mobile);
    const employee_name = useSelector((state) => state.student.employee_name);



    const passport_id_gur = useSelector((state) => state.student.passport_id_gur)
    const passport_expiry_date_gur = useSelector((state) => state.student.passport_expiry_date_gur);
    const religion_id_gur = useSelector((state) => state.student.religion_id_gur);
    const language_id_gur = useSelector((state) => state.student.language_id_gur);
    const relation_gur = useSelector((state) => state.student.relation_gur);
    const education = useSelector((state) => state.student.education);
    const date_of_birth_gur = useSelector((state) => state.student.date_of_birth_gur);
    const job = useSelector((state) => state.student.job);
    const company = useSelector((state) => state.student.company);
    const address_line_gur = useSelector((state) => state.student.address_line_gur);
    const mobile_phone = useSelector((state) => state.student.mobile_phone);
    const mother_phone = useSelector((state) => state.student.mother_phone);
    const emergency_phone = useSelector((state) => state.student.emergency_phone);
    const passport_country_gur = useSelector((state) => state.student.passport_country_gur);
    const email_gur = useSelector((state) => state.student.email_gur);
    const employee_id_name = useSelector((state) => state.student.employee_id_name);
    const country_id_gur = useSelector((state) => state.student.country_id_gur);
    const state_id_gur = useSelector((state) => state.student.state_id_gur);
    const city_id_gur = useSelector((state) => state.student.city_id_gur);




    // console.log("kk" , s_passport_id , s_religion , s_native_language , g_relation , g_birth_date , g_education , g_job , g_company , g_office_address , g_mobile , mother_mobile , emergency_phone ,employee_name)
    const handleParentIdExpiryChange = (e) => {
        dispatch(setParentNationalIdExpiry(e.target.value))
    };
    const handleParentDateOfBirthChange = (e) => {
        dispatch(setParentDateOfBirth(e.target.value))

    };
    const handleParentPassportIdChange = (e) => {
        dispatch(setParentPassportId(e.target.value))
    };
    const handleParentRiligionChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentRiligion(valueAsNumber))
        return true;
    };
    const handleParentNativeLanguageChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentNativeLanguage(valueAsNumber))
        if(e.target.value){
            dispatch(setParentNativeLanguageF(true));
        }
    };
    const handleParentRelationChange = (e) => {
        dispatch(setParentRelation(e.target.value))
        if(e.target.value){
            dispatch(setParentRelationF(true));
        }
    }
    const handleParentEducationChange = (e) => {
        dispatch(setParentEducation(e.target.value))
        if(e.target.value){
            dispatch(setParentEducationF(true));
        }
    };
    const handleParentJopChange = (e) => {
        dispatch(setParentJop(e.target.value));

    };
    const handleParentCompanyChange = (e) => {
        dispatch(setParentCompany(e.target.value))
    };
    const handleParentCompanyAddressChange = (e) => {
        dispatch(setParentCompanyAddress(e.target.value))
    };
    const handleParentMobileChange = (e) => {
        dispatch(setParentMobile(e.target.value))
    };
    const handleMotherMobileChange = (e) => {
        dispatch(setMotherMobile(e.target.value))
    };
    const handleEmergencyMobileChange = (e) => {
        dispatch(setEmergencyMobile(e.target.value))
    };
    const handleEmployeeNameChange = (e) => {
        dispatch(setEmployeeName_id(e.target.value))
    };
    const hundelPassportCountryChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentPassportCountry(valueAsNumber))


    }
    const hundelCountryIdChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentCountry(valueAsNumber))
        fetchStates(valueAsNumber);

    }
    const hundelStateIdChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentState(valueAsNumber))
        fetchCities(valueAsNumber);
        dispatch(setStateF(true));


    }
        const handleCityChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentCity(valueAsNumber))
        dispatch(setCityF(true));


    }
    const handleParentEmailChange = (e) => {
        dispatch(setParentEmail(e.target.value));
    };

    ////////////////////////////////////////////////////

    // validate passport
    function validatePassport(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[A-Z0-9]{14,}$/);
        if (!pattern.test(value) || value === "") {
            setPassportError(`please enter correct passport number `);
            eleErr.classList.remove('d-none');
            dispatch(setParentPassportIdF(false));
            return false;

        } else {


            eleErr.classList.add('d-none');
            dispatch(setParentPassportIdF(true));
            return true;
        }
    }

    // validate  National Id ExpiryDate
    function validateEndDate(value, name) {
      // debugger;
        let eleErr = document.getElementById(name);

        if( value==="" || value==="0"){
            eleErr.classList.remove('d-none');
            setEndDateError('This Field is required')
            dispatch(setParentNationalIdExpiryF(false));
        }else {
            let startingDate = new Date();
            if (startingDate< new Date(value) && value.toString().length === 10 || value === "") {
                eleErr.classList.add('d-none');
                dispatch(setParentNationalIdExpiryF(true))
                return true;
            } else {
                setEndDateError(`expire date must be > current date`);
                eleErr.classList.remove('d-none');
                return false;
            }
        }


    }


    function validateBirthDate(e) {
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value==="" || e.target.value==="0" ){
            eleErr.classList.remove('d-none');
            setParentBirthDateErr('This Field is required')
            dispatch(setParentDateOfBirthF(false));
        }else{
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const day = String(currentDate.getDate()).padStart(2, '0');
            const today = `${year}-${month}-${day}`;

            if (date_of_birth_gur < today) {
                console.log(date_of_birth_gur, "today",today);
                dispatch(setParentDateOfBirthF( true ));
                setParentBirthDateErr('')
                return true;
            } else {
                console.log(date_of_birth_gur, "todaysss",today);
                dispatch(setParentDateOfBirthF(false))
                setParentBirthDateErr(`Birth date cannot be in the future`);
                return false;
            }

        }


    }


    const validateCounrty = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value==="" || e.target.value==="0" ){
            eleErr.classList.remove('d-none');
            setPassportCountryError('This Field is required')
            dispatch(setParentPassportCountryF(false));
        }else{
            dispatch(setParentPassportCountryF(true));
            eleErr.classList.add('d-none');
        }



    }


   const validateParentCounrty = (value, name)=>{
       let eleErr = document.getElementById(name);

       if(value==="" || value==="0" ){
           dispatch(setParentCountryIdF(false))
           eleErr.classList.remove('d-none');
       }else{
           dispatch(setParentCountryIdF(true))
           eleErr.classList.add('d-none');
       }



   }





    const validateParentState = (e)=>{
        let eleErr = document.getElementById(e.target.name);

        if(e.target.value==="" || e.target.value==="0" ){
            dispatch(setParentStateIdF(false))
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setParentStateIdF(true))
            eleErr.classList.add('d-none');
        }

    }

    const validateParentCity = (e)=>{
        let eleErr = document.getElementById(e.target.name);

        if(e.target.value==="" || e.target.value==="0" ){
            dispatch(setParentCityIdF(false))
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setParentCityIdF(true))
            eleErr.classList.add('d-none');
        }

    }



    // function validateBirthDate(value,name) {
    //     let eleErr = document.getElementById(name);
    //     let currentDate = new Date();
    //     let inputDate = new Date(value);
    //
    //
    //     if (inputDate < currentDate) {
    //         eleErr.classList.add('d-none') ;
    //         dispatch(setParentDateOfBirthF(true))
    //     }
    //     else {
    //         setParentBirthDateErr(`expire date must be > current date`);
    //         eleErr.classList.remove('d-none');
    //     }
    // }


    function fetchReligons() {
        axiosInstance.post('/countries/view-all-religions/')
            .then(res => {
                setReligions(res.data.success.religions);
                console.log("religon",res.data.success.religions );
            })
            .catch(error => {
                console.error(error);
            });
    }

    function fetchLanguage() {
        axiosInstance.post('/countries/view-all-langs/')
            .then(response => {
                setLanguage(response.data.success.languages);
                console.log("Lang",response.data.success.languages);
            })
            .catch(error => {
                console.error(error);
            });
    }

    // validate validateJob
    function validateJob(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z ]{5,}$/);
        if (!pattern.test(value)) {
            setJobError(`name must be > 5 characters ,not have any speacial characters`);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            dispatch(setParentJopF(true))
            return true;
        }
    }
    ///////////////////////////////////////////////
    // validate validateEmploy
    function validateEmploy(value, name) {
        let pattern = new RegExp(/^\b[A-Za-z]{3,}(?:\s[A-Za-z]{3,})*\b$/);


        if(value===""){
            dispatch(setEmployeeNameF(false))
            setEmployeeName_idError(`This Field is required`);
        }else {
            if (!pattern.test(value)){
                dispatch(setEmployeeNameF(false))
                setEmployeeName_idError(`name must be > 5 characters ,not have any speacial characters`);

            } else {
                dispatch(setEmployeeNameF(true))
                setEmployeeName_idError(``);

            }
        }


    }

    //validate office
    function validateOffice(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z ]{10,}$/);
        if (!pattern.test(value)) {
            setOfficeError(`name must be > 10 characters ,not have any speacial characters`);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            return true;
        }
    }



    /********************* validate mobile****************************** */
    function validateRequiredMobile(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[0-9]{10,}$/);
        if (!pattern.test(value)) {
            setPMobileError(`mobile must be > 10 numbers `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            return true;
        }
    }

    // validate Required Email
    function validateRequiredParentEmail(value, name) {


        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[a-zA-Z0-9\.#_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        if (!pattern.test(value)) {
            dispatch(setParentEmailF(false))
            setParentEmailError(` write correct email `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            dispatch(setParentEmailF(true))
            setParentEmailError(``);

            eleErr.classList.add('d-none');
            return true;
        }


    }
// religion validation
   const religionValidation = (e)=>{
       let eleErr = document.getElementById(e.target.name);

       if(e.target.value==="" || e.target.value==="0" ){
           eleErr.classList.remove('d-none');
           setReligionError('This Field is required')
           dispatch(setParentRiligionF(false));
       }else{
           dispatch(setParentRiligionF(true))
           eleErr.classList.add('d-none');
       }

   }
// language validation
    const languageValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value==="" || e.target.value==="0" ){
            eleErr.classList.remove('d-none');
            setLanguageError('This Field is required')
            dispatch(setParentNativeLanguageF(false));
        }else{
            dispatch(setParentNativeLanguageF(true))
            eleErr.classList.add('d-none');
        }
    }

    // relation validation
    const relationValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value==="" || e.target.value==="0" ){
            eleErr.classList.remove('d-none');
            setRelationError('This Field is required')
            dispatch(setParentRelationF(false));
        }else{
            dispatch(setParentRelationF(true))
            eleErr.classList.add('d-none');
        }
    }



    async function fetchData() {
        await axiosInstance.post('/countries/view-all-countries/')
            .then(response => {
                setCountries(response.data.success.countries);
                let countriesOptions = [];
                for (var i = 0; i < (response.data.drop).length; i++) {
                    countriesOptions.push({
                        value: response.data.drop[i][0],
                        label: response.data.drop[i][3]
                    })
                }

                console.log("country",countriesOptions);
                setCOptions(countriesOptions);

            })
            .catch(error => {
                console.log(error);
            });
    }


    async function fetchStates(countryId) {

        axiosInstance.post('/countries/view-all-states',{'country_id':countryId})
            .then(response => {
                const state=response.data.success.states;
                console.log(state[0],"Stateeeee323eettsreeeeState");
                if(state.length===0){
                    setDisplayState({display: "none"})
                    setDisplayCity({display: "none"})
                    dispatch(setStateF(true));
                    dispatch(setCityF(true));

                } else{
                    setDisplayState({display:"block"})
                    setStates(state);
                    // dispatch(setStateF(false));
                    dispatch(setCityF(false));

                }

                // console.log("states",response.data.success.states);
            })
            .catch(error => {
                console.error(error);
            });
    }

    async function fetchCities(StateId) {

        axiosInstance.post('/countries/view-all-cities',{'state_id':StateId})
            .then(response => {
                const city=response.data.success.countries
                console.log(response.data.success.countries.length,"StateeeeeeeeeeeCity");
                console.log(city[0],"RRRRRRRRR")
                if (city.length===0) {
                    setDisplayCity({ display: "none" });
                    dispatch(setCityF(true));

                } else {
                    setCities(city);
                    setDisplayCity({ display: "block" });
                }
                // console.log("cities",response.data.success.countries);
            })
            .catch(error => {
                console.error(error);
            });
    }

    const nextID = () => {

    }
    useEffect(() => {
        fetchData();
        fetchReligons();
        fetchLanguage()

    }, []);
    return (<>

        <div className='container my-0 '>
            <div className='col-md-12  scrollDiv my-0  m-auto '>
                <div className='container bg-white'>
                    <form>
                        <div id='step1'>
                            <div className='row py-3'>
                                <div className='head text-center  '>
                                    <h2 className='mb-2 '>Follow - Applicant (Parent)</h2>
                                    <span>Please follow fill out parent data</span>
                                </div>
                            </div>
                            <div className='row'>
                                {/*/!***********************************parent passport-id*************************************** *!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>passport ID<span
                                        className="d-inline-block text-danger"> *</span> </label>
                                    <input className="form-control "
                                           value={passport_id_gur}
                                           onChange={handleParentPassportIdChange}
                                           name='s_passport_id'
                                           maxLength={14}
                                           onBlur={(e) => {
                                               validatePassport(e.target.value, e.target.name)


                                           }}
                                           type="text" placeholder="passport ID"/>
                                    <p id="s_passport_id"
                                       className=' d-none text-danger validateError '>{passportError}</p>
                                </div>
                                {/*/!*----------------------------------passportIdExpiryDate----------------------------------- *!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>passport ID expiry date<span className="d-inline-block text-danger">*</span>
                                    </label>
                                    <input className="form-control "
                                           onChange={handleParentIdExpiryChange}
                                           value={passport_expiry_date_gur}
                                           name='passport_expiry_date_gur'
                                           onBlur={(e) => {
                                               validateEndDate(e.target.value, e.target.name)
                                           }}
                                           type="date" placeholder="Add National Id source"/>
                                    <p id="passport_expiry_date_gur"
                                       className='mx-1 d-none text-danger validateError '>{endDateError}</p>
                                </div>
                                {/*/!*----------------------------------religion-------------------------*!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>religion<span
                                        className="d-inline-block text-danger">*</span></label>
                                    <select className='form-select  '
                                            value={religion_id_gur}
                                            name="religion"
                                            onBlur={(e)=>{
                                                religionValidation(e)
                                            }}
                                            onChange={(e) => {
                                                dispatch(setParentRiligionF(handleParentRiligionChange(e)))
                                            }}>
                                        <option value={0} selected disabled>Select religion</option>
                                        {religions.map((religion, index) => (
                                            <option key={index} value={religion.religion_id}>
                                                {religion.name}
                                            </option>
                                        ))}

                                    </select>
                                    <p id="religion" className=' d-none text-danger validateError mt-2'>{religionError}</p>
                                </div>
                                {/*/!*----------------------------------native-language----------------------------------- *!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>native language<span
                                            className="d-inline-block text-danger">*</span></label>
                                    <select value={language_id_gur}
                                            className='form-select'
                                            name="language_id_gur"
                                            onBlur={(e)=>{
                                                languageValidation(e)
                                            }}
                                            onChange={handleParentNativeLanguageChange}>
                                        <option value={0} selected disabled>Select Language</option>
                                        {language.map((value, index) => (
                                            <option key={index} value={value.lang_id}>
                                                {value.lang_name}
                                            </option>
                                        ))}
                                    </select>
                                    <p id="language_id_gur" className='d-none text-danger validateError mt-2'>{languageError}</p>
                                </div>
                                {/*{/------------------------------------Relation-------------------------------*!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>Relation<span
                                        className="d-inline-block text-danger">*</span></label>
                                    <select value={relation_gur} name="relation" className='form-select text-muted '
                                            onBlur={(e)=>{
                                                relationValidation(e)
                                            }}
                                            onChange={handleParentRelationChange}>
                                        <option value={""} selected disabled>Select Relation</option>
                                        <option value='father'>Father</option>
                                        <option value='mother'>Mother</option>
                                        <option value='grandfather'>Grandfather</option>
                                        <option value='uncle'>Uncle</option>
                                    </select>
                                    <p id="relation" className='d-none text-danger validateError  mt-2'>{relationError}</p>
                                </div>
                                {/*/!*----------------------------------date of birth-------------------------*!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>Date of birth<span
                                        className="d-inline-block text-danger">*</span></label>
                                    <input className="form-control text-muted" type="date"
                                           value={date_of_birth_gur}

                                           name="parentBirthDate"
                                           onBlur={(e) => {

                                               validateBirthDate(e)
                                           }}
                                           onChange={handleParentDateOfBirthChange}
                                           placeholder="Birth date"/>
                                    <p id="parentBirthDate"
                                       className=' text-danger validateError mt-2'>{parentBirthDateErr}</p>
                                </div>
                                {/*/!*----------------------------------education------------------------*!/*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>education<span
                                        className="d-inline-block text-danger"> *</span></label>
                                    <select value={education}
                                            className='form-control text-muted '
                                            name="education"
                                            onBlur={(e)=>{
                                                let eleErr = document.getElementById(e.target.name);
                                                if(e.target.value==="" || e.target.value==="0" ){
                                                    eleErr.classList.remove('d-none');
                                                    dispatch(setParentEducationF(false));
                                                }else{
                                                    dispatch(setParentEducationF(true))
                                                    eleErr.classList.add('d-none');
                                                }
                                            }}
                                            onChange={handleParentEducationChange}>
                                        <option value={""} selected disabled>Select Education</option>
                                        <option value='High School'>High School</option>
                                        <option value='Bachelor'>Bachelor</option>
                                        <option value='Master'>Master</option>
                                        <option value='PhD'>PhD</option>
                                        <option value='None'>None</option>
                                    </select>
                                    <p id="education" className=' d-none text-danger validateError mt-2'>This Field is required</p>
                                </div>
                                {/*----------------------------------job----------------------------------- */}
                                <div className='col-md-6 col-md'>
                                    <label className='text-capitalize mb-0 d-inline-block'> job<span
                                        className="d-inline-block text-danger">*</span> </label>
                                    <input className="form-control text-muted" type="text"
                                           value={job}
                                           onChange={handleParentJopChange}
                                           name='job'
                                           onBlur={(e) => {
                                               dispatch(setParentJopF(validateJob(e.target.value, e.target.name)))
                                           }}
                                           placeholder="enter your job"/>
                                    <p id="job"
                                       className=' d-none text-danger validateError mt-2'>{jobError}</p>
                                </div>
                                {/*----------------------------------company----------------------------------- */}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'> company<span
                                        className="d-inline-block text-danger"> *</span> </label>
                                    <input className="form-control text-muted" type="text"
                                           value={company}
                                           onChange={handleParentCompanyChange}
                                           name='company'
                                           onBlur={(e) => {
                                               dispatch(setParentCompanyF(validateJob(e.target.value, e.target.name)))
                                           }}
                                           placeholder="enter the company name"/>
                                    <p id="company"
                                       className=' d-none text-danger validateError mt-2'>{jobError}</p>
                                </div>
                                {/*----------------------------------company address----------------------------------- */}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'> company address<span
                                        className="d-inline-block text-danger"> *</span> </label>
                                    <input className="form-control text-muted" type="text"
                                           value={address_line_gur}
                                           onChange={handleParentCompanyAddressChange}
                                           name='address_line_gur'
                                           onBlur={(e) => {
                                               dispatch(setParentCompanyAddressF(validateOffice(e.target.value, e.target.name)))
                                           }}
                                           placeholder="enter the company address"/>
                                    <p id="address_line_gur"
                                       className=' d-none text-danger validateError  mt-2'>{officeError}</p>
                                </div>
                                {/*---------------------------------- passport_country_gur ----------------------------------- */}
                                <div className='col-md-6 mb-3  '>
                                    <label className='text-capitalize mb-0 d-inline-block'>
                                        Passport Country<span
                                        className="d-inline-block text-danger"> *</span></label>
                                    <select className="form-select "
                                            value={passport_country_gur}
                                            name="passport_country_gur"
                                            onBlur={(e)=>{
                                                validateCounrty(e)
                                            }}
                                            onChange={(e) => {
                                                hundelPassportCountryChange(e)
                                            }}>
                                        <option value={0} disabled selected>select passport country</option>
                                        {countries.map((country, index) => {
                                            return (
                                                <option key={index} value={country.country_id}>{country.name}</option>)
                                        })}
                                    </select>
                                    <p id="passport_country_gur" className=' d-none text-danger validateError '>{passportCountryError}</p>
                                </div>



                                {/*************************************Email*******************************************/}
                                <div className='col-md-6 mb-4'>

                                    <label className='text-capitalize d-block'> Parent Email
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>
                                    <input className="form-control text-muted" type="email"
                                           value={email_gur}
                                           onChange={handleParentEmailChange}
                                           name='email'
                                           onBlur={(e) => {
                                               validateRequiredParentEmail(e.target.value, e.target.name);

                                           }}
                                           placeholder="email@gmail.com"/>

                                    <p id="email_gur" className='  text-danger validateError  mt-2'>{parentEmailError}</p>
                                </div>


                                {/*----------------------------------Mobile------------------------------------*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'> Mobile <span
                                        className="d-inline-block text-danger"> *</span></label>
                                    <input className="form-control" type="text"
                                           value={mobile_phone}
                                           onChange={handleParentMobileChange}
                                           name='mobile_phone'
                                           onBlur={(e) => {
                                               dispatch(setParentMobileF(validateRequiredMobile(e.target.value, e.target.name)));
                                           }}
                                           placeholder="Add Mobile Number"
                                    />
                                    <p id="mobile_phone"
                                       className=' d-none text-danger validateError  mt-2'>{pMobileError}</p>
                                </div>
                                {/*----------------------------------mother Mobile------------------------------------*/}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>mother Mobile <span
                                        className="d-inline-block text-danger"> *</span></label>
                                    <input className="form-control" type="text"
                                           value={mother_phone}
                                           onChange={handleMotherMobileChange}
                                           name='mother_phone'
                                           onBlur={(e) => {
                                               dispatch(setMotherMobileF(validateRequiredMobile(e.target.value, e.target.name)));
                                           }}
                                           placeholder="Add Mobile Mother Number"
                                    />
                                    <p id="mother_phone"
                                       className=' d-none text-danger validateError mt-2'>{pMobileError}</p>
                                </div>
                                {/****************************************emergency mobile******************************************** */}
                                <div className='col-md-6'>
                                    <label className='text-capitalize mb-0 d-inline-block'>emergency
                                        Mobile <span
                                            className="d-inline-block text-danger"> *</span></label>
                                    <input className="form-control" type="text"
                                           value={emergency_phone}
                                           onChange={handleEmergencyMobileChange} name="emergency_phone"
                                           placeholder="Add Mobile Emergency Number"
                                           onBlur={(e) => {
                                               dispatch(setEmergencyMobileF(validateRequiredMobile(e.target.value, e.target.name)))
                                           }}
                                    />
                                    <p id="emergency_phone"
                                       className=' d-none text-danger validateError mt-2'>{pMobileError}</p>
                                </div>
                                {/**********************************************employee name/id(if your parent is working in school)********************************** */}
                                <div className='col-md-6'>
                                    <label className='text-capitalize d-inline-block t-small'>employee name/id <small></small><small><small>(if
                                            parent is working in school)</small></small></label>
                                    <input className="form-control" type="text"
                                           value={employee_id_name}

                                           onChange={handleEmployeeNameChange}
                                           onBlur={(e) => {
                                               console.log(e.target.value, "FFffffff")
                                               validateEmploy(e.target.value, e.target.name)
                                               dispatch(setEmployeeNameF(validateEmploy(e.target.value, e.target.name)))
                                           }}
                                    />
                                    <p id="EmployeeName"
                                       className=' text-danger validateError mt-2'>{employeeName_idError}</p>
                                </div>






                                {/*----------------------------------countries----------------------------------- */}
                                <div className='row mb-3'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>Country
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select
                                            value={country_id_gur}
                                            name="country_id"
                                            className="form-select"
                                            onBlur={(e)=>{
                                                validateParentCounrty(e.target.value , e.target.name)
                                            }}
                                            onChange={hundelCountryIdChange}>
                                            <option value={0} selected disabled>select country</option>
                                            {countries.map((country, index) => {
                                                return (
                                                    <option key={index} value={country.country_id}
                                                            label={country.name}>{country.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="country_id" className='mt-2 d-none text-danger validateError '>This Field is required</p>
                                    </div>
                                </div>
                                {/*----------------------------------State----------------------------------- */}
                                <div className='row mb-3' style={displayState}>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>State
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select
                                            onBlur={(e)=>{
                                                validateParentState(e)
                                            }}
                                            value={state_id_gur}
                                            name="parentState"
                                            className="form-select"
                                                onChange={hundelStateIdChange}
                                        >
                                            <option value={0} selected disabled>select State</option>
                                            {states.map((state, index) => {
                                                return (
                                                    <option key={index} value={state.id}
                                                            label={state.name}>{state.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="parentState" className='mt-2 d-none text-danger validateError '>This Field is required</p>
                                    </div>
                                </div>

                                {/*----------------------------------City-----------------------------------*/}
                                <div className='row mb-3' style={displayCity}>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>City
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select className="form-select"
                                                onChange={handleCityChange}
                                                value={city_id_gur}
                                                name="parentCity"
                                                onBlur={(e)=>{
                                                    validateParentCity(e)
                                                }}
                                        >
                                            <option value={0} selected disabled>select City</option>
                                            {cities.map((city, index) => {
                                                return (
                                                    <option key={index} value={city.id}
                                                            label={city.name}>{city.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="parentCity" className='mt-2 d-none text-danger validateError '>This Field is required</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>);
}

export default StudentForm6;