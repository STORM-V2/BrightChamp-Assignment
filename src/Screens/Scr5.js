import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Banana from '../components/Banana';
import CardGame from '../components/CardGame';

const Scr5 = () => {
  const [progress, setProgress] = useState(0);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/Scr4');
  }

  const handleMatch = () => {
    const newProgress = progress + 100 / 6;
    if (newProgress >= 100) {
      navigate('/Scr6');
    } else {
      setProgress(newProgress);
    }
  }

  return (
    <>
      {/* Progress Bar */}
      <div className='top-bar'>
        <ProgressBar className='progressbar' striped variant="warning" now={progress} />
      </div>

      {/* Progress Bar Banana */}
      <div className='bar-banana'>
        <Banana />
      </div>

      {/* Back Button */}
      <button className="arrow-button" onClick={handleBack}>
        <i className="fa fa-arrow-left" aria-hidden="true"></i>
      </button>

      {/* Game */}
      <CardGame onMatch={handleMatch} />
    </>
  )
}

export default Scr5;