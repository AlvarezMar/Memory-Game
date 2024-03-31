import styles from "./Footer.module.css"

function Footer(){

    return <div className={`${styles.footer} ${styles.container}`}>
        <p>Made with JavaScript by Juan Carlos Alvarez. 2024.</p>
    </div>
}

export default Footer;