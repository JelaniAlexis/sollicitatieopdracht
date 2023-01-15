import RijksmuseumImage from '../../assets/Rijksmuseum.webp'
import './Home.scss'

const Home = () => {

    return (
        <div className="home">
            <div className="home__imgContainer">
                <img src={RijksmuseumImage} alt="Het Rijksmuseum in Amsterdam." className="home__img" />
            </div>
        </div>
    )
}

export default Home
