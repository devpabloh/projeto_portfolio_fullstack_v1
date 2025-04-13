import styles from './TechCarousel.module.css'

const TechCarousel = () => {
    const techLogos = [
        '/path/to/react-logo.png'
    ]

    return (
        <div className={styles.techCarousel}>
            <div className={styles.techSlider}>
                {[...techLogos, techLogos].map((logo, index)=>(
                    <img key={index} src={logo} alt="Tech logo" />
                ))}
            </div>

        </div>
    )
}

export default TechCarousel