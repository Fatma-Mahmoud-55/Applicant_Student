import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import axiosInstance from '../../../axiosConfig/instanse';
import {useDispatch, useSelector} from "react-redux";
import {
    setP_national_id_source,
    setParent_exp_nat_id,
    setParent_nat_id,
    setStArFirstName,
    setStArLastName,
    setStArSecondName,
    setStArThirdName,
    setStBirthCountryId,
    setStEnFirstName,
    setStEnLastName,
    setStEnSecondName,
    setStEnThirdName,
    setStNationalIdExpiryDate,
    setStNationalIdSource, setStPassportId, setStPassportIdExpiryDate, setLanguage, setStPassportCountry,
    setStReligion
} from '../../../store/reducer/studentSlice';
import {
    setBirth_countryF,
    setFirst_name_arF,
    setFirst_name_enF,
    setLast_name_arF,
    setLast_name_enF,
    setNat_expireF,
    setNat_id_srcF,
    setParent_nat_expireF,
    setParent_nat_id_srcF,
    setParent_nat_idF, setPassport_id_F,setPassport_expireF,setLanguage_F, setPassportCountry_F,
    setReligionF,
    setReligionList,
    setLanguageList,
    setSecond_name_arF,
    setSecond_name_enF,
    setThird_name_arF,
    setThird_name_enF
} from "../../../store/reducer/Validations/frm4Slice.js";
import {setNatidF} from "../../../store/reducer/Validations/frm1Slice.js";

function StudentForm4() {
    const [coptions, setCoptions] = useState([]);

    // const [nationality, setNationality] = useState([]);
    const [Countries, setCountries] = useState([]);
    const [countryVal, setCountryVal] = useState('');
    const [enFirstNameValidation, setEnFirstNameValidation] = useState('');
    const [enSecondNameValidation, setEnSecondNameValidation] = useState('');
    const [enThirdNameValidation, setEnThirdNameValidation] = useState('');
    const [enLastNameValidation, setEnLastNameValidation] = useState('');

    const [lcFirstNameValidation, setLcFirstNameValidation] = useState('');
    const [lcSecondNameValidation, setLcSecondNameValidation] = useState('');
    const [lcThirdNameValidation, setLcThirdNameValidation] = useState('');
    const [lcLastNameValidation, setLcLastNameValidation] = useState('');
    // const [NationalIdValidation, setNationalIdValidation] = useState('');
    const [NationalIdSourceValidation, setNationalIdSourceValidation] = useState('');
    const [nameArabicError, setNameArabicError] = useState('');
    const [nameError, setNameError] = useState('');
    const [identityError, setIdentityError] = useState('');
    const [identitySourceError, setIdentitySourceError] = useState('');
    const [passportIdError, setPassportIdError] = useState('');
    const [identityExpireDateValidation, setIdentityExpireDateValidation] = useState(true);
    const [endDateError, setEndDateError] = useState('');
    const [religionError, setReligionError] = useState('');
    const [birthCountryError, setBirthCountryError] = useState('');
    const [nationalIdExpireDateError, setNationalIdExpireDateError] = useState('');
    const [passportExpireDateError, setPassportExpireDateError] = useState('');
    const [parentNationalIdExpireDateError, setParentIdExpireDateError] = useState('');
    const [languageError, setLanguageError] = useState('');
    const [passportCountryError, setPassportCountryError] = useState('');
    // const [religionError, setReligionError] = useState('');
    // const [passportNoValidation, setPassportNoValidation] = useState(true);
    // const [passportError, setPassportError] = useState('');
    // const [relState,SetrelState] = useState([])
      const [expireDateError,setExpireDateError]=useState('');
    const dispatch = useDispatch();
    const Religions = useSelector((state)=>state.frm4.religionlist)

    const first_name = useSelector((state) => state.student.first_name);
    const second_name = useSelector((state) => state.student.second_name);
    const third_name = useSelector((state) => state.student.third_name);
    const last_name = useSelector((state) => state.student.last_name);
    const first_name_ar = useSelector((state) => state.student.first_name_ar);
    const second_name_ar = useSelector((state) => state.student.second_name_ar);
    const third_name_ar = useSelector((state) => state.student.third_name_ar);
    const languageList = useSelector((state)=>state.frm4.languagelist)
    const last_name_ar = useSelector((state) => state.student.last_name_ar);
    const religion_id = useSelector((state) => state.student.religion_id);
    const birth_country = useSelector((state) => state.student.birth_country);
    const language_id = useSelector((state) => state.student.language_id);
    const passport_country = useSelector((state) => state.student.passport_country);

    const iqama_source_date = useSelector((state) => state.student.iqama_source_date);
    const passport_expiry_date = useSelector((state) => state.student.passport_expiry_date);
    const iqama_source = useSelector((state) => state.student.iqama_source);
    const s_passport_id_ = useSelector((state) => state.student.passport_id);
    const date_of_birth = useSelector((state) => state.student.date_of_birth)
    const parent_iqama_id = useSelector((state)=>state.student.parent_iqama_id)
    const parent_iqama_source_date = useSelector((state)=>state.student.parent_iqama_source_date)
    const parent_iqama_source = useSelector((state)=>state.student.parent_iqama_source)
    const handleStEnFirstNameChange = (e) => {
        dispatch(setStEnFirstName(e.target.value))
    };
    const handleStEnSecondNameChange = (e) => {
        dispatch(setStEnSecondName(e.target.value))
    };
    const handleStEnThirdNameChange = (e) => {
        dispatch(setStEnThirdName(e.target.value))
    };
    const handleStEnLastNameChange = (e) => {
        dispatch(setStEnLastName(e.target.value))
    };
    const handleStArFirstNameChange = (e) => {
        dispatch(setStArFirstName(e.target.value))
    };
    const handleStArSecondNameChange = (e) => {
        dispatch(setStArSecondName(e.target.value))
    };
    const handleStArThirdNameChange = (e) => {
        dispatch(setStArThirdName(e.target.value))
    };
    const handleStArLastNameChange = (e) => {
        dispatch(setStArLastName(e.target.value))
    };
    const handleStReligionChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setStReligion(valueAsNumber))
    };
    const validateReligion =(e)=>{
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value ==='0'){
            dispatch(setReligionF(false))
            eleErr.classList.remove('d-none');
            setReligionError('This Field is required')

        }else{
            dispatch(setReligionF(true))
            eleErr.classList.add('d-none');

        }
    }

    const handleStBirthCountryIdChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setStBirthCountryId(valueAsNumber))

    };
    const validateBirthCountry=(e)=>{
        let eleErr = document.getElementById(e.target.name);

        if(e.target.value==='0'){
            dispatch(setBirth_countryF(false))
            setBirthCountryError('This Field is required')
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setBirth_countryF(true))
            eleErr.classList.add('d-none');
        }
    }
    console.log(religion_id,"reeeeeeeee")
    const validatePassportCountry=(e)=>{
        let eleErr = document.getElementById(e.target.name);

        if( e.target.value==='0' || e.target.value===""){
            dispatch(setPassportCountry_F(false))
            setPassportCountryError('This Field is required')
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setPassportCountry_F(true))
            eleErr.classList.add('d-none');
        }
    }
    const handleStNationalIdExpiryDateChange = (e) => {
        dispatch(setStNationalIdExpiryDate(e.target.value))
    };
    const handlePaNationalIdExpiryDateChange = (e) => {
        dispatch(setParent_exp_nat_id(e.target.value))
    };

    ////////////////////////////////////////////////////////
    const handleStPassportIdExpiryDateChange = (e) => {
        dispatch(setStPassportIdExpiryDate(e.target.value))
    };
    const handleStPassportIdChange = (e) => {
        dispatch(setStPassportId(e.target.value))
    };
    const handleStLanguageChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setLanguage(valueAsNumber))
    };
    const handleStPassportCountryChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setStPassportCountry(valueAsNumber))
        console.log(e.target.value,"DSDSSDS")
    };
    ////////////////////////////////////////////////////////////////




    const handlePaNationalIdsource = (e) => {
        dispatch(setP_national_id_source(e.target.value))
    };
    const handlePaNationalIdChange = (e) => {
        dispatch(setParent_nat_id(e.target.value))
    };
    const handleStNationalIdSourceChange = (e) => {
        dispatch(setStNationalIdSource(e.target.value))
    };
    const [natidType,setnatidType] = useState({})

    /////////////////////// validation  //////////////////////////////




    function validateNationalPatentId(value, name) {
        const is_numeric = natidType.is_numeric;
        const lengtho = natidType.national_length;
        console.log(is_numeric, "EEEEEEEeTERTG", lengtho);

        let pattern;
        if (is_numeric === 0) {
            pattern = new RegExp(`^[a-zA-Z0-9]{${lengtho}}$`);
        } else if (is_numeric === 1) {
            pattern = new RegExp(`^\\d{${lengtho}}$`);
        }

        let ele = document.getElementById(name);
        if (value === '0' || value === "" || !value) {
            ele.classList.remove('d-none');
            dispatch(setParent_nat_idF(false));
            setParentIdExpireDateError("This Field is required");
        } else {
            if (!pattern.test(value)) {
                // dispatch(setParent_nat_idF(false));
                if (is_numeric === 1) {
                    setIdentityError(`Identity must be only numbers with length ${lengtho}`);
                } else  if (is_numeric === 0) {
                    setIdentityError(`Identity length must be ${lengtho}`);
                }
                dispatch(setParent_nat_idF(false));
                ele.classList.remove('d-none');
                return false;
            } else {
                ele.classList.add('d-none');
                dispatch(setParent_nat_idF(true));
                return true;
            }
        }
    }















    // validate Arabic name
    function arabicValidate(value, name) {
        const eleErr = document.getElementById(name);
        let pattern = new RegExp(/[\u0600-\u06FF\u0750-\u077F]/);
        if (!pattern.test(value)) {
            if(name==='first_name_ar'){dispatch(setFirst_name_arF(false))}
            if(name==='second_name_ar'){dispatch(setSecond_name_arF(false))}
            if(name==='third_name_ar'){dispatch(setThird_name_arF(false))}
            if(name==='last_name_ar'){dispatch(setLast_name_arF(false))}
            setNameArabicError(`name must be in arabic characters and > 2 `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            if(name==='first_name_ar'){dispatch(setFirst_name_arF(true))}
            if(name==='second_name_ar'){dispatch(setSecond_name_arF(true))}
            if(name==='third_name_ar'){dispatch(setThird_name_arF(true))}
            if(name==='last_name_ar'){dispatch(setLast_name_arF(true))}
            eleErr.classList.add('d-none');
            return true;
        }
    }


    // validate Required English Name 
    function validateRequired(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z]{3,}$/);
        if (!pattern.test(value)) {
            if(name==='first_name'){dispatch(setFirst_name_enF(false))}
            if(name==='second_name'){dispatch(setSecond_name_enF(false))}
            if(name==='third_name'){dispatch(setThird_name_enF(false))}
            if(name==='last_name'){dispatch(setLast_name_enF(false))}
            setNameError(`name must be > 2 characters ,not have any speacial characters`);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            if(name==='first_name'){dispatch(setFirst_name_enF(true))}
            if(name==='second_name'){dispatch(setSecond_name_enF(true))}
            if(name==='third_name'){dispatch(setThird_name_enF(true))}
            if(name==='last_name'){dispatch(setLast_name_enF(true))}
            eleErr.classList.add('d-none');
            return true;
        }
    }

    // validate national id source
    function validateNationalIdSource(value, name) {
        let ele = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/);
        console.log('3rd')
                    console.log('dddddd4sssrf',value.length)

        if(value===""){
            dispatch(setNat_id_srcF(false))
            setIdentitySourceError(`This Field is required`);
            ele.classList.remove('d-none');

        }else {
            if (!pattern.test(value)) {
                console.log('1st')
                dispatch(setNat_id_srcF(false))
                setIdentitySourceError(`national id source must be only letters `);
                ele.classList.remove('d-none');

            }else {
                if(value.length<3){
                    dispatch(setNat_id_srcF(false))
                    setIdentitySourceError(`national id source must be >= 3 letters `);
                    ele.classList.remove('d-none');
                } else {
                    console.log('2nd')

                    dispatch(setNat_id_srcF(true))
                    ele.classList.add('d-none');

                }


            }

        }
    }

    // validate passport id source
    function validatePassportId(value, name) {

        const is_numeric = natidType.is_numeric;
        const lengtho = natidType.national_length;
        console.log('lentgh pass',is_numeric,lengtho);
        let pattern = "" ;
        if (is_numeric===0){

            pattern = new RegExp(`^[A-Za-z0-9]{14}$`);
        }
        if(is_numeric===1){
            pattern = new RegExp(`^\\d{14}$`);
        }

        let ele = document.getElementById(name);

        if (pattern.test(value)) {
            // console.log('pass',false)
            dispatch(setPassport_id_F(true))
            ele.classList.add('d-none');
            return true;

        } else {
            console.log('pass',true)
            dispatch(setPassport_id_F(false))
            setPassportIdError(`passport id must be = 14 character `);
            ele.classList.remove('d-none');
            return false;
        }
    }

    //   validate language

    const validateLanguage=(e)=>{
        let eleErr = document.getElementById(e.target.name);


        if(e.target.value==="" || e.target.value==='0'){
            dispatch(setLanguage_F(false))
            setLanguageError('This Field is required')
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setLanguage_F(true))
            eleErr.classList.add('d-none');
        }
    }


    function validatePaNationalIdSource(value, name) {
        let ele = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/);
        if(value===""){
            dispatch(setParent_nat_id_srcF(false))
            setIdentitySourceError(`This Field is required`);
            ele.classList.remove('d-none');
        }else{
            if (!pattern.test(value)) {
                dispatch(setParent_nat_id_srcF(false))
                setIdentitySourceError(`national id source must be only letters `);
                ele.classList.remove('d-none');

            } else {
                if(value.length<3){
                    dispatch(setParent_nat_id_srcF(false))
                    setIdentitySourceError(`national id source must be >= 3 letters `);
                    ele.classList.remove('d-none');
                }else{
                ele.classList.add('d-none');
                dispatch(setParent_nat_id_srcF(true))

                }

            }
        }


    }

    // validate end date
    function validateEndDate(value, name) {
        let eleErr = document.getElementById(name);

        if(!value || value==='' || value===0){
            setNationalIdExpireDateError('This Field is required')
            eleErr.classList.remove('d-none');
            dispatch(setNat_expireF(false))
        }else{
            let startingDate = Date.now();
            if ( new Date(startingDate) < new Date(value) && value.toString().length === 10 || value === "") {
                eleErr.classList.add('d-none');
                dispatch(setNat_expireF(true))
                return true;
            } else {
                setNationalIdExpireDateError(`expire date must be > current date`);
                eleErr.classList.remove('d-none');
                dispatch(setNat_expireF(false))
                return false;
            }

        }

    }


    // validate passport end date
    function validatePassportEndDate(value, name) {
        let eleErr = document.getElementById(name);
        if(!value || value==='' || value===0){
            eleErr.classList.remove('d-none');
            dispatch(setPassport_expireF(false))
            setPassportExpireDateError('This Field is required')
        }else {
            let startingDate = Date.now();
            if ( new Date(startingDate) < new Date(value) && value.toString().length === 10 || value === "") {
                eleErr.classList.add('d-none');
                dispatch(setPassport_expireF(true))
                return true;
            } else {
                setPassportExpireDateError(`expire date must be > current date`);
                eleErr.classList.remove('d-none');
                dispatch(setPassport_expireF(false))
                return false;
            }
        }
        }



    function validateParentEndDate(value, name) {

        let eleErr = document.getElementById(name);
        if(value===0 || !value || value===""){
            dispatch(setParent_nat_expireF(false))
            setEndDateError(`This Field is required`);
            eleErr.classList.remove('d-none');
        }else {
        let currentDate =  Date.now();

        if (new Date(currentDate) < new Date(value) && value.toString().length === 10 || value === "") {
            eleErr.classList.add('d-none');
            dispatch(setParent_nat_expireF(true))
            return true;
        } else {
            setEndDateError(`expire date must be > current date`);
            eleErr.classList.remove('d-none');
            dispatch(setParent_nat_expireF(false))
            return false;
        }

        }

    }



    // validate identity number
    // function validateNationalId(value, name) {
    //     let ele = document.getElementById(name);

    //     let pattern = new RegExp(/^[A-Za-z0-9]{14,}$/);

    //     if (!pattern.test(value)) {
    //         setIdentityError(`identity must be >= 14 numbers `);
    //         ele.classList.remove('d-none');
    //         return false;
    //     } else {
    //         ele.classList.add('d-none');
    //         return true;
    //     }
    // }

    // validate passport
    // function validatePassport(value, name) {

    //     let eleErr = document.getElementById(name);

    //     let pattern = new RegExp(/^[A-Z0-9]{8,}$/);
    //     if (pattern.test(value) === true || value === "") {
    //         eleErr.classList.add('d-none');
    //         return true;
    //     } else {
    //         setPassportError(` enter correct passport number `);
    //         eleErr.classList.remove('d-none');
    //         return false;
    //     }
    // }

   const fetchData= async  ()=> {
        await axiosInstance.post('/countries/view-all-countries/')
            .then(response => {
                console.log(response.data.success.countries);
                setCountries(response.data.success.countries);


            })
            .catch(error => {
                console.log(error);
            });
    }
const getReligions = async ()=>{
        await axiosInstance.post('countries/view-all-religions/').then((res)=>{
            if(res.data.success){
                console.log("relig",res.data.success.religions)
                dispatch(setReligionList(res.data.success.religions))

            }
            }
        )
    await axiosInstance.post('general_settings/view-national-setting/').then((res)=>{
        setnatidType(res.data.success)
        console.log("nation",res.data.success)
    })
}

const viewAllLanguages =  async ()=>{
        await axiosInstance.post(`countries/view-all-langs/`).then((res)=>{
            if(res.data.success){
                console.log("lang",res.data.success.languages)
                dispatch(setLanguageList(res.data.success.languages))
            }
        })
}

    useEffect(() => {
        getReligions()
        viewAllLanguages()
        fetchData();
    }, []);
    return (
        <>
            <div className='mt-0 mb-0'>
                <div className='m-auto scrollDiv'>
                    <div className='container bg-white'>
                        <form>
                            <div className='head text-center '>
                                <h2 className='mb-3 text-capitalize'>Personal Details (student)</h2>
                                <p className='mb-3 topTxt'>Please fill this form with the required information</p>
                            </div>

                            <div className='row '>
                                {/*********************************en first name************************* */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'> first name
                                        (En) <span className="d-inline-block text-danger mx-1"> *</span></label>
                                    <input className="form-control" type="text"
                                           value={first_name}
                                           name='first_name'
                                           onChange={handleStEnFirstNameChange}
                                           onBlur={(e) => {
                                               validateRequired(e.target.value, e.target.name)
                                               setEnFirstNameValidation(validateRequired(e.target.value, e.target.name));
                                           }}
                                           placeholder="Enter First name"/>
                                    <p id="first_name"
                                       className='mt-2 d-none text-danger validateError '>{nameError}</p>
                                </div>
                                {/*----------------------------------student second name (En)-------------------------*/}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'> second
                                        name(En)<span className="d-inline-block text-danger mx-1"> *</span>
                                    </label>
                                    <input className="form-control "
                                           name='second_name'
                                           value={second_name}
                                           onChange={handleStEnSecondNameChange}
                                           onBlur={(e) => {
                                               validateRequired(e.target.value, e.target.name)
                                               setEnSecondNameValidation(validateRequired(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Enter Second Name"/>

                                    <p id="second_name"
                                       className='mt-2 d-none text-danger validateError '>{nameError}</p>
                                </div>
                            </div>


                            <div className='row '>
                                {/*----------------------------------student third name (En)----------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'> third
                                        name(En)<span className="d-inline-block text-danger mx-1"> *</span>
                                    </label>
                                    <input className="form-control "
                                           value={third_name}
                                           name='third_name'
                                           onChange={handleStEnThirdNameChange}
                                           onBlur={(e) => {
                                               validateRequired(e.target.value, e.target.name)
                                               setEnThirdNameValidation(validateRequired(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Enter Third Name"/>

                                    <p id="third_name"
                                       className='mt-2 d-none text-danger validateError '>{nameError}</p>
                                </div>
                                {/*----------------------------------student last name (En)----------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>last
                                        name(En)<span className="d-inline-block text-danger mx-1"> *</span>
                                    </label>
                                    <input className="form-control "
                                           value={last_name}
                                           name='last_name'
                                           onChange={handleStEnLastNameChange}
                                           onBlur={(e) => {
                                               validateRequired(e.target.value, e.target.name)
                                               setEnLastNameValidation(validateRequired(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Enter Last Name"/>

                                    <p id="last_name"
                                       className='mt-2 d-none text-danger validateError '>{nameError}</p>
                                </div>
                            </div>


                            <div className='row '>
                                {/***************************************Student first name (Ar)***********************************/}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'> first name
                                        (Ar)<span className="d-inline-block text-danger mx-1"> *</span> </label>
                                    <input className="form-control" type="text" name='first_name_ar'
                                           value={first_name_ar}
                                           onChange={handleStArFirstNameChange}
                                           onBlur={(e) => {
                                               arabicValidate(e.target.value, e.target.name)
                                               setLcFirstNameValidation(arabicValidate(e.target.value, e.target.name));
                                           }}
                                           placeholder="Enter First name"/>
                                    <p id="first_name_ar"
                                       className='mt-2 d-none text-danger validateError '>{nameArabicError}</p>
                                </div>
                                {/*----------------------------------student second name (Ar)-------------------------*/}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>second
                                        name(Ar) <span className="d-inline-block text-danger mx-1"> *</span>
                                    </label>
                                    <input className="form-control "
                                           value={second_name_ar}
                                           name='second_name_ar'
                                           onChange={handleStArSecondNameChange}
                                           onBlur={(e) => {
                                               arabicValidate(e.target.value, e.target.name)
                                               setLcSecondNameValidation(arabicValidate(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Enter Second Name"/>

                                    <p id="second_name_ar"
                                       className='mt-2 d-none text-danger validateError '>{nameArabicError}</p>
                                </div>
                            </div>

                            <div className='row '>
                                {/*----------------------------------student third name (Ar)----------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>third
                                        name(Ar)<span
                                            className="d-inline-block text-danger mx-1"> *</span></label>
                                    <input className="form-control "
                                           value={third_name_ar}
                                           name='third_name_ar'
                                           onChange={handleStArThirdNameChange}
                                           onBlur={(e) => {
                                               arabicValidate(e.target.value, e.target.name)
                                               setLcThirdNameValidation(arabicValidate(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Enter Third Name"/>
                                    <p id="third_name_ar"
                                       className='mt-2 d-none text-danger validateError '>{nameArabicError}</p>
                                </div>
                                {/*----------------------------------student last name (Ar)----------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>last
                                        name(Ar)<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <input className="form-control "
                                           value={last_name_ar}
                                           name='last_name_ar'
                                           onChange={handleStArLastNameChange}
                                           onBlur={(e) => {
                                               arabicValidate(e.target.value, e.target.name)
                                               setLcLastNameValidation(arabicValidate(e.target.value, e.target.name));
                                           }} type="text" placeholder="Enter Last Name"/>

                                    <p id="last_name_ar"
                                       className='mt-2 d-none text-danger validateError '>{nameArabicError}</p>
                                </div>

                            </div>

                            <div className='row '>
                                {/*********************************------------religion-------*************************** */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>Religion<span
                                        className="d-inline-block text-danger mx-1"> *</span></label>

                                    <select className='form-select  '
                                            value={religion_id}
                                            name="religion"

                                            onBlur={(e) => {
                                                validateReligion(e)
                                            }}
                                            onChange={handleStReligionChange}>
                                        <option value={0} selected disabled>Select religion</option>

                                        {Religions.map((reli) => {
                                            return (<option
                                                key={reli.religion_id}
                                                value={reli.religion_id}
                                            >
                                                {reli.name}
                                            </option>)
                                            console.log(Religions,"FERRDFDFG$5ertf")
                                        })}


                                    </select>
                                    <p id="religion" className='mt-2 d-none text-danger validateError'>{religionError}</p>
                                </div>
                                {/*********************************----------birth country-------*************************** */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>Birth
                                        Country<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <select className='form-select'
                                            value={birth_country}
                                            name="birth_country"
                                            onBlur={(e) => {
                                                validateBirthCountry(e)

                                            }}
                                            onChange={handleStBirthCountryIdChange}>
                                        <option value={0}  selected disabled>select country</option>
                                        {Countries.map((country, index) => {
                                            return (<option key={index} value={country.country_id}>{country.name}</option>)
                                        })}

                                    </select>
                                    <p id="birth_country" className='mt-2 d-none text-danger validateError '>{birthCountryError}</p>
                                </div>

                            </div>
                            <div className='row'>
                                {/*----------------------------------National ID Source---------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>National ID source<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <input className="form-control"
                                           value={iqama_source}
                                           onChange={handleStNationalIdSourceChange}
                                           name='iqama_source'
                                           onBlur={(e) => {
                                               validateNationalIdSource(e.target.value, e.target.name)
                                               // setNationalIdSourceValidation(validateNationalIdSource(e.target.value, e.target.name));
                                           }}
                                           type="text" placeholder="Add National Id source"/>

                                    <p id="iqama_source"
                                       className='mt-2 d-none text-danger validateError '>{identitySourceError}</p>
                                </div>
                                {/*----------------------------------nationalIdExpiryDate----------------------------------- */}
                                <div className='col-md-6 col-sm-12 mb-3'>
                                    <label className='text-capitalize d-block'>national ID
                                        expiry date<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <input className="form-control text-muted" type="date"
                                           value={iqama_source_date}
                                           name='iqama_source_date'
                                           onChange={handleStNationalIdExpiryDateChange}
                                           onBlur={(e) => {
                                               validateEndDate(e.target.value, e.target.name)
                                               // if (e.target.value === "") {
                                               //     setIdentityExpireDateValidation(true);
                                               // } else {
                                               //     setIdentityExpireDateValidation(validateEndDate(e.target.value, e.target.name));
                                               // }

                                           }}
                                    />
                                    <p id="iqama_source_date"
                                       className='mt-2 d-none text-danger validateError '>{nationalIdExpireDateError}</p>
                                </div>
                            </div>


                            {/*//////////////////////////////////*/}
                            <div className='row'>
                                {/*---------------------------------- passport_id ---------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>Passport ID <span
                                        className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <input className="form-control"
                                           value={s_passport_id_}
                                           onChange={handleStPassportIdChange}
                                           name='s_passport_id_'
                                           maxLength={14}
                                           onBlur={(e) => {

                                               validatePassportId(e.target.value, e.target.name)

                                           }}
                                           type="text" placeholder="Add Passport Id"/>

                                    <p id="s_passport_id_"
                                       className='mt-2 d-none text-danger validateError '>{passportIdError}</p>
                                </div>
                                {/*----------------------------------passport_expiry_date----------------------------------- */}
                                <div className='col-md-6 col-sm-12 mb-3'>
                                    <label className='text-capitalize d-block'>Passport ID
                                        expiry date<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <input className="form-control text-muted" type="date"
                                           value={passport_expiry_date}
                                           name='passport_expiry_date'
                                           onChange={handleStPassportIdExpiryDateChange}
                                           onBlur={(e) => {
                                               validatePassportEndDate(e.target.value, e.target.name)
                                               // if (e.target.value === "") {
                                               //     setIdentityExpireDateValidation(true);
                                               // } else {
                                               //     setIdentityExpireDateValidation(validateEndDate(e.target.value, e.target.name));
                                               // }

                                           }}
                                    />
                                    <p id="passport_expiry_date"
                                       className='mt-2 d-none text-danger validateError '>{passportExpireDateError}</p>
                                </div>
                            </div>

                            <div className='row'>
                                {/*----------------------------------languageId----------------------------------- */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize '>select the tongue language<span
                                        className="d-inline-block text-danger">*</span></label>
                                    <select
                                        value={language_id}
                                        className='form-select' onChange={handleStLanguageChange}
                                        name='languageId'
                                        onBlur={(e) => {
                                            validateLanguage(e)
                                        }}>
                                        <option value={0} disabled selected>select language</option>
                                        {languageList.map((lang, index) => {
                                            return (<option value={lang.lang_id} key={index}>{lang.lang_name}</option>)
                                        })}
                                    </select>
                                    <p id="languageId" className=' mt-2 d-none text-danger validateError'>{languageError}</p>

                                </div>
                                {/*********************************----------passport country-------*************************** */}
                                <div className='col-md-6 mb-3'>
                                    <label className='text-capitalize d-block'>Passport Country<span className="mx-1 d-inline-block text-danger"> *</span>
                                    </label>
                                    <select
                                        value={passport_country}
                                        className='form-select'
                                        name="passport_country"
                                            onBlur={(e) => {
                                                validatePassportCountry(e)
                                            }}
                                            onChange={handleStPassportCountryChange}>
                                        <option value={0} selected disabled>select country</option>
                                        {Countries.map((country, index) => {
                                            return (<option key={index} value={country.country_id}>{country.name}</option>)
                                        })}

                                    </select>
                                    <p id="passport_country" className='mt-2 d-none text-danger validateError '>{passportCountryError}</p>
                                </div>
                            </div>

                                {/*//////////////////////////////////*/}


                                {/* --------------------- parent ---------------------- */}

                                <div className="col text-center">
                                    <div className="position-relative">
                                        <hr className="my-4"/>
                                        <span className="badge badge-pill badge-light position-absolute"
                                              style={{
                                                  color: 'grey',
                                                  top: '50%',
                                                  left: '50%',
                                                  transform: 'translate(-50%, -50%)',
                                                  zIndex: 2
                                              }}>
                                        Parent Mandatory Info
                                    </span>
                                    </div>
                                </div>


                                <div className='row'>
                                    {/*----------------------------------National ID ---------------------------------- */}
                                    <div className='col-md-6 mb-3'>
                                        <label className='text-capitalize d-block'>National ID
                                            <span className="mx-1 d-inline-block text-danger"> *</span>
                                        </label>
                                        <input className="form-control"
                                               value={parent_iqama_id}
                                               maxLength={natidType.national_length}
                                               onChange={(e)=>{
                                                   handlePaNationalIdChange(e)
                                               }}
                                               name='parent_iqama_id'
                                               onBlur={(e) => {
                                                   validateNationalPatentId(e.target.value, e.target.name)
                                               }}
                                               type="text" placeholder="Add National Id"/>

                                        <p id="parent_iqama_id"
                                           className='mt-2 d-none text-danger validateError '>{parentNationalIdExpireDateError}</p>
                                    </div>
                                    {/*----------------------------------Parent nationalIdExpiryDate----------------------------------- */}
                                    <div className='col-md-6 col-sm-12 mb-3'>
                                        <label className='text-capitalize d-block'>national ID
                                            expiry date<span className="mx-1 d-inline-block text-danger"> *</span>
                                        </label>
                                        <input className="form-control text-muted" type="date"
                                               value={parent_iqama_source_date}
                                               name='P_national_id_expiry'
                                               onChange={handlePaNationalIdExpiryDateChange}
                                               onBlur={(e) => {
                                                   validateParentEndDate(e.target.value, e.target.name)

                                               }}
                                        />
                                        <p id="P_national_id_expiry"
                                           className='mt-2 d-none text-danger validateError '>{endDateError}</p>
                                    </div>
                                </div>


                                <div className='row'>
                                    {/*----------------------------------Parent National ID source---------------------------------- */}
                                    <div className=' mb-3 justify-content-center col-9'>
                                        <label className='text-capitalize d-block'>National ID source<span className="mx-1 d-inline-block text-danger"> *</span>
                                        </label>
                                        <input className="form-control"
                                               value={parent_iqama_source}
                                               onChange={handlePaNationalIdsource}
                                               // maxLength={5}
                                               name='parent_iqama_source'
                                               onBlur={(e) => {
                                                   validatePaNationalIdSource(e.target.value, e.target.name)
                                                   // setNationalIdSourceValidation(validateNationalIdSource(e.target.value, e.target.name));
                                               }}
                                               type="text" placeholder="Add National Id source"/>

                                        <p id="parent_iqama_source"
                                           className='mt-2 d-none text-danger validateError '>{identitySourceError}</p>
                                    </div>


                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StudentForm4;

