import {useState} from 'react'

const useForm =(initial ={})=>{

    const [value ,setValue] = useState(initial)

    const handleInputChange =(e)=>{

        setValue({
            ...value,
            [e.target.name]: e.target.value
        })

    }


    return [value, handleInputChange]


}

export default useForm