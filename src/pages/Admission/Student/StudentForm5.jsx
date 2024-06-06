import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import axiosInstance from "../../../axiosConfig/instanse.js";
import {useDispatch, useSelector} from "react-redux";
import {
    setParentFnameAr,
    setParentFnameEn,
    setParentLnameAr,
    setParentLnameEn,
    setParentNationlaity,
    setParentNationlId,
    setParentNationlIdExpire,
    setParentNationlIdSource,
    setParentSnameAr,
    setParentSnameEn,
    setParentThirdnameAr,
    setParentThirdnameEn
} from '../../../store/reducer/studentSlice.js'
import {
    setFirst_name_argF,
    setFirst_name_engF,
    setGar_nat_id_expr,
    setGar_nat_id_srcF,
    setGar_nat_idF, setGar_nationalityF,
    setLast_name_argF,
    setLast_name_engF,
    setSecond_name_argF,
    setSecond_name_engF,
    setThird_name_argF,
    setThird_name_engF
} from "../../../store/reducer/Validations/frm5Slice.js";
import {setParent_nat_idF} from "../../../store/reducer/Validations/frm4Slice.js";
import {setCityF} from "../../../store/reducer/Validations/frm2Slice.js";

function StudentForm5() {
    const [countries, setCountries] = useState([]);
    const [enP_FirstNameValidation, setP_EnFirstNameValidation] = useState('');
    const [enP_SecondNameValidation, setP_EnSecondNameValidation] = useState('');
    const [enPThirdNameValidation, setP_EnThirdNameValidation] = useState('');
    const [enPLastNameValidation, setP_EnLastNameValidation] = useState('');

    const [lcP_FirstNameValidation, setP_LcFirstNameValidation] = useState('');
    const [lcP_SecondNameValidation, setP_LcSecondNameValidation] = useState('');
    const [lcP_ThirdNameValidation, setP_LcThirdNameValidation] = useState('');
    const [lcP_LastNameValidation, setP_LcLastNameValidation] = useState('');


    const [ParentEmailValidation, setParentEmailValidation] = useState('');
    const [ParentMobileValidation, setParentMobileValidation] = useState('');
    const [motherMobileValidation, setMotherMobileValidation] = useState('');
    const [jobValidation, setJobValidation] = useState('');
    const [nameArabicError, setNameArabicError] = useState('');
    const [officeValidation, setOfficeValidation] = useState('');
    const [studentCityValidation, setCityValidation] = useState('');
    const [districtValidation, setDistrictValidation] = useState('');
    const [officeError, setOfficeError] = useState('');
    const [jobError, setJobError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [cityError, setCityError] = useState('');
    const [districtError, setDistrictError] = useState('');
    const [pMobileError, setPMobileError] = useState('');
    const [NationalIdValidation, setNationalIdValidation] = useState('');
    const [NationalIdSourceValidation, setNationalIdSourceValidation] = useState('');
    const [identityExpireDateValidation, setIdentityExpireDateValidation] = useState(true);
    const [endDateError, setEndDateError] = useState('');
    const dispatch = useDispatch()
    const fNameEn = useSelector((state) => state.student.first_name_gur)
    const SNameEn = useSelector((state) => state.student.second_name_gur)
    const thNameEN = useSelector((state) => state.student.third_name_gur)
    const lNameEN = useSelector((state) => state.student.last_name_gur)
    const fNameAr = useSelector((state) => state.student.first_name_gur_ar)
    const SNameAr = useSelector((state) => state.student.second_name_gur_ar)
    const thNameAr = useSelector((state) => state.student.third_name_gur_ar)
    const lNameAr = useSelector((state) => state.student.last_name_gur_ar)
    const iqama_id_gur = useSelector((state) => state.student.iqama_id_gur)
    const g_nationality_id_source = useSelector((state) => state.student.iqama_source_gur)
    const iqama_source_date_gur = useSelector((state) => state.student.iqama_source_date_gur)
    const nationality_id_gur = useSelector((state) => state.student.nationality_id_gur)
    const [identitySourceError, setIdentitySourceError] = useState('');
    const [identityError, setIdentityError] = useState('');
    const [parentNationalityError, setParentNationalityError] = useState('');
    const [natidType,setnatidType] = useState({})


    //////////////EnglishName for parent//////////////
    const handleParentFnameENCHange = (e) => {
        dispatch(setParentFnameEn(e.target.value));
    }


    console.log(nationality_id_gur,"ssdy654sdf")
    const handleParentSnameENCHange = (e) => {
        dispatch(setParentSnameEn(e.target.value));
    }
    const handleParentThirdnameENCHange = (e) => {
        dispatch(setParentThirdnameEn(e.target.value));
    }
    const handleParentLnameENCHange = (e) => {
        dispatch(setParentLnameEn(e.target.value));
    }
    //////////////Arabic Name for parent//////////////
    const handleParentFnameArCHange = (e) => {
        dispatch(setParentFnameAr(e.target.value));
    }
    const handleParentSnameArCHange = (e) => {
        dispatch(setParentSnameAr(e.target.value));
    }
    const handleParentThirdnameArCHange = (e) => {
        dispatch(setParentThirdnameAr(e.target.value));
    }
    const handleParentLnameArCHange = (e) => {
        dispatch(setParentLnameAr(e.target.value));
    }
    const handleParentNationalIDCHange = (e) => {
        dispatch(setParentNationlId(e.target.value));
    }
    const handleParentNationalIDSourceCHange = (e) => {
        dispatch(setParentNationlIdSource(e.target.value));
    }
    const handleParentNationalIDExpireCHange = (e) => {
        dispatch(setParentNationlIdExpire(e.target.value));
    }
    const handleParentNationaliatyCHange = (e) => {
        let element = countries.find((ele) => {
            return ele[3] == e.target.value;


        });
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setParentNationlaity(valueAsNumber));
        if(e.target.value!==0){
            dispatch(setGar_nationalityF(true))
        }else {
            dispatch(setGar_nationalityF(false))

        }
    }




     // validate Required name in english First Name & Second Name &Third Name & Second Name
     function validateRequired(value, name) {
        let eleErr = document.getElementById(name);
        let pattern = new RegExp(/^[A-Za-z ]{3,}$/);
        if (!pattern.test(value)) {
            if(name==='g_en_first_name'){dispatch(setFirst_name_engF(false))}
            if(name==='g_en_second_name'){dispatch(setSecond_name_engF(false))}
            if(name==='g_en_third_name'){dispatch(setThird_name_engF(false))}
            if(name==='g_en_last_name'){dispatch(setLast_name_engF(false))}
            setNameError(` name must be > 2 characters ,not have any of speacial character`);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            eleErr.classList.add('d-none');
            if(name==='g_en_first_name'){dispatch(setFirst_name_engF(true))}
            if(name==='g_en_second_name'){dispatch(setSecond_name_engF(true))}
            if(name==='g_en_third_name'){dispatch(setThird_name_engF(true))}
            if(name==='g_en_last_name'){dispatch(setLast_name_engF(true))}
            return true;
        }
    }

    // validate Arabic name First Name & Second Name &Third Name & Second Name
    function arabicValidate(value, name) {

        const eleErr = document.getElementById(name);
        let pattern = new RegExp(/^[\u0600-\u06FF\u0750-\u077F]{3,}$/);
        if (!pattern.test(value)) {
            if(name==='g_lc_first_name'){dispatch(setFirst_name_argF(false))}
            if(name==='g_lc_second_name'){dispatch(setSecond_name_argF(false))}
            if(name==='g_lc_third_name'){dispatch(setThird_name_argF(false))}
            if(name==='g_lc_last_name'){dispatch(setLast_name_argF(false))}
            setNameArabicError(` name must be in arabic characters and > 2 `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            if(name==='g_lc_first_name'){dispatch(setFirst_name_argF(true))}
            if(name==='g_lc_second_name'){dispatch(setSecond_name_argF(true))}
            if(name==='g_lc_third_name'){dispatch(setThird_name_argF(true))}
            if(name==='g_lc_last_name'){dispatch(setLast_name_argF(true))}
            eleErr.classList.add('d-none');
            return true;
        }
    }

    
    // validate identity number
    function validateNationalId(value, name) {
        const is_numeric = natidType.is_numeric
        const lengtho = natidType.national_length
        console.log(is_numeric,lengtho)
        let pattern = ""
        if (is_numeric===0){

            pattern = new RegExp(`^[A-Za-z0-9]{${lengtho}}$`);
        }
        if(is_numeric===1){
            pattern = new RegExp(`^\\d{${lengtho}}$`);
        }

        let ele = document.getElementById(name);
        console.log('dispatched natidF',value,name)
        if (!pattern.test(value)) {
            setIdentityError(`identity must be valid numbers `);
            dispatch(setGar_nat_idF( false ));
            ele.classList.remove('d-none');
            return false;
        } else {
            dispatch(setGar_nat_idF( true ));
            ele.classList.add('d-none');
            return true;
        }
    }

    // validate national id source
    function validateNationalIdSource(value, name) {
        let ele = document.getElementById(name);

        let pattern = new RegExp(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/);
        if(value===""){
            dispatch(setGar_nat_id_srcF(false))
            setIdentitySourceError(`This Field is required`);
            ele.classList.remove('d-none');
        }else{
            if (!pattern.test(value)) {
                dispatch(setGar_nat_id_srcF(false))
                setIdentitySourceError(`national id source must be only letters `);
                ele.classList.remove('d-none');

            } else {
                if(value.length<3){
                    dispatch(setGar_nat_id_srcF(false))
                    setIdentitySourceError(`national id source must be >= 3 letters `);
                    ele.classList.remove('d-none');
                }else {
                dispatch(setGar_nat_id_srcF(true))
                ele.classList.add('d-none');

                }

            }
        }


    }


 // validate end date
function validateEndDate(value, name) {

    let eleErr = document.getElementById(name);

    if( value==="" || value==="0"){
        eleErr.classList.remove('d-none');
        setEndDateError('This Field is required')
        dispatch(setGar_nat_id_expr(false));
    }else {
    let startingDate = Date.now();
    if (new Date(startingDate) < new Date(value) && value.toString().length === 10 || value === "") {
        dispatch(setGar_nat_id_expr(true))
        eleErr.classList.add('d-none');
        return true;
    } else {
        dispatch(setGar_nat_id_expr(false))
        setEndDateError(`expire date must be > current date`);
        eleErr.classList.remove('d-none');
        return false;
    }

    }




}

// parent Nationality Validation
    const parentNationalityValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if( e.target.value==="" || e.target.value==="0"){
            eleErr.classList.remove('d-none');
            setParentNationalityError('This Field is required')
            dispatch(setGar_nationalityF(false));
        }else {
            eleErr.classList.add('d-none');
            dispatch(setGar_nationalityF(true));
        }
    }


    async function fetchData() {
        await axiosInstance.post('/countries/view-all-countries/')
            .then(response => {
                console.log(response.data.success.countries);
                setCountries(response.data.success.countries);


            })
            .catch(error => {
                console.log(error);
            });
        await axiosInstance.post('general_settings/view-national-setting/').then((res)=> {
            setnatidType(res.data.success)
            console.log(res.data.success)
        })
    }

    const nextID = () => {

    }
    useEffect(() => {
        fetchData();
    }, []);
    return (<>
        <div className='container pt-4 my-0 '>
            <div className='col-md-12  scrollDiv my-0  m-auto '>
                <div className='container bg-white'>
                    <form>
                        <div className='row '>
                            <div className='head text-center '>
                                <h2 className='mb-2 '>Applicant (Guardian)</h2>
                                <span>Please fill out this form with the required information</span>
                            </div>
                        </div>
                        <div className='row'>
                            {/***********************************parent first name (En)*************************************** */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block '> first name (En)<span
                                    className="d-inline-block text-danger">*</span></label>
                                <input className="form-control" type="text"
                                       value={fNameEn}
                                       onChange={handleParentFnameENCHange}
                                       name='g_en_first_name'
                                       onBlur={(e) => {
                                           validateRequired(e.target.value, e.target.name)
                                           setP_EnFirstNameValidation(validateRequired(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add First name"/>
                                <p id="g_en_first_name"
                                   className=' d-none text-danger validateError mb-0 '>{nameError}</p>
                            </div>
                            {/*----------------------------------parent second name (En)-------------------------*/}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> second name(En)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={SNameEn}
                                       onChange={handleParentSnameENCHange}
                                       name='g_en_second_name'
                                       onBlur={(e) => {
                                           validateRequired(e.target.value, e.target.name)
                                           setP_EnSecondNameValidation(validateRequired(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Second Name"/>
                                <p id="g_en_second_name"
                                   className=' d-none text-danger validateError  mb-0'>{nameError}</p>
                            </div>
                            {/*----------------------------------parent third name (En)----------------------------------- */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> third name(En)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={thNameEN}
                                       onChange={handleParentThirdnameENCHange}
                                       name='g_en_third_name'
                                       onBlur={(e) => {
                                           validateRequired(e.target.value, e.target.name)
                                           setP_EnThirdNameValidation(validateRequired(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Third Name"/>
                                <p id="g_en_third_name"
                                   className=' d-none text-danger validateError '>{nameError}</p>
                            </div>
                            {/*----------------------------------parent last name (En)----------------------------------- */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> last name(En)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={lNameEN}
                                       onChange={handleParentLnameENCHange}
                                       name='g_en_last_name'
                                       onBlur={(e) => {
                                           validateRequired(e.target.value, e.target.name)
                                           setP_EnLastNameValidation(validateRequired(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Last Name"/>
                                <p id="g_en_last_name"
                                   className=' d-none text-danger validateError '>{nameError}</p>
                            </div>
                        </div>
                        <div className='row'>
                            {/*----------------------parent first name (Ar)----------------------------------*/}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> first name (Ar)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control" type="text"
                                       value={fNameAr}
                                       onChange={handleParentFnameArCHange}
                                       name='g_lc_first_name'
                                       onBlur={(e) => {
                                           arabicValidate(e.target.value, e.target.name)
                                           setP_LcFirstNameValidation(arabicValidate(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add First name"/>
                                <p id="g_lc_first_name"
                                   className=' d-none text-danger validateError '>{nameArabicError}</p>
                            </div>
                            {/*----------------------------------parent second name (Ar)-------------------------*/}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> second name(Ar)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={SNameAr}
                                       onChange={handleParentSnameArCHange}
                                       name='g_lc_second_name'
                                       onBlur={(e) => {
                                           arabicValidate(e.target.value, e.target.name)
                                           setP_LcSecondNameValidation(arabicValidate(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Second Name"/>
                                <p id="g_lc_second_name"
                                   className=' d-none text-danger validateError '>{nameArabicError}</p>
                            </div>
                            {/*----------------------------------parent third name (Ar)-------------------------*/}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'>third name(Ar)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={thNameAr}
                                       onChange={handleParentThirdnameArCHange}
                                       name='g_lc_third_name'
                                       onBlur={(e) => {
                                           arabicValidate(e.target.value, e.target.name)
                                           setP_LcThirdNameValidation(arabicValidate(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Third Name"/>
                                <p id="g_lc_third_name"
                                   className=' d-none text-danger validateError '>{nameArabicError}</p>
                            </div>
                            {/*----------------------------------parent last name (Ar)----------------------------------- */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'>last name(Ar)<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted" type="text"
                                       value={lNameAr}
                                       onChange={handleParentLnameArCHange}
                                       name='g_lc_last_name'
                                       onBlur={(e) => {
                                           arabicValidate(e.target.value, e.target.name)
                                           setP_LcLastNameValidation(arabicValidate(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add Last Name"/>
                                <p id="g_lc_last_name"
                                   className=' d-none text-danger validateError '>{nameArabicError}</p>
                            </div>

                            {/*----------------------------------National ID/Iqama ID----------------------------------- */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'>National ID<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control text-muted " type="text"
                                       value={iqama_id_gur}
                                       maxLength={natidType.national_length}
                                       onChange={handleParentNationalIDCHange}
                                       name='iqama_id_gur'
                                       onBlur={(e) => {
                                        validateNationalId(e.target.value, e.target.name)
                                        setNationalIdValidation(validateNationalId(e.target.value, e.target.name));
                                       }}
                                        placeholder="Nationality ID"/>
                                       
                                <p id="iqama_id_gur"
                                   className=' d-none text-danger validateError '>{identityError}</p>
                            </div>
                            {/*----------------------------------National ID source---------------------------------- */}
                            <div className='col-md-6'>
                                <label className='text-capitalize mb-0 d-inline-block'>National ID
                                    source<span
                                        className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control " type="text"
                                name='g_nationality_id_source'
                                       value={g_nationality_id_source}
                                       onChange={handleParentNationalIDSourceCHange}
                                       onBlur={(e) => {
                                        validateNationalIdSource(e.target.value, e.target.name)
                                        setNationalIdSourceValidation(validateNationalIdSource(e.target.value, e.target.name));
                                    }}
                                       placeholder="Add National Id source"/>
                                <p id="g_nationality_id_source"
                                   className=' d-none text-danger validateError '>{identitySourceError}</p>
                            </div>
                            {/*----------------------------------ExpiryDate----------------------------------- */}
                            <div className='col-md-6 mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'> expiry date<span
                                    className="d-inline-block text-danger"> *</span> </label>
                                <input className="form-control "
                                       type="date"
                                       value={iqama_source_date_gur}
                                       name='iqama_source_date_gur'
                                       onChange={handleParentNationalIDExpireCHange}
                                       onBlur={(e) => {
                                        validateEndDate(e.target.value, e.target.name)
                                    }}
                                       placeholder="Expairy date"/>
                                <p id="iqama_source_date_gur"
                                   className=' d-none text-danger validateError '>{endDateError}</p>
                            </div>
                            {/*----------------------------------Parent Nationality----------------------------------- */}
                            <div className='col-md-6  mb-1'>
                                <label className='text-capitalize mb-0 d-inline-block'>Parent
                                    Nationality<span
                                        className="d-inline-block text-danger"> *</span></label>
                                <select className="form-select "
                                        value={nationality_id_gur}
                                        name='nationality_id_gur'
                                        onBlur={(e)=>{
                                            parentNationalityValidation(e)
                                        }}
                                        onChange={handleParentNationaliatyCHange}>
                                    <option value={0} selected disabled>select country</option>
                                    {countries.map((country, index) => {
                                        return (<option key={index} value={country.country_id}>{country.name}</option>)
                                    })}

                                </select>
                                <p id="nationality_id_gur" className=' d-none text-danger validateError '>{parentNationalityError}</p>
                            </div>
                    
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </>);
}

export default StudentForm5;