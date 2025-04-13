import styles from './SectionInfo.module.css'
import { useTypewriter } from '../../hooks/useTypewriter';
import ButtonOne from '../ButtonOne';
import ButtonTwo from '../ButtonTwo';
import fotoPerfilInfor from '../../assets/Imagem-containerForm.png'
import TechCarousel from '../TechCarousel';

const SectionInfor = ()=>{
    const titleText = useTypewriter('Desenvolvedor Full-Stack')

    return (
        <>
        <section className={styles.containerSectionInfor}>
            <div className={styles.containerInformacoes}>
                    <div className={styles.informacoes}> 
                            <h1 className={`${styles.typewriter} ${styles.textSectionInfor}`}>{titleText}</h1>
                            <p>
                                Desenvolvedor Full Stack com foco em aplicações web modernas, utilizando <span className={styles.textSectionInfor}>
                                    React,
                                    TypeScript, Node.js, express, MySQL, PostgreSQL e Docker
                                </span>. Experiência prática em
                                projetos completos, desde o frontend até a modelagem de banco de dados. Apaixonado por
                                desenvolver soluções acessíveis, eficientes e com foco na experiência do usuário.
                                Conhecimento em metodologias ágeis e comprometido com boas práticas de
                                desenvolvimento e segurança.
                            </p>
                            <div className={styles.containerButtonsInfor}>
                            <ButtonOne>Currículo</ButtonOne>
                            <ButtonTwo>Contato</ButtonTwo>
                            </div>
                    </div>
                    <div className={styles.containerArt}>
                        <img src={fotoPerfilInfor} alt="" />
                    </div>
                </div>
        </section>
        <TechCarousel />
        </>
        
    )
}

export default SectionInfor;