import profilePic from './assets/Picture.png'

function Card() {
    return (
        //classes in jsx are "className"
        <div className="card">
            <img src={profilePic} alt="Profile Picture" width="150" height="150" className='cardImg' />
            <h2 className='card-title'>Mahan</h2>
            <p className='card-text'>I study Network & Software. My hobby is coding</p>
        </div>
    );
}

export default Card