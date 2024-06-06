import * as React from 'react'; 
import img_login from '../../img/img-login.png';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import style from './Login.module.css';
import Spinner from "react-bootstrap/Spinner";
import axiosInstance from '../../axiosConfig/instanse';
import {useState} from "react";
import swal from 'sweetalert';

function Login(){

    const navigate = useNavigate();

    const [username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [loading , setLoading]  = useState(false)
    const handleSubmit = (e) => {
        setLoading(true)
        e.preventDefault();

         axiosInstance.post('user/login/', {
            username: username,
            password: password
        }, ).then(response => {
            console.log("res",response);
             setLoading(false)

            if (response.data.usertype === 'normal_user') {
                localStorage.setItem("user" ,response.data.usertype);
                navigate('/dashboard', {replace: true});
            }
             localStorage.setItem("token", response.data.token);
        }).catch(err=>{
             setLoading(false)
             swal("username and password is faild!", "You clicked the button!", "error")
         })
    };

    return(
        <>
        <section className={`${style.section} d-flex justify-content-center align-items-center pt-4 mt-5`}>
        <div className={` ${style.loginBox} w-75 d-flex align-items-center `}>
            <div className={`row  p-0  m-0 `}>
               <div className={` p-o m-0  col-lg-6`}>
                    <div className={` px-2 m-0 overflow-hidden d-flex align-items-center ${style.imgBox} `}>
                        <img width='100%'className={`${style.login_img}`} src={img_login} alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 p-0  row align-items-center">
                    <div className={`pb-5 mx-2 form col-12  rounded text-start  ${style.textBox}` }>
                        <h4 className=" text-capitalize text-primary fw-bold">Sign in </h4>
                        
                        <form method="POST" onSubmit={handleSubmit} className=" w-100 my-3 m-auto">
                          
                            <label className={`${style.text}   my-2  `}>Username</label>
                            <input name="username" className=" form-control mb-3" type="text"
                                   placeholder="Enter Your Username" 
                                    required autoFocus 
                                   
                                    onChange={e => setName(e.target.value.toLowerCase())} />
                           
                            <label className={`${style.text} my-2 `}>Password</label>
                            <input name="password" className="form-control mb-3"
                                   type="password" placeholder="******"
                                   onChange={e => setPassword(e.target.value)}
                                   required
                                   autoComplete="current-password" />

                       
                            <div className=" d-flex justify-content-between mb-2 w-100">
                                <label>
                                    <input type="checkbox" className='m-2'/>
                                    Remember me
                                </label>
                                <Link className={`fw-bold text-decoration-none  `} to="/password_recovery">Forgot Password?</Link>

                            </div>
                            <button type="submit" value="login" className={`btn btn-primary form-control btn  mt-5 w-100`}>
                                {loading ? (
                                    <Spinner
                                        animation="border"
                                        role="status"
                                        className="container d-flex align-items-center justify-content-center"
                                    >
                                        <span className="visually-hidden ">Loading...</span>
                                    </Spinner>
                                ) : (
                                    <span>Login</span>
                                )}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
           </div>
    </section>
    </>
    )
}

export default Login;