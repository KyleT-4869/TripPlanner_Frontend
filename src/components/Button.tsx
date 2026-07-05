function Button({ buttonName, onClick }: {buttonName:string, onClick: () => void}) {
    return(
        <>
            <div>
                <button onClick={onClick}>
                    {buttonName}
                </button>
            </div>
        </>
    )
}

export default Button;