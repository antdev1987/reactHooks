// import { useState } from 'react'
// import Message  from './Message'
import { useEffect } from 'react'
import useForm from '../../hooks/useForm'

import './simpleForm.css'


const SimpleForm =()=>{

   
    const [value, handleInputChange] = useForm({
        name:'',
        email:'',
        password:''
    })
    const {name,email,password}= value

    useEffect(()=>{
        console.log('you are changing email')
    },[email])


    const handleSubmit =(e)=>{
        e.preventDefault()

        console.log(value)
    }



    return (
        <form onSubmit={handleSubmit}>
            <h1>use Effect</h1>
            <hr />

            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    value={name}
                    name='name'
                    placeholder='name'
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='text'
                    value={email}
                    name='email'
                    placeholder='email'
                    onChange={handleInputChange}
                />
            </div>
            <div className='form-group'>
                <input
                    className='form-control'
                    type='password'
                    value={password}
                    name='password'
                    placeholder='***....'
                    onChange={handleInputChange}
                />
            </div>

            <button type='submit' className='btn btn-primary'>send</button>
        </form>
    )

}

export default SimpleForm