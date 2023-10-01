import React from 'react'

const Count = (props) => {
  return (
    <div className='flex justify-center flex-col items-center pt-64'>
        <p className='py-5'> Button has been clicked: {props.count} times</p>
        <button onClick={props.onClick} className='border border-gray p-2'>Click Me</button>
    </div>
  )
}

export default Count
