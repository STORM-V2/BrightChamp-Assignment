import React from 'react';
import MC from '../images/monkey.png';
import './ScrStyle.css';
import './bubble.css';
import { useNavigate } from 'react-router-dom';


const Scr2 = () => {

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/Scr3');
  }

  const handleBack = () => {
    navigate('/Scr1');

  }

  return (
    <>

      {/* back button */}
      <button class="arrow-button" onClick={handleBack}>
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </button>

      {/* next button */}
      <button className='go-btn' onClick={handlesubmit}>Next</button>

      {/* speech bubble */}
      <div className="cartoon-style">
        <div className="bubble-style">
          <span className="text-style">Hi I'm Mizo! <br />and I love bananas</span>
        </div>
      </div>

      <div className="mc-img" >
        <img src={MC} alt='monkey' />
      </div>

    </>
  );
}

export default Scr2;