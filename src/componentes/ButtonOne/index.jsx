import styles from './ButtonOne.module.css'

const ButtonOne = ({children})=>{
    return(
        <button className={styles.ButtonOne}>{children}</button>
    )
}

export default ButtonOne;