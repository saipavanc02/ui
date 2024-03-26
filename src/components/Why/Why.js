import React from 'react';
import "./Why.css";
import { IoMdPeople } from 'react-icons/io'; 
import { FaUsers } from 'react-icons/fa';
import { MdCheckCircle, MdBusiness } from 'react-icons/md';

const Why = () => {
  return (
    <div>
      <h1>Why <span className='span-line'>Choose </span>Us?</h1>
      <div className='why-cards-container'>
        <div className='why-cards'>
        <IoMdPeople size={32} color="blue" />
        <h5>Expert Faculty</h5>
        <p>this helps you to achjhjhgjguyguygyjguygjgjgjgjyjjhgjh</p>
        </div>
        <div className='why-cards'>
        <FaUsers size={32} color="blue" />
        <h5>Complete Success Package</h5>
        <p>this helps you to achjhjhgjguyguygyjguygjgjgjgjyjjhgjh</p>
        </div>
        <div className='why-cards'>
        <MdCheckCircle size={32} color="green" /> {/* Checkmark icon */}
      <MdBusiness size={32} color="orange" />
        <h5>Placements </h5>
        <p>this helps you to achjhjhgjguyguygyjguygjgjgjgjyjjhgjh</p>
        </div>
      </div>
    </div>
  )
}

export default Why
