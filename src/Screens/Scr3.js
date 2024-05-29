import React from 'react'
import MC from '../images/monkey.png'
import './ScrStyle.css'
import './bubble.css';
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Banana from '../components/Banana';


const Scr3 = () => {

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/Scr4');
  }

  const handleBack = () => {
    navigate('/Scr2');
  }

  return (
    <>
      {/* progress bar */}
      <div className='top-bar'>
        <ProgressBar className='progressbar' striped variant="secondary" now={20} />
      </div>

      {/* progressbar banana */}
      <div className='bar-banana'>
        <Banana />
      </div>


      {/* back button */}
      <button class="arrow-button" onClick={handleBack}>
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>

      {/* yes button */}
      <button className='go-btn' onClick={handlesubmit}>Yes</button>

      {/* speech bubble */}
      <div className="cartoon-style">
        <div className="bubble-style">
          <span className="text-style">Can you help me get some?</span>
        </div>
      </div>

      <div className="mc-img" >
        <img src={MC} alt='monkey' />
      </div>

    </>
  )
}

export default Scr3