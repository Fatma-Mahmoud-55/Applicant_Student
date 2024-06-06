import  './Navbar.css';
import { ThemeProvider , createGlobalStyle } from "styled-components";
import style from 'styled-theming';
import useTheme from './useTheme';
import styled from "styled-components";
import axiosInstance from '../../axiosConfig/instanse';
import{AiOutlineUser} from 'react-icons/ai';
import logo from "../../img/student/ALROWADD 1.png";
import {FiSearch} from 'react-icons/fi';
import {BsFillCaretDownFill, BsMoonStarsFill ,BsFillSunFill} from 'react-icons/bs';
import {TfiWorld} from 'react-icons/tfi';
import {FaUserCircle} from'react-icons/fa';
import { useState , useEffect } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import { FaBell } from 'react-icons/fa';

const getBackground = style('mode' , {
    light :'#fff',
    dark :'#282c34'
});

const getforeground = style('mode' , {
    light :'#282c34',
    dark :'#fff'

});
const getNavColor = style('mode' , {
    light :'#0242FF',
    dark :'#fff'

});
const GlobalStyle = createGlobalStyle`
body{
    background-color:${getBackground};
    color:${getforeground} 
}
label , p  {
    color:${getforeground} !important;
}
.nav-link ,.side-text{
    color:${getNavColor} !important;

}
.navbar , .toggleSide{
    background-color:${getBackground};
    color:${getforeground} 
}

`;

const Toggle = styled.a`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    font-size:20px;
    color: ${getforeground} !important;
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;
function Navbar(){


    let textColor =document.querySelectorAll('.textMode');
    const navigate = useNavigate();
    let token = localStorage.getItem('token');

    const [ loggedin , setLoggedin] = useState(false);
    const theme  = useTheme();
    const icon = theme.mode === "dark" ?  <BsFillSunFill  style={{color:"#002AB7"}} />: <BsMoonStarsFill style={{color:"#002AB7"}} />;

    function changeTheme() {
        if (theme.mode ==='dark') {
            for (let i = 0; i < textColor.length; i++) {
                textColor[i].style.color = "#001765";
              }
            theme.setTheme({mode:'light'});
            document.getElementById('nav').style.borderBottom ='1px solid rgba(225,225,225,0.5)';
        } else {
            theme.setTheme({mode:'dark'});
            for (let i = 0; i< textColor.length; i++) {
                textColor[i].style.color = "#fff";
              }
            document.getElementById('nav').style.borderBottom ='1px solid rgba(0,0,0,.5';
        }
    };

 async function handleLogin() {
    if(!loggedin){
    
     window.location.pathname='/login';
    }
    else {
        await axiosInstance.post("user/logout/",{
            token: token,
          }
          ,
            {
              headers: {
               "Authorization" : `Token ${token}`
             }}
             ).then(res=>{
            // console.log(res);
            if(res.data.success){
              navigate('/', {replace: true});
              setLoggedin(false)
              localStorage.removeItem('token');
              
            }
  
          }).catch(error => {
              console.log(error);
          });
       
    }
 } 


/***************************************check if user login before or not ***********************/
    async function check(){
        axiosInstance.post('user/check/' ,{
            token: token
        }).then(res=>{

            console.log('ee',res.data)
            // setLoggedIn(res.data)
            // setUrll(res.data.urll)

        }).catch(err => {
            console.log(err);
                })
    }
      useEffect(() => {
        if(token){

            setLoggedin(true);
        }
        else{
            setLoggedin(false);
        }
        
        check();
       
      },[token]);
    return(<>
    <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <nav id='nav' className='navbar navbar-expand-lg fixed-top shadow-sm  rounded-bottom px-4'>
                <Link className="navbar-brand text-white w-10 " to="/">
                    {/*<img src={logo? 'logo' : 'sadsadas'} className="ms-2"/>*/}
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse text-center" id="navbarSupportedContent" >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className='nav-link font-weight-bold mx-2'  aria-current="page" to="/dashboard/Academics" >Academics</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold mx-2" to="/dashboard/Administration">Administration</Link>
                            </li>
                            
                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold mx-2" to="/dashboard/reports">reports</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold mx-2" to="/dashboard/student">student</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold mx-2" to="/dashboard/parent">parent</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link font-weight-bold mx-2" to="/dashboard/social">social</Link>
                            </li>
                 
                </ul>
                <div className="input-group w-50 m-auto ">
                    <span className="input-group-text text-primary " id="basic-addon1"><FiSearch className='search-navbar'/></span>
                    <input type="text" className="form-control input-group-text bg-white text-center" placeholder="search" aria-label="search" aria-describedby="basic-addon1"/>
                </div>

                
                <div className='d-flex justify-content-end w-20 m-auto'>


                    <div className='mx-1 d-flex align-items-center'>
                         <FaBell style={{color:"#002AB7"}}  className='navIcon' />
                    </div>

                    <div className='mx-1 d-flex align-items-center'>
                        <Toggle onClick={changeTheme} className=' d-flex align-items-center justify-content-center'>
                            {icon}
                        </Toggle>
                    </div>

                    <div className='mx-2 d-flex align-items-center'>
                        <TfiWorld style={{color:"#002AB7"}} className='navIcon'/>
                        <BsFillCaretDownFill style={{color:"#002AB7"}}  className='navIconArrow' />
                    </div>

                    <div className='mx-2 d-flex align-items-center'>
                        <FaUserCircle style={{color:"#002AB7"}}  className='navIcon'/>
                    </div>
                    <button style={{color:"#002AB7"}} onClick={handleLogin} className='d-flex align-items-center p-0 m-0 fw-bold'>
                    
                      {loggedin? 'Logout' : 'Login'}
                        
                    </button>
                    
                </div>
                
            </div>
        </nav>
        </ThemeProvider>
    </>
    )
  
    
}


export default Navbar;