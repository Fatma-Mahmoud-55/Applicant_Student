import * as React from 'react';
import style from './Quick.module.css';

import img from '../../img/Quick/img.png';
import { Link } from 'react-router-dom';


function Quick(){

    const [show, setShow] = React.useState(false);

    return (
   

    <div className={`${style.quick}`}>
        <img className={`${style.quickBtn} text-center`} src={img} alt="quick-img" type="button" onClick={()=>{
            setShow(!show)
        }} />
        {show && (
             <div className={`${style.quickContent}`}>
                <Link className={`${style.quickLink}`}  to="/student">student</Link>
             </div>    
            )}
          

    </div>
        
    )
}

export default Quick;

