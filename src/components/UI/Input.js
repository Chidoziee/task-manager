import React from 'react'
import './Input.css'
const Input = ({type, label, onChange}) => {
  return (
    <div className='input-container'>
        <label htmlFor="">{label}:</label>
        <div className='input'>
        <input type={`${type} || button`} onChange={onChange} />
        
        </div>
    </div>
  )
}

export default Input