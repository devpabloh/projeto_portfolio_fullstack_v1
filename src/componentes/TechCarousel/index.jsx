import styles from './TechCarousel.module.css'

const TechCarousel = () => {
    const techLogos = [
        '/src/assets/carousel/git.png',
        '/src/assets/carousel/github.png', 
        '/src/assets/carousel/html.png',
        '/src/assets/carousel/css.png',
        '/src/assets/carousel/bootstrap.png',
        '/src/assets/carousel/tailwind.png',
        '/src/assets/carousel/javascript.png',
        '/src/assets/carousel/typescript.png',
        '/src/assets/carousel/react.png',
        '/src/assets/carousel/node.png',
        '/src/assets/carousel/express.png',
        '/src/assets/carousel/mysql.png',
        '/src/assets/carousel/postgres.png',
    ]

    return (
        <div className={styles.techCarousel}>
            <div className={styles.techSlider}>
                {[...techLogos, ...techLogos].map((logo, index) => (
                    <img key={index} src={logo} alt="Tech logo" />
                ))}
            </div>
        </div>
    );
};

export default TechCarousel