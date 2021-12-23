import { useEffect } from "react"
import { useState } from "react/cjs/react.development"


const useFetch =(url)=>{

    const [state,setState] =useState({loading:true,data:null,error:null})

    useEffect(()=>{
        fetching()
    },[url])


    const fetching =async()=>{
        const resp = await fetch(url)
        const data = await resp.json()

        setState({
            loading:false,
            error:null,
            data
        })

    }

    return state 
}

export default useFetch