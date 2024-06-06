import React, {useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import {useDispatch, useSelector} from "react-redux";
import {
    setAddress,
    setEmail,
    setPhone1,
    setPhone2,
    setSchoolCountry,
    setCountryId,
    setStateId,
    setCityId,
} from '../../../store/reducer/studentSlice.js'
import {
    setAddressF,
    setCountryF,
    setStateF,
    setCityF,
    setEmailF,
    setPone1_F,
    setPhone2_F
} from "../../../store/reducer/Validations/frm2Slice.js";
import axiosInstance from "../../../axiosConfig/instanse.js";
import {setSchoolCountryF} from "../../../store/reducer/Validations/frm3Slice.js";

function StudentForm2() {


    const [studentAddressValidation, setStudentAddressValidation] = useState('');
    const [PhoneNoValidation, setPhoneNoValidation] = useState('');
    const [mobileNoValidation, setmobileNoValidation] = useState('');
    const [studentEmailValidation, setStudentEmailValidation] = useState(true);
    const [placeError, setPlaceError] = useState('');
    const [countries,setCountries]=useState([]);
    const [states,setStates]=useState([]);
    const [cities,setCities]=useState([]);
    const [displayState,setDisplayState]=useState({display:"none"});
    const [displayCity,setDisplayCity]=useState({display:"none"})

    const [countryError , setCountryError] = useState('')
    const [stateError , setStateError] = useState('')
    const [cityError , setCityError] = useState('')

    const dispatch = useDispatch();

    const email = useSelector((state) => state.student.email);
    const phone2 = useSelector((state) => state.student.phone2);
    const phone1 = useSelector((state) => state.student.phone1);
    const s_address = useSelector((state) => state.student.address_line);
    const country_id = useSelector((state) => state.student.country_id);
    const state_id = useSelector((state) => state.student.state_id);
    const city_id = useSelector((state) => state.student.city_id);


    const handleEmailChange = (e) => {
        dispatch(setEmail(e.target.value));
    };


    const handlePhone2Change = (e) => {
        dispatch(setPhone2(e.target.value));
    };

    const handlePhone1Change = (e) => {
        dispatch(setPhone1(e.target.value));
    };

    const handleAddressChange = (e) => {
        dispatch(setAddress(e.target.value));
    };

    const handleCountryChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setCountryId(valueAsNumber))
        dispatch(setCountryF(true));
        fetchStates(valueAsNumber);
    };

    const handleStateChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setStateId(valueAsNumber));
        dispatch(setStateF(true));
        fetchCities(valueAsNumber);
    };

    const handleCityChange=(e)=>{
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setCityId(valueAsNumber))
        dispatch(setCityF(true));
    }





    // validate name required of places
    function validateRequiredAddress(value, name) {
        let eleErr = document.getElementById(name);

        // Pattern to match addresses with at least 10 characters, including special characters
        let pattern = /^[A-Za-z0-9\s!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]{10,}$/;

        if (!pattern.test(value)) {
            dispatch(setAddressF(false));
            setPlaceError("Address must be at least 10 characters long and can include letters, numbers, spaces, and special characters.");
            eleErr.classList.remove('d-none');
            return false;
        } else {
            dispatch(setAddressF(true));
            eleErr.classList.add('d-none');
            return true;
        }
    }



    const [emailError, setEmailError] = useState('');


    // validate Required Email
    function validateRequiredEmail(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[a-zA-Z0-9\.#_]+@[a-zA-Z0-9]+\.[A-Za-z]+$/);
        if (!pattern.test(value)) {
            dispatch(setEmailF(false))
            setEmailError(` write correct email `);
            eleErr.classList.remove('d-none');
            return false;
        } else {
            dispatch(setEmailF(true))

            eleErr.classList.add('d-none');
            return true;
        }
    }


    const [phoneError, setPhoneError] = useState('');

    // validate required phone
    function validateRequiredPhone2(value, name) {

        let eleErr = document.getElementById(name);

        let pattern = new RegExp(/^[0-9]{7,}$/);
        if (!pattern.test(value)) {
            dispatch(setPhone2_F(false))
            setPhoneError(`phone must be > 7 numbers `);

            eleErr.classList.remove('d-none');
            return false;
        } else {
            dispatch(setPhone2_F(true))

            eleErr.classList.add('d-none');
            return true;
        }
    }

    // country validation
    const countryValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if( e.target.value==="" || e.target.value==="0"){
            eleErr.classList.remove('d-none');
            setCountryError('This Field is required')
            dispatch(setCountryF(false));
        }else {
            eleErr.classList.add('d-none');
            dispatch(setCountryF(true));
        }
    }

    // state validation
    const stateValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if( e.target.value==="" || e.target.value==="0"){
            eleErr.classList.remove('d-none');
            setStateError('This Field is required')
            dispatch(setStateF(false));
        }else {
            eleErr.classList.add('d-none');
            dispatch(setStateF(true));
        }

    }
    // city validation
    const cityValidation = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if( e.target.value==="" || e.target.value==="0"){
            eleErr.classList.remove('d-none');
            setCityError('This Field is required')
            dispatch(setCityF(false));
        }else {
            eleErr.classList.add('d-none');
            dispatch(setCityF(true));
        }

    }
        /********************* validate mobile****************************** */
        const [mobileError, setMobileError] = useState('');

        function validateRequiredPhone1(value, name) {
        
            let eleErr = document.getElementById(name);
            let pattern = new RegExp(/^[0-9]{10,}$/);
            if (!pattern.test(value)) {
                dispatch(setPone1_F(false))

                setMobileError(`mobile must be > 10 numbers `);
                console.log("Mobile Errrrrrrrrrrrrrr" , mobileError)
                eleErr.classList.remove('d-none');
                return false;
            } else {
                dispatch(setPone1_F(true))

                eleErr.classList.add('d-none');
                return true;
            }
        }

    async function fetchCountries() {
        axiosInstance.post('/countries/view-all-countries/')
            .then(response => {
                setCountries(response.data.success.countries);
                console.log("country3",response.data.success.countries);
            })
            .catch(error => {
                console.error(error);
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


    useEffect(() => {
        fetchCountries();
    }, []);
    return (
        <>

            <div className=' '>
                <div className='scrollDiv  m-auto  '>
                    <div className='container bg-white '>
                        <form>
                            <div className='row '>

                                {/************************************ Title******************************************* */}
                                <div className='head text-center mb-4'>
                                    <h2 className='mb-2 '>contact details (Student)</h2>
                                    <span>Please fill out this form with the required information</span>

                                </div>
                            </div>





                            <div className='row py-2 mb-4 '>
                                {/*************************************Email*******************************************/}
                                <div className='col-md-6 mb-4 '>

                                    <label className='text-capitalize d-block'> Email
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>
                                    <input className="form-control text-muted" type="email"
                                           value={email}
                                           onChange={handleEmailChange}
                                           name='email'
                                           onBlur={(e) => {
                                               validateRequiredEmail(e.target.value, e.target.name);
                                               setStudentEmailValidation(validateRequiredEmail(e.target.value, e.target.name));
                                           }}
                                           placeholder="email@gmail.com"/>

                                    <p id="email" className=' d-none text-danger validateError  mt-2'>{emailError}</p>
                                </div>

                                {/*----------------------------------Phone 1------------------------------------*/}


                                <div className='col-md-6 mb-4'>
                                    <label>Phone 1
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>
                                    <input className="form-control " type="text"
                                           value={phone1}
                                           name="phone1"
                                           onChange={handlePhone1Change}
                                           onBlur={(e) => {
                                               validateRequiredPhone1(e.target.value, e.target.name);
                                           }}
                                           placeholder="Phone 1"
                                    />

                                    <p id="phone1" className="d-none text-danger validateError  mt-2">
                                        {mobileError}
                                    </p>

                                </div>

                                {/*---------------------------------- Phone 2 ----------------------------------- */}
                                <div className='col-md-6 mb-4'>


                                    <label className='text-capitalize d-inline-block'> Phone 2
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>
                                    <input className="form-control text-muted" type="text"
                                           value={phone2}

                                           onChange={handlePhone2Change}
                                           name="phone2"
                                           onBlur={(e) => {
                                               validateRequiredPhone2(e.target.value, e.target.name);
                                           }}
                                           placeholder="Phone 2"/>


                                    <p id="phone2"
                                       className='  d-none text-danger validateError  mt-2'>{phoneError}</p>
                                </div>


                                {/************************************ Address **************************/}

                                <div className='col-md-6 mb-4 '>


                                    <label className='text-capitalize  d-block'>Address
                                        <span className="d-inline-block text-danger mx-1">*</span> </label>

                                    <input className="form-control" type="text"
                                           value={s_address}
                                           name='s_address'
                                           onChange={(e)=>{
                                               handleAddressChange(e)
                                           }}
                                           onBlur={(e) => {
                                               validateRequiredAddress(e.target.value, e.target.name)
                                               // setStudentAddressValidation(validateRequiredAddress(e.target.value, e.target.name))
                                           }}

                                           placeholder="Add Address"/>


                                    <p id="s_address"
                                       className='d-none text-danger validateError  mt-2'>{placeError}</p>

                                </div>

                                {/*----------------------------------countries----------------------------------- */}
                                <div className='row mb-3'>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>Country
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select
                                            value={country_id}
                                            className="form-select"
                                            name="country_id"
                                            onBlur={(e)=>{
                                                countryValidation(e)
                                            }}
                                                onChange={handleCountryChange}>
                                            <option value={0} selected disabled>select country</option>
                                            {countries.map((country, index) => {
                                                return (
                                                    <option key={index} value={country.country_id}
                                                            label={country.name}>{country.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="country_id" className='mt-2 d-none text-danger validateError '>{countryError}</p>
                                    </div>
                                </div>
                                {/*----------------------------------State----------------------------------- */}
                                <div className='row mb-3' style={displayState}>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>State
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select className="form-select"
                                                value={state_id}
                                                name="state_id"
                                                onBlur={(e)=>{
                                                    stateValidation(e)
                                                }}
                                                onChange={handleStateChange}
                                            >
                                            <option value={0} selected disabled>select State</option>
                                            {states.map((state, index) => {
                                                return (
                                                    <option key={index} value={state.id}
                                                            label={state.name}>{state.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="state_id" className='mt-2 d-none text-danger validateError '>{stateError}</p>
                                    </div>
                                </div>

                                {/*----------------------------------City----------------------------------- */}
                                <div className='row mb-3' style={displayCity}>
                                    <div className='col-md-12 col-sm-12'>
                                        <label className='text-capitalize d-block'>City
                                            <span className="d-inline-block text-danger mx-1">*</span></label>
                                        <select className="form-select"
                                                value={city_id}
                                                name="city_id"
                                                onBlur={(e)=>{
                                                    cityValidation(e)
                                                }}
                                                onChange={handleCityChange}
                                        >
                                            <option value={0} selected disabled>select City</option>
                                            {cities.map((city, index) => {
                                                return (
                                                    <option key={index} value={city.id}
                                                            label={city.name}>{city.name}</option>

                                                )
                                            })}
                                        </select>
                                        <p id="city_id" className='mt-2 d-none text-danger validateError '>{cityError}</p>
                                    </div>
                                </div>


                            </div>


                        </form>


                    </div>
                </div>
            </div>


        </>
    );
}

export default StudentForm2;