import { useEffect } from "react"


const Message =()=>{

    useEffect(()=>{
        // console.log('use effect montado')

        const mouseMove = (e)=>{
            console.log('carita')
        }

        window.addEventListener('mousemove', mouseMove)

        return ()=>{
            window.removeEventListener('mousemove',mouseMove)
            // console.log('use effecte desmontaldo')
        }
    })

    console.log('solo testeando')

    return(
        <>
            <h1>renderizando este componente</h1>
        </>
    )

}

export default Message