
const FighterCard = () => {
    return (
        <div className=" my-2 flex flex-col items-center container">
            <img className=" rounded-md w-64 h-64" src="logo.png"></img>
            <div className=" px-2 bg-black text-white w-64 rounded-md">
                <h1 className="font-mono">Fighter Name</h1>
            </div>
        </div>
    )
}

export default FighterCard