import React, { useRef, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './sidebar.css';
import { IconContext } from 'react-icons';

import img1 from '../../img/SideBar/presentation.png';
import img2 from '../../img/SideBar/architecture-and-city.png';
import img3 from '../../img/SideBar/progress.png';
import img4 from '../../img/SideBar/student.png';
import img5 from '../../img/SideBar/family.png';
import img6 from '../../img/SideBar/social-interaction.png';


function SideBar() {
    const [sidebar, setSidebar] = useState(false);
    const [Academics, setAcademicsToggle] = useState(false);
    const [Administration, setAdministrationToggle] = useState(false);
    const [generalSetting, setgeneralSettingToggle] = useState(false);

    // const showSidebar = () => setSidebar(!sidebar);


    const sideRef = useRef(null);


    function openSidebar() {
        sideRef.current.style.width = "230px";
    }

    function closeSidebar() {
        sideRef.current.style.width = "70px";
           setAdministrationToggle(false);
           setAcademicsToggle(false);
           setgeneralSettingToggle(false);
    }


    return (
        <>


            <IconContext.Provider value={{ color: '#fff' }}>
                <div className={sidebar ? 'side-menu active d-flex' : 'side-menu d-flex'} >

                    <div ref={sideRef} className="toggleSide " id="toggle" onMouseEnter={openSidebar} onMouseLeave={()=>{
                            closeSidebar();
                        }}>

                        <ul className='side-menu-items ps-0' >

                            <p className="ps-2 side-text">
                                <img src={img1} alt="" width={"24px"} height={"24px"} />
                                <span className='px-2 text-capitalize' onClick={() => {
                                    setAcademicsToggle(!Academics);
                                    setAdministrationToggle(false);
                                    setgeneralSettingToggle(false);
                                }}>academics</span>
                        </p>
                        {Academics && (
                                    <ul className="header3-sub-list list-unstyled">
                                        <li>
                                            <Link to="/employees">employees</Link>
                                        </li>
                                        <li>
                                            <Link to="/socialmedia">Social Account Type</Link>
                                        </li>
                                        <li>
                                            <Link to="/additionalinfosocial">additional-info-social</Link>
                                        </li>
                                        <li>
                                            <Link to="/empCategory" >Categories</Link>
                                        </li>

                                        <li>
                                            <Link to="/countries">countries</Link>
                                        </li>
                                        <li>
                                            <Link to="/departments">departments</Link>
                                        </li>
                                        <li>
                                            <Link to="/worxexp" >Work Experience</Link>
                                        </li>
                                        <li>
                                            <Link to="/contract">contract-type</Link>
                                        </li>
                                        <li>
                                            <Link to="/grades">grades</Link>
                                        </li>
                                        <li>
                                            <Link to="/jobtitle">job-title</Link>
                                        </li>
                                        <li>
                                            <Link to="/positions">positions</Link>
                                        </li>
                                        <li>
                                            <Link to="/militaryStatus">military-status</Link>
                                        </li>
                                        <li>
                                            <Link to="/martialstatus">martial-status</Link>
                                        </li>
                                        <li>
                                            <Link to="/qualification">qualifications</Link>
                                        </li>
                                        <li>
                                            <Link to="/qulificationapp">qualification-appreciation</Link>
                                        </li>
                                        <li>
                                            <Link to="/attachedkind">attached-kind</Link>
                                        </li>
                                        <li>
                                            <Link to="/additionaattach" className='lastChild'>additional-info-attach</Link>
                                        </li>

                                    </ul>
                                )}

                            <p className="ps-2 side-text">
                                <img src={img2} alt="" width={"24px"} height={"24px"} />
                                <span className='px-2 text-capitalize' onClick={() => {
                                    setAdministrationToggle(!Administration);
                                    setAcademicsToggle(false);
                                    setgeneralSettingToggle(false);
                                    }}>administration</span>
                            </p>
                            {Administration && (
                                    <ul className="header3-sub-list list-unstyled">
                                        <li>
                                            <Link to="/employees">Admission & Registration</Link>
                                        </li>
                                        <li>
                                            <Link to="/socialmedia">Human Resources</Link>
                                        </li>
                                        <li>
                                            <Link to="/additionalinfosocial">Student Affairs</Link>
                                        </li>
                                        <li>
                                            <Link to="/empCategory" >Finance</Link>
                                        </li>

                                        <li>
                                            <Link to="/countries">Transportation</Link>
                                        </li>
                                        <li>
                                            <Link to="/departments">Hostel</Link>
                                        </li>
                                        <li>
                                            <Link to="/worxexp" >Clinic</Link>
                                        </li>
                                        <li>
                                            <Link to="/contract">Inventory</Link>
                                        </li>
                                        <li>
                                            <Link to="/grades">Tasks</Link>
                                        </li>
                                        
                                    </ul>
                                )}

                            <p className="ps-2 side-text">
                                <img src={img3} alt="" className='img-fluid' />
                                <span className='px-2 text-capitalize'>reports</span>
                            </p>


                            <p className="ps-2 side-text">
                                <img src={img4} alt="" className='img-fluid' />
                                <span className='px-2 text-capitalize'>student</span>
                            </p>

                            <p className="ps-2 side-text">
                                <img src={img5} alt="" className='img-fluid' />
                                <span className='px-2 text-capitalize'>parent</span>
                            </p>


                            <p className="ps-2 side-text">
                                <img src={img6} alt="" className='img-fluid' />
                                <span className='px-2 text-capitalize'>social</span>
                            </p>



                            <p className="ps-2 side-text">
                                {/* <img src={img7} alt="" className='img-fluid img_w' /> */}
                                <img src={img6} alt="" className='img-fluid' />
                                <span className='px-2 text-capitalize' onClick={() => {
                                    setAdministrationToggle(false);
                                    setAcademicsToggle(false);
                                    setgeneralSettingToggle(!generalSetting);
                                    }}>General Setting</span>
                            </p>
                            {generalSetting && (
                                    <ul className="header3-sub-list list-unstyled">
                                        <li>
                                            <Link to="/corporate">corporate</Link>
                                        </li>
                                        <li>
                                            <Link to="/schools">schools</Link>
                                        </li>
                                        <li>
                                            <Link to="/general_branches">branches</Link>
                                        </li>
                                        <li>
                                            <Link to="/general_sections" >sections</Link>
                                        </li>

                                        <li>
                                            <Link to="/general_stages">stages</Link>
                                        </li>
                                        <li>
                                            <Link to="/general_grades">grades</Link>
                                        </li>
                                        <li>
                                            <Link to="/general_programme" >programme</Link>
                                        </li>
                                        <li>
                                            <Link to="/classes">classes</Link>
                                        </li>
                                        <li>
                                            <Link to="/groups">groups</Link>
                                        </li>
                                        

                                    </ul>
                                )}


                            {/* <p className="ps-2 side-text">

                            <img src={img1} alt="" className='img-fluid' />
                     

                        </p>
                        {Emptoggle&&(
                            <ul className="header3-sub-list list-unstyled">
                            <li>
                                <Link to="/employees">employees</Link>
                            </li>
                            <li>
                                <Link to="/socialmedia">Social Account Type</Link>
                            </li>
                            <li>
                            <Link to="/additionalinfosocial">additional-info-social</Link>
                        </li>
                        <li>
                            <Link to="/empCategory" >Categories</Link>
                        </li>

                        <li>
                            <Link to="/countries">countries</Link>
                        </li>
                        <li>
                            <Link to="/departments">departments</Link>
                        </li>
                        <li>
                            <Link to="/worxexp" >Work Experience</Link>
                        </li>
                        <li>
                            <Link to="/contract">contract-type</Link>
                        </li>
                        <li>
                            <Link to="/grades">grades</Link>
                        </li>
                        <li>
                            <Link to="/jobtitle">job-title</Link>
                        </li>
                        <li>
                            <Link to="/positions">positions</Link>
                        </li>

                        
                        <li>
                            <Link to="/militaryStatus">military-status</Link>
                        </li>
                        <li>
                            <Link to="/martialstatus">martial-status</Link>
                        </li>
                        <li>
                            <Link to="/qualification">qualifications</Link>
                        </li>
                        <li>
                            <Link to="/qulificationapp">qualification-appreciation</Link>
                        </li>
                            <li>
                            <Link to="/attachedkind">attached-kind</Link>
                        </li>
                        <li>
                            <Link to="/additionaattach" className='lastChild'>additional-info-attach</Link>
                        </li>

                        </ul>
                        )}
                        
                        <p className="side-text" onClick={() => setInstanceToggle(!Instancetoggle)}>
                            <img src={img2} alt="" className='img-fluid' />
                         
                        </p>
                        {
                            Instancetoggle && (
                                <ul className="header3-sub-list list-unstyled">
                                    <li className='pt-2'>
                                        <Link to="/instance">Instance</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/instancebranch" className='lastChild'>Branches</Link>
                                    </li>

                                </ul>
                            )
                        }

                        <p className="side-text " onClick={() => setEvaluationToggle(!EvaluationToggle)}>
                        
                            <BsFillCalendarCheckFill className='text-primary mx-2' />
                            Evaluation
                        </p>
                        {
                            EvaluationToggle && (
                                <ul className="header3-sub-list list-unstyled">

                                    <li className='pt-2'>
                                        <Link to="/category">Category</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/subcategory">Sub Category</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/evaluationElements">Evaluation Elements</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/tableapp">Periodic Reports</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/evaluateemployee" className='lastChild'>Evaluate Employee</Link>
                                    </li>
                                </ul>
                            )
                        }

                        <p className="side-text" onClick={() => setAffairsToggle(!AffairsToggle)}>
                       
                            <BsFillFileEarmarkFill className='mx-2 text-primary' />
                            student affairs
                        </p>
                        {
                            AffairsToggle && (
                                <ul className="header3-sub-list list-unstyled">
                                    <li className='pt-2'>
                                        <Link to="/Acceptance_Test">Acceptance Test</Link>
                                    </li>
                                    <li className='pt-2'>
                                        <Link to="/student_stage" className='lastChild'>Student Submission</Link>
                                    </li>

                                </ul>
                            )
                        } */}
                        </ul>
                    </div>

                </div>
            </IconContext.Provider>


        </>
    );
}

export default SideBar;
