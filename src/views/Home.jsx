import styles from "./Home.module.css"
import { Link } from "react-router-dom";

function Home({setAuthorized, shuffleCards }){
    const handleClick = () => {
        setAuthorized(true);
            shuffleCards();
    }

    return <div className={`${styles.home} ${styles.container}`}>
        <div className={styles.home_menu}>
            <Link to='/'>
                <img className={styles.logo} src="./logo.png" alt="Game Logo"/>
            </Link>

            <Link to='/game'>
                <button onClick={handleClick} className={styles.btn}>New Game</button>
            </Link>
            
            <h2>Objective:</h2>
            <p>Flip the cards to match a picture pair.</p>

        </div>

        
        <div className={styles.socials}>
            <img src="./socials/linkedin.svg" alt="LinkedIn Logo" width='35px' />
            <a href="https://github.com/AlvarezMar" target="_blank">
                <img src="./socials/github.svg" alt="Github Logo" width='35px' />
            </a>
            <img src="./socials/instagram.svg" alt="Instagram Logo" width='35px' />
        </div>
    </div>

}


export default Home;