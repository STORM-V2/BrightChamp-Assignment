// This is the First Page or the Home Screen

import React from 'react'
import MC from '../images/monkey.png'
import './ScrStyle.css'
import './bubble.css';
import { useNavigate } from 'react-router-dom';

const Scr1 = () => {

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/Scr2');
    }

    return (
        <>

            {/* start button */}
            <button className='go-btn' onClick={handlesubmit}>Start</button>

            {/* speech bubble */}
            <div className="cartoon-style">
                <div className="bubble-style">
                    <span className="text-style">Welcome Kiddo!</span>
                    <br />
                </div>
            </div>

            <div className="mc-img" >
                <img src={MC} alt='monkey' />
            </div>
        </>
    )
}

export default Scr1;