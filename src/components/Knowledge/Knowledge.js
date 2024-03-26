import React from 'react';
import "./Knowledge.css"

const Knowledge = () => {
  return (
    <div>
      <h2>What will you Learn in ACCA?</h2>
      <div className='kn-cards-container'>
        <div className='kn-cards'>
            <div className='hd-cont'>
                <h4 className='hd'>Knowledge Level</h4>
            </div>
            <div className='ul-cont'>
                <ul>
                    <li>Business and Management</li>
                    <li>Management</li>
                    <li>Finance & Accounting</li>
                </ul>
            </div>
            <div className='bt-cont'>
                <p className='pt'>3 Papers</p>
            </div>
        </div>
        <div className='kn-cards'>
            <div className='hd-cont'>
                <h4 className='hd'>Skill Level</h4>
            </div>
            <div className='ul-cont'>
                <ul>
                    <li>Cooperative and business Law</li>
                    <li> Financial Management</li>
                    <li>Financial Prepartion</li>
                </ul>
            </div>
            <div className='bt-cont'>
                <p className='pt'>3 Papers</p>
            </div>
        </div>
        <div className='kn-cards'>
            <div className='hd-cont'>
                <h4 className='hd'>Professional Level</h4>
            </div>
            <div className='ul-cont'>
                <h5>Compulsory</h5>
                <ul>
                    <li>Business and Management</li>
                    <li>Management</li>
                    <li>Finance & Accounting</li>
                </ul>
            </div>
            <div className='bt-cont'>
                <p className='pt'>3 Papers</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Knowledge
