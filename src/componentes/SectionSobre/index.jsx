import styles from './SectionSobre.module.css'
import { useTypewriter } from '../../hooks/useTypewriter';
import ButtonOne from '../ButtonOne';
import ButtonTwo from '../ButtonTwo';
import fotoPerfilInfor from '../../assets/Imagem-containerForm.png'
import TechCarousel from '../TechCarousel';

const SectionInfor = ()=>{
    const titleText = useTypewriter('Dev. Pablo Henrique')

    return (
        <>
        <section className={styles.containerSectionInfor}>
            <div className={styles.containerInformacoes}>
                    <div className={styles.informacoes}> 
                            <h1 className={`${styles.typewriter} ${styles.textSectionInfor}`}>{titleText}</h1>
                            <p>
                            Olá, eu sou Pablo Henrique. Minha história começa antes da pandemia. Sou formado em Administração de Empresas e Ciências Contábeis, além de ser pós-graduado em Gestão Tributária. Com essa formação, eu trabalhei em uma empresa de engenharia que prestava serviços para várias cidades de Pernambuco. Tudo mudou com a chegada da pandemia: a empresa faliu, e eu precisei me reinventar.
                            </p>
                            <p>
                            Foi aí que eu e minha mãe decidiram abrir um reservatório de água. Para economizar e oferecer preços mais baixos que a concorrência, eu ajudava o fornecedor a descarregar as águas do caminhão. Assim, conseguimos manter o negócio funcionando durante boa parte da pandemia.
                            </p>
                            <p>Nesse período, dois amigos que trabalham com tecnologia me perguntaram se eu gostaria de estudar programação, já que sempre fui apaixonado por jogos e tecnologia. Aceitei o desafio e fui apresentado ao front-end. Comecei a compartilhar essa nova jornada com clientes e amigos da área de tecnologia, e, aos poucos, mais pessoas apareceram para me apoiar nessa transição de carreira.</p>
                            
                            <p>Hoje, estou na área de tecnologia, um campo que amo demais e que me orgulha de fazer parte.</p>
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