import logo from '../../assets/logo.svg'
import styles from './styles.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div>
            <img src={logo} alt="Carfix logo" />
            <p>
                Confía en nosotros para cuidar de tu vehículo con la atención meticulosa que merece.
            </p>
        </div>
        <div className={styles.linkList}>
            <strong>Síguenos</strong>
            <ul>
                <li>
                    <a href="/">Facebook</a>
                </li>
                <li>
                    <a href="/">Instagram</a>
                </li>
                <li>
                    <a href="/">Twitter</a>
                </li>
            </ul>
        </div>
    </footer>
  )
}

export default Footer