function Result({result, func}){
    return(
        <div className="result">
            <p>{result}</p>
            <button onClick={func}>PLAY AGAIN</button>
        </div>
    )
}

export default Result