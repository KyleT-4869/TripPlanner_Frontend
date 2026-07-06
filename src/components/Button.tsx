function Button({ buttonName="NotAssigned", onClick, className}: {buttonName?:string, onClick?: () => void, className?:string}) {
    return(
        <>
            <div>
                <button onClick={onClick} className={className}>
                    {buttonName}
                </button>
            </div>
        </>
    )
}

export default Button;