import styles from "./Card.module.css"

function Card({cardSelected, card, flipped, disabled}){

    const handleClick = () => {
        if(!disabled){
            cardSelected(card)
        }
    }

    return <div className={styles.card} key={card.id}>
        <div className={flipped ? styles.flipped : ""}>
            <img className={styles.front} src={card.src} alt="Front of the Card" />
            <img onClick={handleClick} className={styles.back} src='../back.png' alt="Back of the Card" />
        </div>
    </div>
}

export default Card;