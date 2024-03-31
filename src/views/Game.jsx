import styles from "./Game.module.css";
function Game({backToHome, cards}){

    console.log(cards);

    return <div className={`${styles.game} ${styles.container}`}>
        <div className={styles.game_menu}>
            <p>score</p>
            <p>timer</p>
            <button className={styles.btn}>Restart</button>
            <button onClick={backToHome} className={styles.btn}>Home</button>
        </div>
        <div className={styles.game_board}>
            <div className={styles.card_container}>

                {cards.map((card) => (
                    <div className={styles.card} key={card.id}>
                        <div>
                            <img className={styles.front} src={card.src} alt="Front of the Card" />
                            {/* <img className={styles.back} src='../public/back.jpg' alt="Back of the Card" /> */}
                        </div>
                    </div>
                ))}
            </div>

        </div>
        
    </div>

}

export default Game;