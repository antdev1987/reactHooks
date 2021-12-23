import useFetch from '../../hooks/useFetch'
import useCounter from '../../hooks/useCounter'

const MultipleCustomHooks = () => {

    const { state: counter, increment } = useCounter(1)
    const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`)

    // let {author,quote} = data[0]
    let author;
    let quote;
    let render;



    if (data !== null) {
        author = data[0].author
        quote = data[0].quote

        render =
            <>
                <blockquote className='blockquote text-right'>
                    <p className='mb-0'>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
                <button onClick={increment} className='btn btn-primary'>Next</button>
            </>
    }


    if (loading) {
        render =
            <div className='alert alert-info text-center'>
                Loading...
            </div>
    }

    return (
        <div>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {render}

        </div>
    )

}

export default MultipleCustomHooks