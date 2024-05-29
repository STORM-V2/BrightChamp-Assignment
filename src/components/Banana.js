import React from 'react'
import './banana.css'

function Banana({ color }) {
    return (
        <>
            <div>
                <div className='banana' style={{ color: color || 'grey' }}>&#127820;</div>
            </div>
        </>
    )
}

export default Banana