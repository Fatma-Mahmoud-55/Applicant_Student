import React, {useEffect} from 'react';
import {useState} from "react";
import {validationFunction} from './ValidationFunction.js'
import './Document.css'
const Document = (props) => {
    const [errormessage, setErrormessage] = useState('');
    const [show, setShow] = useState('');
    const handleOnChange=(e)=>{
        const value=e.target.files[0];
        // console.log(value,"valueeeeeeeeeeeeeeeeee")

        validationFunction(props.data.doc_type,value.name,setErrormessage);
        console.log(props.data,"valueeeeeeeeeeeeeeeeee")
        props.catchValue(props.data.doc_name_lng1,value);

        console.log("e.target.filename",props.data)
    }

    useEffect(() => {

        console.log('objectDocs',props)
    }, []);


    return (

        <div id={'document'} className={'col-6 my-2'}>

            <div className="">
                <label> {props.data.doc_name_lng1} ({props.data.doc_type}) <span className={`text-danger ${props.data.is_necessary===0?'d-none':'d-inline'}`}>*</span></label>
                <input type="file" className="form-control mt-2"
                       filename={props.data.doc_name_lng1}
                    onChange={handleOnChange}
                />

                <p className={'mt-2'}>{errormessage}</p>
            </div>

        </div>
    );
};

export default Document;