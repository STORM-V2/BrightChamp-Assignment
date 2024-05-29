// This is the final screen on game completion

import React from 'react'
import MC from '../images/monkey.png'
import './ScrStyle.css'
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Banana from '../components/Banana';

const Scr6 = () => {

    const navigate = useNavigate();

    const handlesubmit = (e) => {
        e.preventDefault();
        navigate('/Scr1');
    }

    const handleBack = () => {
        navigate('/Scr4');
    }

    return (
        <>

            {/* progress bar */}
            <div className='top-bar'>
                <ProgressBar className='progressbar' striped variant="warning" now={100} />
            </div>

            {/* progressbar banana */}
            <div className='bar-banana'>
                <Banana />
            </div>

            {/* back button */}
            <button className="arrow-button" onClick={handleBack}>
                <i className="fa fa-arrow-left" aria-hidden="true"></i>
            </button>

            {/* hand banana */}
            <div className='hand-banana'>
                <Banana />
            </div>

            {/* screen bananas */}
            <div className="banana-1" ><Banana /></div>
            <div className="banana-2" ><Banana /></div>
            <div className="banana-3" ><Banana /></div>
            <div className="banana-4" ><Banana /></div>
            <div className="banana-5" ><Banana /></div>
            
            

            {/* speech bubble */}
            <div className="cartoon-style">
                <div className="bubble-style">
                    <span className="text-style">Thank you for these 6 Bananas ❤</span>
                </div>
            </div>


            {/* yes button */}
            <button className='go-btn'  onClick={handlesubmit}>Play Again</button>

            <div className="mc-img" >
                <img src={MC} alt='monkey' />
            </div>

        </>
    )
}

export default Scr6