import React, {useEffect, useState} from "react";
import StudentForm1 from "./StudentForm1";
// import student from "./student.jsx";
import { FaFacebookSquare, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import StudentForm2 from "./StudentForm2";
import StudentForm3 from "./StudentForm3";
import StudentForm4 from "./StudentForm4";
import StudentForm5 from "./StudentForm5";
import StudentForm6 from "./StudentForm6";
import StudentForm7 from "./StudentForm7";
import './StudentForm.css'
import axiosInstance from '../../../axiosConfig/instanse';
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Success from '../../../img/student/success3.jpg';
import error from '../../../img/student/error.jpg'
import img from "../../../img/student/forme 1.png";
import logo from "../../../img/student/download.png";
import VerticalLinearStepper from './stepper';
import {useDispatch, useSelector} from "react-redux";
import {setNext_form,setFirst_open} from "../../../store/reducer/studentSlice.js";
import {setNatidF} from "../../../store/reducer/Validations/frm1Slice.js";
import frm5Slice from "../../../store/reducer/Validations/frm5Slice.js";
function StudentForm() {
    const navigate = useNavigate();
    const [page, setPage] = useState(0);
    const [loggedin, setLoggedin] = useState(false);
    const currentPage = page;
    const dispatch = useDispatch()

    const student = useSelector((state) => state.student)
    const frm1 = useSelector((state)=>state.frm1)
    const frm4 = useSelector((state)=>state.frm4)
    const frm2 = useSelector((state)=>state.frm2)
    const frm5 = useSelector((state)=>state.frm5)
    const frm6 = useSelector((state)=>state.frm6)
    const frm3 = useSelector((state)=>state.frm3)

    const First_open = useSelector((state)=>state.student.First_open)
     // const [formData, setFormData] = useState(null);

    // const handleFormData = (data) => {
    //     setFormData(data);
    // };



    const [namesFiles,setNamesFiles]=useState([]);
    const [files,setFiles]=useState([]);
    const [filesIdes,setFilesIdes]=useState([]);



    // const formData = new FormData();
    const convertReduxObjectToFormData = (reduxObject) => {
        const formData1 = new FormData();

        Object.keys(reduxObject).forEach((key) => {
            formData1.append(key, reduxObject[key]);
        });
        // console.log('Form Data', formData1)
        return formData1;
    };

    const FormTitles = ["form1", "form2", "form3", 'form4', 'form5', 'form6', 'form7'];
    const PageDisplay = () => {
        if (page === 0) {
            return <StudentForm1/>;
        } else if (page === 1) {
            return <StudentForm4/>;
        } else if (page === 2) {
            return <StudentForm2/>;
        } else if (page === 3) {
            return <StudentForm5/>;
        } else if (page === 4) {
            return <StudentForm6/>;
        } else if (page === 5) {
            return <StudentForm3/>;
        } else if (page === 6) {
            return <StudentForm7 catchValue={(name,file,ides)=>{
                setNamesFiles(name);
                setFiles(file);
                setFilesIdes(ides);
            }}/>;
        }
    };


    const finish = async () => {
        // alert('page',page)
        // alert('titles',FormTitles.length)

        if (page === FormTitles.length - 1) {
            // alert("FORM SUBMITTED");
            console.log(student,"rreyd");
            console.log('assss')
            // console.log(student.employment_letter);
            const newForm = convertReduxObjectToFormData(student)
            const result={};
            console.log(namesFiles,"namesFilesnamesFiles")
            namesFiles.map((ele,i) =>{
                result[ele]=files[i]
            });
            console.log('resultDoc',result);
            for (const key in result) {
                newForm.append(key, result[key]);
            }
            console.log('rsssssssesult',filesIdes);
            // newForm.append('applicant_document_types_id',namesFiles.map((ele) => (
            //     filesIdes[ele]
            // )));
            console.log("newFormnewForm")
            await axiosInstance.post(`student/add-applicant/`, newForm)
                .then(response => {
                    console.log(response,"DDDDDDDDDDDDDDDDDDDDD");
                    if (response.data.success) {
                        let message = `${response.data.success}`;
                        showSuccess(message);
                        console.log(response.data.success);
                        // alert("FORM SUBMITTED");
                        localStorage.setItem("status", response.data.stu_app_code);
                    } else if (response.data.error) {
                        console.log(response);
                        showError(response.data.error);
                    }
                })
                .catch(error => {
                    console.log(error);
                    //  showError(error);
                })
        } else {
            if(First_open){
                dispatch(setFirst_open(false))
                return
            }
            if(page===0){

            if(frm1.natidF &&  frm1.genderF && frm1.birthdateF && frm1.nationaltyF  && frm1.yearF && frm1.gradeF && frm1.programF ){
                setPage(1);
                return
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: ' is Missلللللللللللللللing ',
                    icon: 'error',
                })
                return
            }
            }
            if(page===1){

            if(frm4.first_name_enF && frm4.second_name_enF &&
                frm4.third_name_enF && frm4.last_name_enF &&
                frm4.first_name_arF && frm4.second_name_arF &&
                frm4.third_name_arF && frm4.last_name_arF &&
                frm4.religionF && frm4.birth_countryF &&
                frm4.nat_id_srcF && frm4.nat_expireF &&
                frm4.parent_nat_idF && frm4.parent_nat_expireF &&
                frm4.parent_nat_id_srcF && frm4.passport_id_F &&
                frm4.passport_id_expireF && frm4.languageF &&
                frm4.passportCountry_F
            ){
                setPage((currPage) => currPage + 1);
                setPage(2);
            }
            else{
                Swal.fire({
                    title: 'Error!',
                    text: ' is Missing ',
                    icon: 'error',
                })
                return
            }
            }

            if (page===2){
                if(frm2.emailF && frm2.phone1_F && frm2.phone2_F && frm2.addressF && frm2.countryF && frm2.stateF && frm2.cityF) {
                    setPage(3)
                }
                else{
                    Swal.fire({
                        title: 'Error!',
                        text:  ` is Missing`,
                        icon: 'error',
                    })
                    return
                }
            }

            if(page===3){

                if(frm5.first_name_engF && frm5.second_name_engF
                    && frm5.third_name_engF && frm5.last_name_engF
                    && frm5.first_name_argF && frm5.second_name_argF &&
                    frm5.third_name_argF && frm5.last_name_argF
                    && frm5.gar_nationalityF && frm5.gar_nat_idF &&
                    frm5.gar_nat_id_srcF && frm5.gar_nat_id_expr){
                 setPage(4)
                } else{
                    Swal.fire({
                        title: 'Error!',
                        text: ' is Missing ',
                        icon: 'error',
                    })
                    return
                }

            }
            if(page===4){
                if(frm6.emergencyMobileF
                && frm6.motherMobileF && frm6.parentCompanyF
                && frm6.parentCompanyAddressF && frm6.parentDateOfBirthF
                && frm6.parentEducationF && frm6.parentJopF
                && frm6.parentMobileF && frm6.parentNationalIdExpiryF
                && frm6.parentNativeLanguageF && frm6.parentPassportIdF
                && frm6.parentRelationF && frm6.parentRiligionF
                && frm6.parentPassportCountryF && frm6.parentEmailF
                && frm6.parentCountryIdF && frm6.parentStateIdF
                && frm6.parentCityIdF
                ){
                setPage(5)

                }else {
                    Swal.fire({
                        title: 'Error!',
                        text: ' is Missing ',
                        icon: 'error',
                    })
                    return
                }
            }
            // if(page===5){
            //     if(frm3.gradeEvaluationF && frm3.gradeScoreF
            //     && frm3.gradeYearF && frm3.lastGradeF
            //     && frm3.schoolCountryF && frm3.schoolNameArF
            //     && frm3.schoolNameEnF){
                setPage(6)

                // }else {
                //     Swal.fire({
                //         title: 'Error!',
                //         text: ' is Missing ',
                //         icon: 'error',
                //     })
                //     return
                // }

            // }
            // if ((student.s_national_id).length != 0 && page === 0 && (student.s_academic_year).length != 0 && (student.gnl_grd_idf).length != 0 && (student.s_nationality_id).length != 0 && (student.s_birth_date).length != 0) {
            //     setPage((currPage) => currPage + 1);
            //     console.log('req')
            //     console.log(student.s_national_id.length)
            // } else if ((student.s_email).length != 0 && page === 1 && (student.s_district).length != 0 && (student.s_address).length != 0 && (student.s_mobile).length != 0) {
            //     setPage((currPage) => currPage + 1);
            // } else if ((student.school_name_en).length != 0 && page === 2 && (student.school_name_lc).length != 0 && (student.school_country).length != 0 && (student.last_grade).length != 0 && (student.grade_year).length != 0 && (student.grade_score).length != 0 && (student.grade_evaluation).length != 0) {
            //     setPage((currPage) => currPage + 1);
            // } else if ((student.s_en_first_name).length != 0 && page === 3 && (student.s_en_last_name).length != 0 && (student.s_en_second_name).length != 0 && (student.s_en_third_name).length != 0 && (student.s_lc_first_name).length != 0 && (student.s_lc_second_name).length != 0 && (student.s_lc_third_name).length != 0 && (student.s_lc_last_name).length != 0 && (student.s_religion).length != 0 && (student.s_birth_country_id).length != 0 && (student.s_national_id_source).length != 0 && (student.s_national_id_expiry).length != 0) {
            //     setPage((currPage) => currPage + 1);
            // } else if ((student.g_en_first_name).length != 0 && page === 4 && (student.g_en_second_name).length != 0 && (student.g_en_third_name).length != 0 && (student.g_en_last_name).length != 0 && (student.g_lc_first_name).length != 0 && (student.g_lc_second_name).length != 0 && (student.g_lc_third_name).length != 0 && (student.g_lc_last_name).length != 0 && (student.g_national_id).length != 0 && (student.g_nationality_id_source).length != 0 && (student.g_nationality_id_expiry).length != 0 && (student.g_nationality_id).length != 0) {
            //     setPage((currPage) => currPage + 1);
            // }  else if ((student.s_passport_id).length != 0 &&
            //  page === 5 && (student.g_nationality_id_expiry).length != 0 &&
            //   (student.s_religion).length != 0 &&
            //    (student.s_native_language).length != 0 &&
            //     (student.g_relation).length != 0 &&
            //      (student.g_birth_date).length != 0 &&
            //       (student.g_education).length != 0 &&
            //        (student.g_job).length != 0 &&
            //        (student.g_company).length != 0 &&
            //         (student.g_office_address).length != 0 &&
            //          (student.g_mobile).length != 0 &&
            //           (student.mother_mobile).length != 0 &&
            //            (student.emergency_phone).length != 0){

        }
        // else {
        //         showAlert('please fill the required inputs', 'warning')
        //     }



        console.log(student);
    }
    function showAlert(message, icon) {
        Swal.fire({
            title: message, icon: icon, showConfirmButton: false, timer: 1500,
        });
    }
    function showSuccess(message) {
        Swal.fire({
            title: message,
            imageUrl: Success,
            imageHeight: 150,
            imageAlt: 'A tall image',
            showConfirmButton: true,
            confirmButtonText: "OK",
        }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                navigate('/stu_final_page')
            }
        })
    }
    function getRandomNumberAndChars() {
        // Function to generate a random number between min (inclusive) and max (exclusive)
        function getRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        }

        // Function to generate a random character
        function getRandomChar() {
            const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const randomIndex = Math.floor(Math.random() * characters.length);
            return characters.charAt(randomIndex);
        }

        // Generate a random number
        const randomNumber = getRandomNumber(1, 100);

        // Generate two random characters
        const randomChar1 = getRandomChar();
        const randomChar2 = getRandomChar();

        // Concatenate the random number and characters
        const result = randomNumber + randomChar1 + randomChar2;

        // Return the combined result
        return result;
    }
    function showError(message) {
        Swal.fire({
            title: message, imageUrl: error, imageHeight: 150, showConfirmButton: true, confirmButtonText: "OK",
        });
    }
const next_form = useSelector((state)=>state.student.Next_form)
    // const next_form = ""
    useEffect(() => {
        console.log('next btn is clicked')
        if(next_form!==""){
        console.log('Next Form:', next_form);
        // finish()
        console.log('lolo2')
        }
    }, [next_form]);
// }, []);

    return (
        <div className="contentBox m-0 p-0 ">
            <div className='row m-0 p-0 vh-100'>
                <div className='col-lg-9 col-md-12  col-sm m-0 p-0 '>
                    <nav className='navbar navbar-expand-lg shadow-sm bg-white pt-2 mt-auto '>
                        <Link className="col-md-6 navbar-brand  " to="/">
                            <img src={logo} style={{ width: '170px' }} className="ms-2 " />
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="col-md-6 collapse navbar-collapse justify-content-end pe-5"
                            id="navbarSupportedContent">
                            <span className='text-dark fs-6 pe-1'>already a member ? </span>
                            <Link className='fw-bold text-decoration-none bg-primary rounded-3 ps-3 pe-3 p-1 text-white' to="/applicant_login">
                                {loggedin ? 'Logout' : 'Log in'}
                            </Link>




                        </div>
                    </nav>


                    <div className="form-container my-5 py-5  ">


                        <div className=" maincontainer row col-md-9  col-lg-6  col-sm-9 col-9   m-auto bg-white information p-4 ps-0 pe-0  ">
                            {PageDisplay()}
                            <div className={'col-md-6'}>
                                <button className="btn btn-primary my-2 w-100  "
                                    disabled={page == 0}
                                    onClick={() => {
                                        setPage((currPage) => currPage - 1);
                                    }}
                                    style={{ display: page == 0 ? 'none' : 'block' }}
                                >
                                    Prev
                                </button>
                            </div>
                            <div className={page == 0 ? 'col-md-12' : 'col-md-6'}>
                                <button className="btn btn-primary my-2 w-100   "
                                    onClick={()=>{
                                        dispatch(setNext_form(getRandomNumberAndChars()))
                                        finish()
                                    }}
                                >
                                    {page === FormTitles.length - 1 ? "Submit" : "Next"}
                                </button>
                            </div>


                        </div>

                    </div>
                </div>


                <div className='col-lg-3 col-sm pt-5  side d-none d-sm-none d-md-none d-lg-block  '>
                    <VerticalLinearStepper page={page} />
                </div>

            </div>
            <div className="bg-primary py-2 footer col-12">
                <div className='container-fluid'>
                    <div className='row justify-content-between '>
                        <div className='col-md-6'>
                            <a href='#' className='text-white text-decoration-none'>AlRowad (AITSP) 2022 All right
                                reserved.</a>
                        </div>
                        <div className='col-md-6'>
                            <div className='d-flex justify-content-md-end align-items-center h-100'>
                                <a href='#' className='text-white text-decoration-none'><FaFacebookSquare
                                    className='me-2 text-white' /></a>
                                <a href='#' className='text-white text-decoration-none'><FaYoutube
                                    className='me-2 text-white' /></a>
                                <a href='#' className='text-white text-decoration-none'><FaInstagram
                                    className='me-2 text-white' /></a>
                                <a href='#' className='text-white text-decoration-none'><FaLinkedin
                                    className='me-2 text-white' /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default StudentForm;