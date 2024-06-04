import React, { useState } from 'react'

function Form() {

    let [formData, setFormData] = useState({
        fullName: '',
        userName: ''
    });
    
    let handleFormChange = (event)=>{

        setFormData((currData)=>{
            return { 
                ...currData, [event.target.name]: event.target.value 
            };
        })
    }

    let handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formData)
        setFormData({
            fullName: '',
            userName: ''
        });
    }


  return (
    <div className='form'>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Full Name</label><br />
            <input 
            type="text" 
            name="fullName" 
            id='name'
            placeholder="Name" 
            value={formData.fullName}
            onChange={handleFormChange}
            />
            <br />
            <label htmlFor="userName">User Name</label><br />
            <input 
            type="text" 
            name="userName" 
            id='userName'
            placeholder="User Name" 
            value={formData.userName}
            onChange={handleFormChange}
            />
            <br />
            
            <br />
            <button>Submit</button>
        </form>

    </div>
  )
}

export default Form