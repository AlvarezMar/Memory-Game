import styles from "./Game.module.css";
import Card from "../componets/Card";

import { Link } from "react-router-dom";

function Game({turns, cardSelected, backToHome, shuffleCards, cards}){

    return <div className={`${styles.game} ${styles.container}`}>
        <div className={styles.game_menu}>
            <Link to='/'>
                <img src="./logo.png" alt="Game Logo" width='150px'/>
            </Link>
            
            <div className={styles.buttons}>
                <Link to='/'>
                    <button className={styles.btn}>Home</button>
                </Link>

                <button onClick={shuffleCards} className={styles.btn}>Reset</button>
            </div>

            <div className={styles.data}>
                <p>Timer:</p>
                <p>Score:</p>
                <p>Turns: {turns}</p>
            </div>
        </div>
        <div className={styles.game_board}>
            <div className={styles.card_container}>

                {cards.map((card) => (
                    <Card cardSelected={cardSelected} card={card} key={card.id}/>
                ))}
            </div>

        </div>
        
    </div>

}

export default Game;