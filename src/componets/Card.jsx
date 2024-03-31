import styles from "./Card.module.css"

function Card({cardSelected, card}){

    const handleClick = () => {
        cardSelected(card)


    }

    return <div className={styles.card} key={card.id}>
        <div>
            <img className={styles.front} src={card.src} alt="Front of the Card" />
            <img onClick={handleClick} className={styles.back} src='../back.jpg' alt="Back of the Card" />
        </div>
    </div>


}

export default Card;