import React, { useState } from 'react'
import { useFormik } from 'formik';

function CommentForm({addNewComment}) {

    let [formData, setFormData] = useState({
        username: '',
        remarks: '',
        rating: ''

    })

    let formSubmitHandler = (event)=>{
        event.preventDefault();
        console.log(formData)
        addNewComment(formData);
        setFormData({
            username: '',
            remarks: '',
            rating: ''
        })
        
    }

    let handleFormChange = (event)=>{
        setFormData((currData)=>{
            return { 
                ...currData, [event.target.name]: event.target.value 
            };
        })
    }

  return (
    <div className='form' onSubmit={formSubmitHandler}>
        <h3>Give a Comment!</h3>
        <br />
        <form action="">
            <label htmlFor="username">Enter your full name</label>
            <br />
            <input 
            type="text" 
            placeholder='username' 
            name='username'
            id='username' 
            onChange={handleFormChange}/>
            <br />
            <label htmlFor="remarks">Enter Your Remarks</label>
            <br />
            <textarea 
            name="remarks" 
            id="remarks" 
            placeholder='Enter yout thoughts about this product'
            onChange={handleFormChange}>
            </textarea>
            <br />

            <label htmlFor="rating">Give Rating 0 - 5</label>
            <br />
            <input 
            type="number" 
            min={0} 
            max={5} 
            placeholder='rating' 
            name='rating' 
            id='rating'
            onChange={handleFormChange}/>
            <br />

            <button>Submit</button>
        </form>
        <br />
        <hr />
        <br />
    </div>
  )
}

export default CommentForm;