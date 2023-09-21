import styles from './styles.module.css'
import ww from '../../assets/testimonials/testimonials1.png'
import ford from '../../assets/testimonials/testimonials2.png'
import audi from '../../assets/testimonials/testimonials3.png'
import nissan from '../../assets/testimonials/testimonials4.png'
import honda from '../../assets/testimonials/testimonials5.png'

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
        <stron className={styles.titleSection}>Testimonials</stron>
        <h1 className={styles.bigText}>Las mejores marcas nos avalan</h1>
        <div className={styles.logoContainer}>
            <img src={ww} alt="ww logo" />
            <img src={ford} alt="ford logo" />
            <img src={audi} alt="audi logo" />
            <img src={nissan} alt="nissan logo" />
            <img src={honda} alt="honda logo" />
        </div>
    </div>
  )
}

export default Testimonials