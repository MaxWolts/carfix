import styles from './styles.module.css'
import imgBig from '../../assets/about/us.jpg'
import imgLittle from '../../assets/about/us2.jpg'

const SummaryAbout = () => {
  return (
    <div className={styles.aboutSummary}>
        <div className={styles.leftColumn}>
            <div className={styles.textContainer}>
                <stron className={styles.aboutTitleSection}>Sobre nosotros</stron>
                <h1 className={styles.bigText}>Brindamos las mejores soluciones del mercado</h1>
                <p>En nuestro taller de autos de alta gama, la pasión por la excelencia en el servicio y la dedicación a la perfección automotriz son nuestra insignia. Confía en nosotros para cuidar de tu vehículo con la atención meticulosa que merece.</p>
            </div>
            <img src={imgLittle} alt="foto de dos tecnicos revisando un auto" />
        </div>
        <div className={styles.rightColumn}>
            <div className={styles.ourNumbers}>
                <div>
                    <span className={styles.bigText}>20+</span>
                    <span>años de experiencia</span>
                </div>
                <div>
                    <span className={styles.bigText}>483</span>
                    <span>clientes felices</span>
                </div>
                <div>
                    <span className={styles.bigText}>150+</span>
                    <span>projectos terminados</span>
                </div>
            </div>
            <img src={imgBig} alt="foto una persona reparando un auto" />
        </div>
    </div>
  )
}

export default SummaryAbout