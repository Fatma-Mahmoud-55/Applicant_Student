import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import './StudentForm.css';
import './StudentForm6.css';
import {useDispatch, useSelector} from "react-redux";
import {
    setBirthCertificate,
    setemploymentletters,
    setmedicalfitnessreport,
    setparentacceptanceletter,
    setPatentNationalID,
    setStudentNationalID,
    setstudentvalidpasssport,
    setUploadApplicantPhoto,
    setVaccinationCard,
    setDocumentIds, setStPassportCountry

} from '../../../store/reducer/studentSlice.js'

import {
    setBirthCertificateF ,
    setEmploymentlettersF ,
    setMedicalfitnessreportF,
    setParentacceptanceletterF,
    setPatentNationalIDF,
    setStudentNationalIDF,
    setStudentvalidpasssportF,
    setUploadApplicantPhotoF,
    setVaccinationCardF} from '../../../store/reducer/Validations/frm7Slice.js'
import Document from "./Document.jsx";
import axiosInstance from '../../../axiosConfig/instanse';
function StudentForm7(props) {

    const dispatch = useDispatch();

    const student_photo = useSelector((state) => state.student.student_photo);
    const birth_certificate = useSelector((state) => state.student.birth_certificate);
    const vaccination_card = useSelector((state) => state.student.vaccination_card);
    const student_na_id = useSelector((state) => state.student.student_na_id);
    const parent_na_id = useSelector((state) => state.student.parent_na_id);
    const student_valid_passport = useSelector((state) => state.student.student_valid_passport);
    const medical_fitness_report = useSelector((state) => state.student.medical_fitness_report);
    const parent_acceptance_letter = useSelector((state) => state.student.parent_acceptance_letter);
    const employment_letter = useSelector((state) => state.student.employment_letter);

    const handleUploadApplicantPhotoChange = (e) => {
        dispatch(setUploadApplicantPhoto(e.target.files[0]));
        dispatch(setUploadApplicantPhotoF(true));
    };
    const handleBirthCertificateChange = (e) => {
        dispatch(setBirthCertificate(e.target.files[0]));
        dispatch(setBirthCertificateF(true));
    };
    const handleVaccinationCardChange = (e) => {
        dispatch(setVaccinationCard(e.target.files[0]));
        dispatch(setVaccinationCardF(true))
    };
    const handleStudentNationalIDChange = (e) => {
        dispatch(setStudentNationalID(e.target.files[0]));
        dispatch(setStudentNationalIDF(true));
    };
    const handlePatentNationalIDChange = (e) => {
        dispatch(setPatentNationalID(e.target.files[0]));
        dispatch(setPatentNationalIDF(true))
    };
    const handlestudentvalidpasssportChange = (e) => {
        dispatch(setstudentvalidpasssport(e.target.files[0]));
        dispatch(setStudentvalidpasssportF(true));
    };
    const handlemedicalfitnessreportChange = (e) => {
        dispatch(setmedicalfitnessreport(e.target.files[0]));
        dispatch(setMedicalfitnessreportF(true));
    };
    const handleparentacceptanceletterChange = (e) => {
        dispatch(setparentacceptanceletter(e.target.files[0]));
        dispatch(setParentacceptanceletterF(true));
    };
    const handleemploymentlettersChange = (e) => {
        dispatch(setemploymentletters(e.target.files[0]));
        dispatch(setEmploymentlettersF(true));
    };

    const student = useSelector((state) => state.student);
    const formData = new FormData();
    const convertReduxObjectToFormData = (reduxObject) => {
        const formData1 = new FormData();

        Object.keys(reduxObject).forEach((key) => {
        formData1.append(key, reduxObject[key]);
        });

        return formData1;
    };

    // function file(document, window, index) {
    //     var inputs = document.querySelectorAll('.inputfile');
    //     Array.prototype.forEach.call(inputs, function (input) {
    //         var label = input.nextElementSibling,
    //             labelVal = label.innerHTML;
    //
    //         input.addEventListener('change', function (e) {
    //             var fileName = '';
    //             if (this.files && this.files.length > 1)
    //                 fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
    //             else
    //                 fileName = e.target.value.split('\\').pop();
    //
    //             if (fileName)
    //                 label.querySelector('span').innerHTML = fileName;
    //             else
    //                 label.innerHTML = labelVal;
    //         });
    //
    //
    //     });
    // }




    // useEffect(() => {
    //     file(document, window, 0);
    //     console.log("StudentForm7")
    //     // formData= convertReduxObjectToFormData(student)
    // }, []);



    /////////////////////////////////////////////////////////////////////


    const[uploadNames,setUploadNames]=useState([]);
    const[uploadFiles,setUploadFiles]=useState([]);
    const[docsList,setDocsList]=useState([]);
    const[idsList,setIdsList]=useState([]);
    const[docs,setDocs]=useState({});
    let token = localStorage.getItem('token');
    console.log('upload',uploadFiles,uploadNames);
    async function fetchDocs() {
        await axiosInstance.post('/student/view-all-applicant-document-type/',{},{
            headers: {
                "Authorization" : `Token 6cdc0eb41982e7d5c96b389ef8589f3b0a350ce0`
            }
        })
            .then((response) => {
                console.log('docdddddddddds',response.data.success);
                setDocsList(response.data.success);
                const data = response.data.success;
                let arr1 = []
                let ddt2 =[]
                ddt2 = data
                ddt2.map((ele)=> {
                    console.log(ele.id)
                    arr1.push(ele.id)
                })
                console.log(arr1)
                dispatch( setDocumentIds(arr1))




            })
            .catch((error) => {
                console.log(error);
            });
    }

    // useEffect(() => {
    //     props.catchValue(uploadNames,uploadFiles,docs)
    //     console.log('objectDocs',docs)
    //
    // }, [uploadNames]);
    //


    useEffect(() => {
        fetchDocs()
        console.log(idsList,"SSSSSSSSfffSSSSSSSSs")
    }, []);

    useEffect(() => {
        props.catchValue(uploadNames,uploadFiles,docs)
        console.log(uploadNames,"uploadNames")

    }, [uploadNames]);





    useEffect(() => {
        const Obj={};
        docsList.map((ele) => (
            Obj[ele.name]=ele.id
        ))
        setDocs(Obj);

        console.log(docsList,"dddddddddddddddddddddddddddddd")

    }, [docsList]);


    return (
        <>


            <div className={'d-flex flex-column gap-2 align-items-center '}>
                <h2>Attachment Files</h2>
                <div className={'row'}>

                    {
                        docsList.map((ele, index) => (
                            // setDocsId([...docsId,ele.employee_document_types_id]),
                            <Document data={ele} key={index} catchValue={(name, file) => {
                                setUploadFiles([...uploadFiles, file]);
                                setUploadNames([...uploadNames, name])
                            }}/>
                        ))
                    }

                </div>

            </div>

            {idsList}
            {/*********************************************************************/}

            {/*<div className=' '>*/}
            {/*    <div className='scrollDiv  m-auto  '>*/}
            {/*        <div className='container bg-white '>*/}


            {/*            /!***************************************************************** *!/*/}
            {/*            <form>*/}
            {/*                <div className='row mb-0'>*/}
            {/*                    /!************************************ Title******************************************* *!/*/}
            {/*                    <div className='row '>*/}
            {/*                        <div className='head text-center mb-4'>*/}
            {/*                            <h2 className='mb-2 '>Applicant (Parent)</h2>*/}
            {/*                            <span>Please fill out this form with the required information</span>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}


            {/*                    <div className='row py-2 mb-3'>*/}

            {/*                        /!************************************ Applicant Photo******************************************* *!/*/}
            {/*                        <div className='col-md-6 mb-3'>*/}
            {/*                            <label> Upload Applicant Photo*/}
            {/*                                <span className="d-inline-block text-danger mx-1"> *</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={student_photo}*/}

            {/*                                   accept="image/*"*/}
            {/*                                   onChange={handleUploadApplicantPhotoChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}
            {/*                        /!************************************ birth certificate******************************************* *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>Birth Certificate*/}
            {/*                                <span className="d-inline-block text-danger mx-1">*</span> </label>*/}

            {/*                            <input className="form-control mt-2" type="file" id="formFile"*/}
            {/*                                   accept="image/*"*/}
            {/*                                   filename={birth_certificate}*/}
            {/*                                   onChange={handleBirthCertificateChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}

            {/*                        /!*****************************************vaccination card (copy)**************************************************** *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>Vaccination Card*/}
            {/*                                <span className="d-inline-block text-danger mx-1"> *</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={vaccination_card}*/}
            {/*                                   accept="image/*"*/}
            {/*                                   onChange={handleVaccinationCardChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}

            {/*                        /!************************************ Student National ID******************************************* *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>Student National ID*/}
            {/*                                <span className="d-inline-block text-danger mx-1">*</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={student_na_id}*/}
            {/*                                   accept="image/*"*/}
            {/*                                   onChange={handleStudentNationalIDChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}


            {/*                        /!*******************************************patent national id/iqama (copy)**************************************************** *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>Patent National ID*/}
            {/*                                <span className="d-inline-block text-danger mx-1"> *</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={parent_na_id}*/}
            {/*                                   name="file-5[]"*/}
            {/*                                   accept="image/*"*/}
            {/*                                   onChange={handlePatentNationalIDChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}
            {/*                        /!************************************ student valid passsport ******************************************** *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>student valid passsport*/}
            {/*                                <span className="d-inline-block text-danger mx-1">*</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={student_valid_passport}*/}
            {/*                                   name="file-6[]"*/}
            {/*                                   accept="image/*"*/}
            {/*                                   onChange={handlestudentvalidpasssportChange}*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}


            {/*                        /!********************************************************medical fitness report************************************************** *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>medical fitness report*/}
            {/*                                <span className="d-inline-block text-danger mx-1"> *</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={medical_fitness_report}*/}
            {/*                                   name="file-8[]"*/}
            {/*                                   onChange={handlemedicalfitnessreportChange}*/}
            {/*                                   accept="image/*"*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}
            {/*                        /!**********************************************************parent acceptance letter************************************************************* *!/*/}

            {/*                        <div className='col-md-6  mb-3'>*/}
            {/*                            <label>parent acceptance letter*/}
            {/*                                <span className="d-inline-block text-danger mx-1">*</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={parent_acceptance_letter}*/}

            {/*                                   nname="file-9[]"*/}
            {/*                                   onChange={handleparentacceptanceletterChange}*/}
            {/*                                   accept="image/*"*/}
            {/*                                   multiple/>*/}
            {/*                        </div>*/}
            {/*                        /!************************************************************employment letters (non-saudi)********************************************************** *!/*/}
            {/*                        <div className='col-md-12  mb-0'>*/}
            {/*                            <label>employment letters*/}
            {/*                                <span className="d-inline-block text-danger mx-1">*</span> </label>*/}

            {/*                            <input type="file" class="form-control mt-2"*/}
            {/*                                   filename={employment_letter}*/}

            {/*                                   name="file-10[]"*/}
            {/*                                   onChange={handleemploymentlettersChange}*/}
            {/*                                   accept="image/*"*/}
            {/*                                   multiple*/}
            {/*                            />*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </form>*/}

            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*///////////////////////////////////////////*/}
            {/*<div>*/}

            {/*    <input type="file" onChangeCapture={(e) => {*/}
            {/*        console.log(e.target.value,"aSSSSaaSSSaaRTRTRT")*/}
            {/*    }}/>*/}
            {/*    <button onClick={() => {*/}
            {/*        // const input = document.querySelector('input');*/}
            {/*        // const file = '/home/atisp-fedora/users.sql';*/}
            {/*        // input.files = file;*/}
            {/*        // input.files[0] = file;*/}

            {/*        ////*/}
            {/*        const fileInput = document.querySelector('input[type="file"]');*/}
            {/*        console.log(fileInput.files[0])*/}
            {/*        const myFileContent = ['My File Content'];*/}
            {/*        const myFileName = '/home/atisp-fedora/users.sql';*/}
            {/*        const myFile = new File(myFileContent, myFileName);*/}
            {/*        const dataTransfer = new DataTransfer();*/}
            {/*        dataTransfer.items.add(myFile);*/}
            {/*        const fileList = dataTransfer.files;*/}
            {/*        fileInput.files = fileList*/}
            {/*        setTimeout(() => {*/}
            {/*            fileInput.dispatchEvent(new Event('change', {bubbles: true}));*/}

            {/*        }, 1000)*/}

            {/*    }}>set input*/}
            {/*    </button>*/}
            {/*</div>*/}
            {/*////////////////////////////////////////////////*/}
        </>
    );
}

export default StudentForm7;