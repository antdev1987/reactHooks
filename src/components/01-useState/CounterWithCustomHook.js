import useCounter from '../../hooks/useCounter'
import './counterApp.css'

const CounterWithCustomHook = ()=>{

    const {state:counter,increment,decrement,reset}=useCounter(50)

    return (
        <>
            <h1>Counter with Hook: {counter}</h1>
            <hr></hr>

            <button onClick={increment} > +1</button>
            <button onClick={reset} className='ms-2 btn-primary'>reset</button>
            <button onClick={decrement} className='ms-2'> -1</button>

        </>
    )

}

export default CounterWithCustomHook