function Button() {

    const handleClick = () => console.log("OUCH!");

    const handleClick2 = (name) => console.log(`${name} STOP clicking me !!!`)

    let count = 0;

    const handleClick3 = (name) => {
        if (count < 3) {
            count++;
            console.log(`${name} you clicked me ${count} time/s`);
        }
        else {
            console.log(`${name} Stop clicking me`);
        }
    }

    const handleClick4 = (event) => {
        event.target.textContent = "OUCH! 🤕"
    };

    return (
        <>
            <button onClick={handleClick}>Click Me 😀</button>
            <button onClick={() => handleClick2('Mahan')}>Click Me 😠</button>
            <button onClick={() => handleClick3('Mahan')}>Click Me 🤨</button>
            <button onDoubleClick={(e) => handleClick4(e)}>Click Me 😁</button>
        </>
    );


}

export default Button