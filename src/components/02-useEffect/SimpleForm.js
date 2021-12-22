import { useEffect, useState } from 'react'
import Message  from './Message'
import './simpleForm.css'

const SimpleForm =()=>{

    const [formState,setFormState]=useState({
        name:'',
        email:''
    })
    const {name,email}= formState

    useEffect(()=>{
        // console.log('hey')
    },[])

    useEffect(()=>{
        // console.log('formstate cambio')
    },[formState])

    useEffect(()=>{
        // console.log('email cambio')
    },[email])


    const handleInputChange =(e)=>{
        setFormState({
            ...formState,
            [e.target.name]:e.target.value
        })
    }

    return (
        <>
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

            {(name === '123') && <Message />}
        </>
    )

}

export default SimpleForm