function PFP() {
    const imageURL = './src/assets/picture.png';

    const handleClick = (e) => {
        e.target.style.display = "none";
    };

    return (
        <img
            onClick={handleClick}
            src={imageURL}
            alt="Profile"
            height={200}
            width={200}
        />
    );
}

export default PFP;
