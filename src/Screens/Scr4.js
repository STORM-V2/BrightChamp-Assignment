// Instructions Screen


import React from 'react'
import { useNavigate } from 'react-router-dom';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Banana from '../components/Banana';

const Scr4 = () => {

  const navigate = useNavigate();

  const handlesubmit = (e) => {
    e.preventDefault();
    navigate('/Scr5');
  }

  const handleBack = () => {
    navigate('/Scr3');
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

      {/* play button */}
      <button className='go-btn' onClick={handlesubmit}>Play</button>

      {/* instructions */}
      <div className='instructions' >

        {/* card 1 */}
        <div className='card i-card mx-5'>
          <div className='card-container card'>
            <div className='lg card-face'>
              <div className="heart">❤</div>
            </div>
          </div>
          <div className="card-number">01</div>
          <div className="card-content">
            <div className="card-text c-1">
              <p>Select a Pink card<br />
                It has fruits<br /></p>
            </div>
          </div>
        </div>

        {/* card 2 */}
        <div className='card i-card mx-5'>
          <div className='card-container card'>
            <div className='rg card-face'>
              <div className="heart">❤</div>
            </div>
          </div>
          <div className="card-number">02</div>
          <div className="card-content">
            <div className="card-text c-2">
              <p>Select a Blue card<br />
                It has alphabets<br /></p>
            </div>
          </div>
        </div>

        {/* card 3 */}
        <div className='card i-card mx-5'>
          <div className='card-container card'>
            <div className='pink-card'>
              <div className='lg card-face'><div className="heart">❤</div></div>
            </div>
            <div className='blue-card'>
              <div className='rg card-face'><div className="heart">❤</div></div>
            </div>
          </div>
          <div className="card-number">03</div>
          <div className="card-content">
            <div className="card-text c-3">
              <p>If they're same<br />
                Its a match !<br />
                Otherwise retry :(</p>
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Scr4