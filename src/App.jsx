import { useState } from 'react'

import './App.scss'
import Form from './Form'
import CommentForm from './CommentForm'
import Comment from './Comment'

function App() {

  return (
    <>
      <h1>Forms in REACT</h1>
      <Form />
      <hr />
      {/* <CommentForm/> */}

      <Comment/>
    </>
  )
}

export default App
