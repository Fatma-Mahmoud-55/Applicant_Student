import React, {useEffect, useState} from 'react';
import axiosInstance from '../../../axiosConfig/instanse';
import Document from "./Document.jsx";
import {setDocumentIds} from "../../../store/reducer/studentSlice.js";


const DocumentUpload = (props) => {
    const[uploadNames,setUploadNames]=useState([]);
    const[uploadFiles,setUploadFiles]=useState([]);
    const[docsList,setDocsList]=useState([]);
    const[docs,setDocs]=useState({});
    console.log('upload',uploadFiles,uploadNames);
    async function fetchDocs() {
        await axiosInstance.post('/student/view-all-applicant-document-type/')
            .then((response) => {
                console.log('docs',response.data.success);
                setDocsList(response.data.success);
                ///////////////////


            })
            .catch((error) => {
                console.log(error);
            });
    }
    useEffect(() => {
        fetchDocs()
    }, []);
        console.log('objectDocs',docs)

    useEffect(() => {
       props.catchValue(uploadNames,uploadFiles,docs)

    }, [uploadNames]);


    // const sendFiles=async (data)=>{
    //     console.log('data',data)
    //     await axiosInstance.post('/hr/employee_upload_files/',data)
    //         .then(response => {
    //             console.log('sendFiles',response);
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         });
    // }
   // const handleOnClickUpload=()=> {
   //      const result=new FormData();
   //      uploadNames.map((ele,i) =>{
   //          result.append(ele,uploadFiles[i])
   //      });
   //      result.append('employee_document_types_id',docsId);
   //      result.append('employee_id',73)
   //       // console.log('result',result);
   //      sendFiles(result);
   //
   //
   // }


    useEffect(() => {
        const Obj={};
        docsList.map((ele) => (
            Obj[ele.name]=ele.id
        ))
        setDocs(Obj);
    }, [docsList]);

    return (
        <div className={'d-flex flex-column gap-2 align-items-center '}>
            <h2>Attachment Files</h2>
        <div className={'row'}>
            {
                docsList.map((ele, index) => (
                    // setDocsId([...docsId,ele.employee_document_types_id]),
                    <Document  data={ele} key={index}
                               catchValue={(name,file)=>{setUploadFiles([...uploadFiles,file]);
                                   setUploadNames([...uploadNames,name])}}/>
                ))
            }
        </div>

        </div>
    );
};

export default DocumentUpload;