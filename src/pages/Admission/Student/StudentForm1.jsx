import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './StudentForm.css';
import axiosInstance from '../../../axiosConfig/instanse';
import {useDispatch, useSelector} from "react-redux";
import {
    setBirthDate,
    setGender,
    setNationlaty,
    SetSacademicYear,
    setStudentNational,
    setGrades,setGradeId,
    setProgram, setValidate_form, setNext_form, setValidate_frm1
} from '../../../store/reducer/studentSlice.js'

import {
    setBirthdateF,
    setGenderF, setGradeF, setGradesList,
    setNatidF,
    setNationaltyF, setProgramF, setProgramsList,
    setYearF, setYearList
} from "../../../store/reducer/Validations/frm1Slice.js";
import {setParentCountryIdF, setParentDateOfBirthF} from "../../../store/reducer/Validations/frm6Slice.js";
import {setParent_nat_idF} from "../../../store/reducer/Validations/frm4Slice.js";
function StudentForm1() {


    // const theme  = useTheme();
    const [selected, setSelected] = useState("");
    const [birthDatest,setbirthDatest] = useState('')

    const [grade, setGrade] = useState([]);
    const [countries, setCountries] = useState([]);
    const [academic_years, setAcademic_years] = useState([]);
    const [NationalIdValidation, setNationalIdValidation] = useState('');
    // const [StudentMobileValidation, setStudentMobileValidation] = useState('');
    const [course_programs, setCourse_programs] = useState([]);
    const [stages, setStages] = useState([]);
    const [identityError, setIdentityError] = useState('');
    // const [endDateError, setEndDateError] = useState('');





    // ***********************************************************************************
    const [birthDateError, setBirthDateError] = useState('');
    const [genderError, setGenderError] = useState('');
    const [natonalityError, setNatonalityError] = useState('');
    const [yearError, setYearError] = useState('');
    const [gradeError, setGradeError] = useState('');
    const [programmeError, setProgrammeError] = useState('');
    // ***********************************************************************************

    let token = '34d8345ef82a66e18c8b3da14f2e372dbe892d57';
    /** Type variable to store different array for different dropdown */
    const [type, setType] = useState([]);
    /** This will be used to create set of options that user will see */
    const [stagesOptions, setStagesOptions] = useState([]);
    // localStorage.getItem('token');
    // validate identity number
    const handleInputyear= (event) => {
        // Allow only numeric values
        const inputValue = event.target.value.replace(/[^0-9]/g, '');
        setyear(inputValue);
    };

 const [natidType,setnatidType] = useState({})


    function validateNationalId(value, name) {
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
        console.log('dispatched natidF', value, name);

        if (value === '0' || value === "" || !value) {
            ele.classList.remove('d-none');
            dispatch(setNatidF(false));
            setIdentityError("This Field is required");
        } else {
            if (!pattern.test(value)) {
                console.log(is_numeric, 'pattern', !pattern.test(value));
                if (is_numeric === 1) {
                    setIdentityError(`Identity must be only numbers with length ${lengtho}`);
                } else if (is_numeric === 0) {
                    setIdentityError(`Identity length must be ${lengtho}`);
                }
                dispatch(setNatidF(false));
                ele.classList.remove('d-none');
            } else {
                dispatch(setNatidF(true));
                ele.classList.add('d-none');
                return true;
            }
        }
    }





    const date_of_birth = useSelector((state)=>state.student.date_of_birth)
    const fetchGrade = () => {
        axiosInstance.post('student/view-reggrades-bylimitage/', {'date_of_birth': birthDatest})
            .then((res) => {
                console.log(res,"FFFFFFFFFFFFFFFFFFF")
                if (res.data.success.registergrades) {
                    console.log("grade",res.data.success.registergrades )
                    const register=  res.data.success.registergrades;
                    setGrade(register);
                    dispatch(setGradesList(register));
                }
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    };

    function validateBirthDate(e) {
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value===""){

            setBirthDateError('This Field is required')
            eleErr.classList.remove('d-none');
            dispatch(setBirthdateF(false))
        }else{
            const currentDate = new Date();
            const year = currentDate.getFullYear();
            const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
            const day = String(currentDate.getDate()).padStart(2, '0');
            const today = `${year}-${month}-${day}`;

            if (date_of_birth < today) {
                dispatch(setBirthdateF( true ));
                setBirthDateError('')
                fetchGrade();
                return true;
            } else {
                dispatch(setBirthdateF(false))
                setBirthDateError(`Birth date cannot be in the future`);
                return false;
            }

        }




    }

    const dispatch = useDispatch();
    const iqama_id = useSelector((state) => state.student.iqama_id);
    const nationalty = useSelector((state) => state.student.nationality_id);
    const birthDate = useSelector((state) => state.student.date_of_birth)
    const gender = useSelector((state) => state.student.gender);
    const acadmic_year_id = useSelector((state) => state.student.acadmic_year_id);
    const grades = useSelector((state) => state.student.reg_grade_id);
    const program = useSelector((state)=>state.student.programme_id)
    const GradesList = useSelector((state)=>state.frm1.GradesList)
    const Programslist = useSelector((state)=>state.frm1.ProgramsList)
    const YearsList = useSelector((state)=>state.frm1.YearList)

    console.log( "hello ",acadmic_year_id)
    const handleNationalIDChange = (e) => {
        const inputValue = e.target.value;
        dispatch(setStudentNational(inputValue));
    };

     const  hundelBirthDateChange = async (e) => {
         console.log('birth',e.target.value)
        setbirthDatest(e.target.value)
              dispatch(setBirthDate(e.target.value));

    };
    const handleGenderChange = (e) => {
        // debugger;
        dispatch(setGender(e.target.value));
        if(e.target.value){
            dispatch(setGenderF(true))
        }
    };
    ////////////////// Required Input Validation ////////////////////////
    const handleGenderValidation = (value , name)=>{
        let eleErr = document.getElementById(name);
        if( value===""){
            dispatch(setGenderF(false))
            setGenderError('This Field is required')
            eleErr.classList.remove('d-none');

        }else{
            dispatch(setGenderF(true))
            eleErr.classList.add('d-none');

        }
    }

    const validateAcademic=(e)=>{
        let eleErr = document.getElementById(e.target.name);

        if(e.target.value==="" || e.target.value==="0"){
            dispatch(setYearF(false))
            setYearError("This Field is required")
            eleErr.classList.remove('d-none');

        }else{
            dispatch(setYearF(true))
            eleErr.classList.add('d-none');
        }
    }
    const validateGrades=(e)=>{
        let eleErr = document.getElementById(e.target.name);

        if(e.target.value==="" || e.target.value==="0"){
            dispatch(setGradeF(false))
            setGradeError("This Field is required")
            eleErr.classList.remove('d-none');

        }else{
            dispatch(setGradeF(true))
            eleErr.classList.add('d-none');
        }




    }
    const handleAcademicYearChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(SetSacademicYear(valueAsNumber));
        // gradeView(e.target.value)
    };


    const hundleGradeChange = (e) => {
        const selectedOption = e.target.value;
        const selectedGrade = GradesList.find(grade => grade.reg_grade_id === parseInt(selectedOption));
        dispatch(setGradeId(selectedGrade.grade_id))
        console.log(selectedGrade.grade_id,"GradesList")


        const valueAsNumber = parseInt(e.target.value);
        dispatch(setGrades(valueAsNumber))
        setTimeout(()=>{
            axiosInstance.post('student/view-academic-years-by-agelimit/',{
                date_of_birth:birthDatest,
                reg_grade_id:e.target.value
            }).then((reso)=>{
                console.log(reso,"POSRTE")
                if(reso.data.success){
                    console.log("academicsss",reso.data.success.academic_year,"grade id ", e.target.value)
                    setAcademic_years(reso.data.success.academic_year)
                    dispatch(setYearList(reso.data.success.academic_year))
                    console.log(YearsList)
                }
            })
            axiosInstance.post('general_settings/view-programmes-by-grade/',{
                reg_grade_id:e.target.value
            }).then((reso)=>{
                if(reso.data.success){
                    console.log("Course_programs",reso.data.success)
                    setCourse_programs(reso.data.success)
                    dispatch(setProgramsList(reso.data.success))
                }
            })


            dispatch(setGrades(valueAsNumber));
        },500)

    }






    const hundelNationaltyChange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setNationlaty(valueAsNumber))
        console.log(e.target.value,"POTTY%^%$E")
        let element = countries.find((ele) => {
            return ele[3] === e.target.value;
        });
    }



   const validateNationality = (value , name)=>{
       let eleErr = document.getElementById(name);
       console.log(value,"RRRRRTerfd",eleErr)
       if(value==="0" || !value || value===""){
           dispatch(setNationaltyF(false))
           setNatonalityError('This Field is required')
           eleErr.classList.remove('d-none');
       }else{
           dispatch(setNationaltyF(true))
           eleErr.classList.add('d-none');

       }

   }
    const validateProgramme = (e)=>{
        let eleErr = document.getElementById(e.target.name);
        if(e.target.value==="0" || !e.target.value || e.target.value===""){
            dispatch(setProgramF(false))
            setProgrammeError('This Field is required')
            eleErr.classList.remove('d-none');
        }else{
            dispatch(setProgramF(true))
            eleErr.classList.add('d-none');

        }







    }

    const handleprogrammchange = (e) => {
        const valueAsNumber = parseInt(e.target.value);
        dispatch(setProgram(valueAsNumber))
    }

    async function fetchData() {
        await axiosInstance.post('countries/view-all-countries/')
            .then(response => {
                console.log(response.data.success.countries);
                setCountries(response.data.success.countries);
                 let countriesOptions = [];
                for (let i = 0; i < (response.data.drop.ahrm_countries).length; i++) {
                    countriesOptions.push({
                        value: response.data.drop.ahrm_countries[i][0], label: response.data.drop.ahrm_countries[i][3]
                    })
                }
                 console.log(countriesOptions);
              })


            .catch(error => {
                console.log(error);
            });
        // // grade
        await axiosInstance.post('general_settings/view-national-setting/').then((res)=>{
            setnatidType(res.data.success)
            console.log("type",res.data.success)
        })


    }
    //Grade
const natRef=useRef()

    //program


    useEffect(() => {
        fetchData();


    }, [selected]);

    // validation useEffect
    const generateRandomCombination = () => {
        // Generate a random character
        const randomChar = String.fromCharCode(Math.floor(Math.random() * 26) + 65);

        // Generate a random number between 1 and 100
        const randomNumber = Math.floor(Math.random() * 100) + 1;

        // Combine the random character and number
        const randomCombination = randomChar + randomNumber;

        return randomCombination;
    };
    const validate_form= useSelector((state)=>state.student.validate_form)
    useEffect(() => {
        // alert(natRef.current.value)
        console.log('lolo')
        if(natRef.current.value===14){
            alert('lolo')
        }
         else {
            // const randomValue = generateRandomCombination();
            //  dispatch(setNext_form(randomValue))
         }
    }, [validate_form]);
// }, []);


    return (<>
        <div className=' '>
            <div className='scrollDiv  m-auto  '>
                <div className='container bg-white '>
                    <form  >
                        {/*********************************national id********************************* */}
                        <div className='row '>
                            <div className='head text-center mb-5'>
                                <h2 className='mb-2 '>Applicant (student)</h2>
                                <span>Please fill this form with the required information</span>
                            </div>
                            <div className='col-md-12 col-sm-12  '>
                                <label className='text-capitalize  d-block'>national ID <span
                                    className="d-inline-block text-danger">*</span></label>
                                <input className="form-control " type="text"
                                       ref={natRef}
                                       maxLength={natidType.national_length}
                                       value={iqama_id}
                                       name='iqama_id'
                                       onChange={(e)=>{
                                           handleNationalIDChange(e)
                                       }}
                                       onBlur={(e) => {
                                           validateNationalId(e.target.value, e.target.name)
                                           // setNationalIdValidation(validateNationalId(e.target.value, e.target.name));
                                       }}
                                       placeholder="Add National ID"/>
                                <p id="iqama_id" className='d-none pt-2 text-danger  validateError'>{identityError}</p>
                            </div>
                        </div>
                        <div className='row py-2 mb-3'>
                        {/*-------------------------------- gender----------------------------------- */}
                            <div className='col-md-6 mb-3'>
                                <label>gender<span
                                    className="d-inline-block text-danger">*</span></label>
                                <select className='form-select '
                                        name='gender'
                                        onChange={handleGenderChange}
                                        value={gender}
                                        onBlur={(e) => {
                                            handleGenderValidation(e.target.value, e.target.name)
                                        }}>
                                    <option selected disabled value=''>select gender</option>
                                    <option value='Female'>Female</option>
                                    <option value='Male'>Male</option>
                                </select>
                                <p id="gender" className=' d-none text-danger validateError '>{genderError}</p>
                            </div>
                            {/*----------------------------------birth-Date ----------------------------------- */}
                            <div className='col-md-6 mb-3'>
                                <label className='text-capitalize d-inline-block'> birth
                                    date <span className="d-inline-block text-danger">*</span></label>
                                <input className="form-control"
                                       id='date'
                                       value={date_of_birth}
                                       onChange={(e) => {
                                           hundelBirthDateChange(e)
                                       }}
                                       onBlur={(e) => {
                                           validateBirthDate(e)
                                       }}
                                       type="date"
                                       placeholder="dd/mm/yyyy"

                                />

                                <p id="gender" className=' d-none text-danger validateError '>{genderError}</p>
                                <p id="s_birthDate" className=' pt-2 text-danger validateError '>{birthDateError}</p>
                            </div>

                            {/*----------------------------------student Nationality ------------------------------------*/}
                            <div className='col-md-6 mb-3  '>
                                <label className='text-capitalize mb-0 d-inline-block'>
                                Nationality<span
                                    className="d-inline-block text-danger"> *</span></label>
                                <select className="form-select "
                                        value={nationalty}
                                        name="natonality"
                                        onBlur={(e) => {
                                            validateNationality(e.target.value, e.target.name)
                                        }}
                                        onChange={(e) => {
                                            hundelNationaltyChange(e)
                                        }}>
                                    <option value={0} disabled selected>select nationality</option>
                                    {countries.map((country, index) => {
                                        return (<option key={index} value={country.country_id}>{country.name}</option>)
                                    })}
                                </select>
                                <p id="natonality" className=' d-none text-danger validateError '>{natonalityError}</p>


                            </div>
                            {/*----------------------------------grade------------------------------------*/}
                            <div className='col-md-6 mb-3'>
                                <label className='text-capitalize '>select the grade <span
                                    className="d-inline-block text-danger">*</span></label>
                                <select className='form-select '
                                        value={grades}
                                        name="gradeId"
                                        onBlur={(e)=>{
                                            validateGrades(e)
                                        }}
                                        onChange={(e) => {
                                            hundleGradeChange(e)
                                        }}>
                                    <option value={0} disabled selected>select grade</option>
                                    {GradesList.map((grade, index) => {
                                        return (<option key={index}
                                                        value={grade.reg_grade_id}>{grade.grade_name}</option>)
                                    })}
                                </select>
                                <p id="gradeId" className='d-none pt-2 text-danger  validateError'>{gradeError}</p>
                            </div>
                            {/*---------------------------------- Academic Year------------------------------------*/}
                            <div className='col-md-6 mb-3 '>
                                <label className='text-capitalize d-inline-block'>Academic
                                    Year<span className="d-inline-block text-danger">*</span></label>
                                <select className='form-select'
                                        onChange={(e) => {
                                            handleAcademicYearChange(e)
                                        }}
                                        value={acadmic_year_id}
                                        name="academicYear"
                                        onBlur={(e) => {
                                            validateAcademic(e)
                                        }}
                                >
                                    <option value={0} disabled selected>select academic year</option>
                                    {YearsList.length !== 0 ? (

                                        <>

                                            {YearsList.map((year, index) => (
                                                <option
                                                    key={index}
                                                    value={year.academic_year_id}
                                                >
                                                    {year.year_name} - {year.semester_name} semester
                                                </option>
                                            ))}
                                        </>
                                    ) : null}
                                </select>

                                <p id="academicYear" className=' d-none text-danger validateError '>{yearError}</p>
                            </div>
                            {/*----------------------------------Program------------------------------------*/}
                            <div className='col-md-6 mb-3'>
                                <label className='text-capitalize'>Student Program<span
                                    className="d-inline-block text-danger">*</span></label>
                                <select className='form-select '
                                        onBlur={(e)=>{
                                            validateProgramme(e)
                                        }}
                                        value={program}
                                        name="programm"
                                        onChange={(e) => {
                                            handleprogrammchange(e)
                                        }}>
                                    <option value={0} disabled selected>select program</option>
                                    {Programslist.map((program, index) => {
                                        return (<option key={index}
                                                        value={program.id}>{program.program_name}</option>)
                                    })}
                                </select>
                                <p id="programm" className='d-none pt-2 text-danger  validateError'>{programmeError}</p>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>);
}

export default StudentForm1;
export const validateFrm1 = (validatedFields)=>{
    if(Object.values(validatedFields).every((value) => value === true)){
        return true

    }

}