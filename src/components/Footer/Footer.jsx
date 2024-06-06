import * as React from 'react';


import {FaFacebookSquare, FaYoutube , FaInstagram , FaLinkedin} from 'react-icons/fa';
import style from './Footer.module.css';

import img from '../../img/Footer/logo.png'

function Footer(){


  return(<>
    <div className={`${style.footerBg}  py-2 mt-auto text-center `}  >
      <div className='container mt-0'>
        {/* <div className='row justify-content-between'>
                    <div className='col-md-6'>
                        <a href='#' className='text-white text-decoration-none'>AlRowad (AITSP) 2022 All right reserved.</a>
                    </div>
                    <div className='col-md-6'>
                        <div className='d-flex justify-content-md-end align-items-center h-100'>
                        <a href='#' className='text-white text-decoration-none'><FaFacebookSquare className='me-2 text-white'/></a>
                        <a href='#' className='text-white text-decoration-none'><FaYoutube className='me-2 text-white'/></a>
                        <a href='#' className='text-white text-decoration-none'><FaInstagram className='me-2 text-white'/></a>
                        <a href='#' className='text-white text-decoration-none'><FaLinkedin className='me-2 text-white'/></a>
                        </div>
                    </div>
                </div> */}

        <div className='row '>
          <div className='col-lg-3'>
            <p className='text-white'>&copy; 2023 All right reserved.</p>
          </div>
          <div className='col-lg-3'>
            <p className='text-white'>Powerd by
              <a href='https://alrowadit.com/' target='_blank' className='text-white text-decoration-none'>
                Alrowad
              </a>
            </p>
          </div>
          <div className='col-lg-3'>
            <a href='https://alrowadit.com/' target='_blank' className='text-white text-decoration-none'>
              <img src={img} alt="Alrowad-logo" width={"85px"} height={"25px"} />
            </a>

          </div>
          <div className='col-lg-3'>
            <div className=''>
              <a href='#' className='text-white text-decoration-none'><FaFacebookSquare className='fs-4 me-3 text-white'/></a>
              <a href='#' className='text-white text-decoration-none'><FaYoutube className='fs-4 me-3 text-white'/></a>
              <a href='#' className='text-white text-decoration-none'><FaInstagram className='fs-4 me-3 text-white'/></a>
              <a href='#' className='text-white text-decoration-none'><FaLinkedin className='fs-4 me-3 text-white'/></a>
            </div>
          </div>

        </div>
      </div>
    </div>
  </>)
}


export default Footer;