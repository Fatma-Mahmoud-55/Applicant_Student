import * as React from 'react';
import style from './Home.module.css';
import img1 from '../../../img/home/img1.png';
import img2 from '../../../img/home/img2.png';
import img3 from '../../../img/home/img3.png';
import { Link } from 'react-router-dom';
function Home(){
    return(
       <div>
            <section className={`${style.home} container`}>
                <div className='d-flex justify-content-end mb-5'>
                    <Link className={` btn ${style.btnApplicant}`} to="/applicant_login">applicant login</Link>
                </div>

                <div className='row mb-5'>
                    <div className='col-lg-6'>
                        <div>
                            <h2 className={`${style.heading} mt-5`}>Qorem ipsum <br /> dolor sit amet</h2>
                            <p className={`${style.headingParag}`}>Norem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus</p>
                        </div>
                    </div>
                    <div className='col-lg-5 offset-lg-1'>
                        <div>
                            <img className={`${style.img} w-100`} src={img1}/>
                        </div>
                    </div>
                </div>

                
                <div className='row mb-5'>

                    <div className='col-lg-5 '>
                        <div>
                            <img className={`${style.img} w-100`} src={img2}/>
                        </div>
                    </div>
                    <div className='col-lg-6 offset-lg-1'>
                        <div>
                            <h2 className={`${style.heading} mt-5`}>Dorem ipsum dolor sit <br /> adipiscing elit.</h2>
                            <p className={`${style.headingParag}`}>Qorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <Link className={` btn ${style.btnApplicant}`} to="/applicantReg">apply as a student</Link>
                        </div>
                    </div>
                </div>

                <div className=''>
                    <img className={`${style.img} w-100`} src={img3}/>
                </div>


                <div className='text-center mb-5'>
                    <h2 className={`${style.heading} mt-5`}>Jorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</h2>
                    <p className={`${style.headingParag}`}>Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                    <Link className={` btn ${style.btnApplicant}`}>apply as an employee</Link>
                       
                </div>

            </section>

       </div>
       
    )
}
export default Home;