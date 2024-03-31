import styles from "./Home.module.css"
function Home({ shuffleCards }){

    return <div className={`${styles.home} ${styles.container}`}>
        <div className={styles.home_menu}>
        <img src="./public/logos.png" alt="" width='150px'/>
        <button onClick={shuffleCards} className={styles.btn}>New Game</button>
        <h2>Object:</h2>
        <p>Flip the cards to match a picture pair</p>
        </div>

        <div className={styles.home_header}>

        </div>
    </div>

}


export default Home;