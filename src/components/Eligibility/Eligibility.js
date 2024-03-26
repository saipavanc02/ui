import React from 'react';
import "./Eligibility.css";
import { FaTicketAlt } from 'react-icons/fa'; 
import { MdAccessTime } from 'react-icons/md';
import { MdAssignment } from 'react-icons/md';
import { MdEvent } from 'react-icons/md';

const Eligibility = () => {
  return (
    <div className='eg-container'>
      <div className='eg-cards'>
        <h4 className='eg-heading'>Levels</h4>
        <div className='alignments'>
        <FaTicketAlt size={20} color="black" />
        <span> Three(13 papers)</span>
        </div>
      </div>
      <div className='eg-cards'>
      <h4>Duration</h4>
        <div className='alignments'>
        <MdAccessTime size={20} color='black'/>
        <span> 6-18 months</span>
        </div>
      </div>
      <div className='eg-cards'>
      <h4>Exams</h4>
        <div className='alignments'>
        <MdAssignment size={20} color='black'/>
        <span> Quantitive (Online)</span>
        </div>
      </div>
      <div className='eg-cards'>
      <h4>Excemptions</h4>
        <div className='alignments'>
        <MdEvent size={20} color='black'/>
        <span> Upto 9 papers</span>
        </div>
      </div>
    </div>
  )
}

export default Eligibility
