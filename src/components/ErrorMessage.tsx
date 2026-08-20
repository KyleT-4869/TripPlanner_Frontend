type ErrorProps = {
    errorMessage:string
}

function ErrorMessage({errorMessage = "No errors"}: ErrorProps) {
    return(
        <div hidden>
            <h1>{errorMessage}</h1>
        </div>
    )
}

export default ErrorMessage