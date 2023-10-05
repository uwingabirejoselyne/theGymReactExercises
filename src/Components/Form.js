import React from 'react'

const Form = () => {
  
  const [formData,setForm] =React.useState({
    firstName:'',
    lastName:'',
    
})
const  getFormData=(event)=>{
    const {name,value}=event.target
     setForm(preFormData =>{
        return{
            ...preFormData,
            [name]: value
            
        }

    })
}
const handleSubmit =(event)=>{
    event.preventDefault()
    alert(`Hello ${formData.firstName} ${formData.lastName} !`)
    setForm({
      firstName: '',
      lastName: '',
    });
  }
  return (
    <div className='w-1/2 flex justify-center items-center pt-32'>
      <form className="form flex flex-col space-y-5" onSubmit={handleSubmit} >
      <input 
          type="text" 
          placeholder="Email address"
          className="form--input border border-gray"
          name='firstName'
          value ={formData.firstName}
          onChange={getFormData}
          
      />
      <input 
          type="text" 
          placeholder="lastName"
          className="form--input border border-gray"
          name="lastName"
          value ={formData.lastName}
          onChange={getFormData}

          
      />
     
      <button className="form--submit px-24 py-3 bg-red-500" type='submit'>
          Greet Me
      </button>
  </form>
    </div>
  )
}

export default Form

