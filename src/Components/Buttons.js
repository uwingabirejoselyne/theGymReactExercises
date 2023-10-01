import React from 'react'

const Buttons = (props) => {
    const handleClick = () => {
        alert(`Button ${props.buttonNumber} clicked!`);
      }
    
  return (
    <div className=' flex justify-center items-center pt-32'>
      <button onClick={handleClick} className='p-2 border border-gray'>Button {props.buttonNumber}</button>
    </div>
  )
}

export default Buttons
