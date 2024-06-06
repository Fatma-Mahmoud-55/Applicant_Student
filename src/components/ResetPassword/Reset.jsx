import * as React from 'react'; 
import img_login from '../../img/reset.png';
import { useState , setState , useEffect} from 'react';
import axiosInstance from '../../axiosConfig/instanse';
import style from './Reset.module.css';
  
import Success from '../../img/student/success3.jpg';
import error from '../../img/student/error.jpg'
import Swal from "sweetalert2";
import { data } from 'jquery';



function Reset(){

    
    const [password, setPassword] = useState('');
    const [re_password, setRe_Password] = useState('');
    let token = localStorage.getItem('token');

    function showAlert(message, img){
        Swal.fire({
            title: message,
            showConfirmButton: true,
            imageUrl: img,
            imageHeight: 150,
            imageAlt: 'A tall image',
            
          });
    } 
    
    
    
   
 async function send(e){

        e.preventDefault();
        
         axiosInstance.post('user/reset_pass/', {
            password: password,
            token:token,
            re_password: re_password,

        }).then(response => {
            console.log(response);
           if(response.data.success){
            let message = response.data.success
            showAlert(message , Success)
           }
           else {
            showAlert(response.data.error , error)
           }
            
          

          
        });
    };

    

    

    return(

        <>
        <section className={`${style.section} d-flex justify-content-center align-items-center`  }>
        <div className={` ${style.loginBox} w-75 d-flex align-items-center `}>
            <div className={`row   p-0 m-0  `}>
               <div className={` p-o m-0  col-lg-6 d-flex align-items-center justify-content-center `}>
                    <div className={` px-2 m-0  d-flex align-items-center ${style.imgBox} `}>
                        <img width='100%'className={`${style.login_img}`} src={img_login} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 p-0  row align-items-center ">
                    <div className={`p-5 mx-2 form col-12  rounded text-start  ${style.textBox}` }>
                        <h4 className=" text-capitalize text-primary fw-bold">reset your Password </h4>
                        
                        <form method="POST" onSubmit={send} className=" w-100 my-3">
                          
                       

                            <label className={`${style.text}   my-2 text-capitalize  `}>enter new password</label>
                            <input name="password" className=" form-control mb-1" type="password"
                                    
                                    required autoFocus 
                                    
                                    onChange={e => setPassword(e.target.value)}
                             />
                             <label className={`${style.text}   my-2 text-capitalize  `}>confirm new password</label>
                            <input name="confirmPassword" className=" form-control mb-1" type="password"
                                    
                                    required autoFocus 
                                    
                                    onChange={e => setRe_Password(e.target.value)}
                             />
                            <p className={`${style.p_text} mt-0 mb-3`}>strong password include numbers, letters, and punctuation marks.</p>

                       
                            
                            <button type="submit"  className={`btn btn-primary form-control btn   mt-3 w-100`}>Reset </button>

                           
                        </form>
                    </div>
                </div>
            </div>
           </div>
    </section>
    </>
    )
}

export default Reset;