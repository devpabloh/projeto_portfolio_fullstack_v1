import styles from './ButtonTwo.module.css'

const ButtonTwo = ({children})=>{
    return(
        <button className={styles.ButtonTwo}>{children}</button>
    )
}

export default ButtonTwo;