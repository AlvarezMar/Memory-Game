import styles from "./Game.module.css";
function Game(){

    return <div className={`${styles.game} ${styles.container}`}>
        <div className={styles.game_menu}>
            <p>score</p>
            <p>timer</p>
            <button>restart</button>
            <button>home</button>
        </div>
        <div className={styles.game_board}>

        </div>
        
    </div>

}

export default Game;