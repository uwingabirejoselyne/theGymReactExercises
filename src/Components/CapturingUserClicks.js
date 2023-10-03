import React from 'react'

const CapturingUserClicks = () => {
    const handleButtonClick = ()=>{
        console.log('cliked');
        alert('clicked')
    }
  return (
    <div className='flex justify-center items-center pt-24'>
        <div className='w-96 h-96  pt-32'>
            <button className='p-2 border border-gray' onClick={handleButtonClick}>Click Me</button>

        </div>
    </div>
  )
}

export default CapturingUserClicks
