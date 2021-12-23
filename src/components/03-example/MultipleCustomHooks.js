import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks =()=>{

    const data = useFetch(`https://www.breakingbadapi.com/api/quotes/1`)
    console.log(data)


    return(
        <div>
            <h1>Custom hooks!!!</h1>
        </div>
    )

}

export default MultipleCustomHooks