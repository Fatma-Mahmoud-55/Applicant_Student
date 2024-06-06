
// import img from '../../../img/student/cvfd 1.png'
// import { Link } from 'react-router-dom';
// function Stu_Final_Page(){

//     let status = localStorage.getItem("App-code");
//     return(
//         <>

//         <div className={`d-flex align-items-center h-100 justify-content-center flex-column`}>
//            <img src={img} width='357px'/>
//            <h2 className={`text-uppercase fw-bold text-primary StufinalPage mt-4 mb-2`}>Congratulations</h2>
//            <p className={`text-center w-50 stuFinalPage_p`}>
//            The application has been submitted successfully and the application number is <span className='text-danger mx-0'>({status})</span>.
//            You can find out the status of the application by entering the following link <Link to='/applicant_login'> Login</Link>
//            </p>

//         </div>
//         </>
//     )

// }
// export default Stu_Final_Page;

import './StudentForm.css';

import img from '../../../assets/image/forme 1.png'
import { Link } from 'react-router-dom';
function Stu_Final_Page() {

    let status = localStorage.getItem("App-code");
    return (
        <>
            <div className='mt-3'>
                <div className='head text-center '>
                    <h2 className='mb-3' style={{ color: '#021033' }}>The Application has been submitted successfully </h2>
                </div>
                <div className={`d-flex align-items-center h-100 justify-content-center flex-column`}>
                    <img src={img} width='357px' />
                    <h2 className='mb-3 text-center applicationNum'>
                        Application number is <br />(123456)
                    </h2>
                    <p className='mb-1 topTxt text-center'>You can find out the status of application
                        by entering the following link</p>
                </div>
            </div>


        </>
    )

}
export default Stu_Final_Page;