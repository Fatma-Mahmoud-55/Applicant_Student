import React, {useEffect, useState} from "react";
import { Link, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import Success from '../../../../../img/student/success3.jpg';
import error from '../../../../../img/student/error.jpg'
import {useDispatch, useSelector} from "react-redux";
import empSlice, {setNext_form,setFirst_open} from "../../../../../Store/empSlice.js";
import EmpolyeeForm1 from "./EmpolyeeForm1.jsx";
import EmpolyeeForm2 from "./EmpolyeeForm2.jsx";
import EmpolyeeForm3 from "./EmpolyeeForm3.jsx";
import EmpolyeeForm4 from "./EmpolyeeForm4.jsx";
import EmpolyeeForm5 from "./EmpolyeeForm5.jsx";
import axiosInstance from "../../../../../axiosConfig/instanse.js";
import DocumentUpload from "./DocumentUpload.jsx";

const empolyeeForm = () => {
  const [namesFiles,setNamesFiles]=useState([]);
    const [files,setFiles]=useState([]);
    const [filesIdes,setFilesIdes]=useState({});

  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [loggedin, setLoggedin] = useState(false);
  const currentPage = page;
  const dispatch = useDispatch()

  const employee = useSelector((state) => state.empSlice)
    // console.log('student',employee)
  const frm1 = useSelector((state)=>state.frmEmp1Slice)
  const frm2 = useSelector((state)=>state.frmEmp2Slice)
  const frm3 = useSelector((state)=>state.frmEmp3Slice)
  const frm4 = useSelector((state)=>state.frmEmp4Slice)
  const frm5 = useSelector((state)=>state.frmEmp5Slice)



  const convertReduxObjectToFormData = (reduxObject) => {
      const formData1 = new FormData();

      Object.keys(reduxObject).forEach((key) => {
          formData1.append(key, reduxObject[key]);
      });
      return formData1;
  };

const FormTitles = ["form1", "form2", "form3", 'form4', 'form5','DocumentUpload'];
const PageDisplay = () => {
    if (page === 0) {
        return <EmpolyeeForm1/>;
    } else if (page === 1) {
        return <EmpolyeeForm2/>;
    } else if (page === 2) {
        return <EmpolyeeForm3/>;
    } else if (page === 3) {
        return <EmpolyeeForm4/>;
    } else if (page === 4) {
        return <EmpolyeeForm5/>;
    }else if (page === 5) {
        return <DocumentUpload catchValue={(name,file,ides)=>{
            setNamesFiles(name);
            setFiles(file);
            setFilesIdes(ides);
        }}/>;
    }
};
const finish = async () => {
  if (page === FormTitles.length - 1) {

      const newForm = convertReduxObjectToFormData(employee);
       const result={};
      namesFiles.map((ele,i) =>{
          result[ele]=files[i]
      });

      console.log('result',result);

      for (const key in result) {
              newForm.append(key, result[key]);
      }
      newForm.append('employee_document_types_id',namesFiles.map((ele) => (
          filesIdes[ele]
      )));
      newForm.append('token', '5eb599304e9893b9fc905d112e53aa2053931001');

              console.log('newForm',[...newForm])
      await axiosInstance.post(`/hr/employee_create/`, newForm)
          .then(response => {
              // console.log('employee',response.data.Employee_code)
              if (response.data.success) {
                  console.log('success',response.data.success);
                  localStorage.setItem("status", response.data.Employee_code);
                  localStorage.setItem("password", response.data.Employee_password);
                  alert("FORM SUBMITTED");
                  navigate('/emp_final_page');
              } else if (response.data.error) {
                  console.log(response);
                  showError(response.data.error);
              }
          })
          .catch(error => {
              console.log(error);
          });
  } else {

          dispatch(setFirst_open(false))
      if(page===0){
            if( frm1.jobCategoryIdF && frm1.employeeDepartmentIdF && frm1.employeePositionIdF && frm1.employeeGradeIdF
                && frm1.jobTitleF && frm1.jobTypeIdF  && frm1.employeeStatusIdF && frm1.joiningDateF && frm1.lastWorkingDateF){
          setPage(1);
            }else {
                console.log(11)
                Swal.fire({
                    timer: 1000,
                    position:'top-center',
                    heightAuto: false,
                    width:'35%',
                    icon: "warning",
                    title: "Oops...",
                    text: "Some inputs are missing!",
                });
                return
            }
      }
      if(page===1){
          if(frm2.firstNameLng1F && frm2.secondNameLng1F && frm2.thirdNameLng1F && frm2.lastNameLng1F
          && frm2.firstNameLng2F && frm2.secondNameLng2F && frm2.thirdNameLng2F && frm2.lastNameLng2F
              && frm2.religionF && frm2.genderF && frm2.noExpYearF && frm2.passportNoF && frm2.passportIssueDateF
              && frm2.passportEndDateF &&frm2.nationalityIdF && frm2.dateOfBirthF &&frm2.maritalStatusF
              && frm2.noOfChildrenF && frm2.childrenAgesF && frm2.noExpMonthF  &&frm2.nationalIdF && frm2.highestDegreeF){
          setPage(2);
          }else {
                Swal.fire({
                              timer: 1000,
                              position:'top-center',
                              heightAuto: false,
                              width:'35%',
                              icon: "warning",
                              title: "Oops...",
                              text: "Some inputs are missing!",
                          });
          }
                          return
      }

      if (page===2){
          if(frm3.countryIdF && frm3.stateIdF && frm3.cityIdF && frm3.addressF && frm3.mobileF && frm3.emailF && frm3.pinCodeF && frm3.bloodGroupF && frm3.faxF && frm3.mobilePhoneF){
              setPage(3)

          }
          else{
                Swal.fire({
                              timer: 1000,
                              position:'top-center',
                              heightAuto: false,
                              width:'35%',
                              icon: "warning",
                              title: "Oops...",
                              text: "Some inputs are missing!",
                          });
                          return
          }
      }

      if(page===3){
          if(frm4.fatherNameLng1F && frm4.fatherNameLng2F && frm4.motherNameLng1F && frm4.motherNameLng2F
          && frm4.husbandNameLng1F && frm4.husbandNameLng2F){
              setPage(4)
          }else {
                Swal.fire({
                              timer: 1000,
                              position:'top-center',
                              heightAuto: false,
                              width:'35%',
                              icon: "warning",
                              title: "Oops...",
                              text: "Some inputs are missing!",
                          });
                          return
          }

      }
      if(page===4){
          if(frm5.jobExperienceNameF && frm5.experienceDetailsF && frm5.officeCountryF && frm5.officeStateF
          && frm5.officeCityF && frm5.officeAddressF && frm5.officePinCodeF && frm5.officePhone1F && frm5.officePhone2F
              ){
              setPage(5)
          }else {
               Swal.fire({
                              timer: 1000,
                              position:'top-center',
                              heightAuto: false,
                              width:'35%',
                              icon: "warning",
                              title: "Oops...",
                              text: "Some inputs are missing!",
                          });
                          return
          }
      }
  }

}
    const handleNextClick = () => {
        if (page < FormTitles.length - 1) {
            setPage(page + 1);
            // Trigger dispatch to set next form data/state
            dispatch(setNext_form(getRandomNumberAndChars()));
        } else {
            finish();
        }
    };
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
          //
          return <DocumentUpload/>
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
return (
    <div className="contentBox m-0 p-0 ">
        <div className='row m-0 p-0 vh-100'>
            <div className=' col-md-12  col-sm m-0 p-0 '>



                <div className="form-container my-5 py-5  ">


                    <div
                        className=" maincontainer row col-md-9  col-lg-6  col-sm-9 col-9   m-auto bg-white information p-4 ps-0 pe-0  ">
                        {PageDisplay()}
                        <div className={'col-md-6'}>
                            <button className="btn btn-primary my-2 w-100  "
                                    disabled={page == 0}
                                    onClick={() => {
                                        setPage((currPage) => currPage - 1);
                                    }}
                                    style={{display: page == 0 ? 'none' : 'block'}}
                            >
                                Prev
                            </button>
                        </div>
                        <div className={page == 0 ? 'col-md-12' : 'col-md-6'}>
                            <button className="btn btn-primary my-2 w-100" onClick={()=>{finish()}}
                            >
                                {page === FormTitles.length - 1 ? "Submit" : "Next"}
                            </button>
                        </div>


                    </div>

                </div>
            </div>


        </div>
</div>
  );
};

export default empolyeeForm;
