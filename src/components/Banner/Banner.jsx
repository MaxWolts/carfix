import styles from './styles.module.css'
const Banner = () => {
  return (
    <div className={styles.banner}>
        <strong className={styles.titleSection}>Nuestra misión</strong>
        <div className={styles.textContainer}>
          <h1>NUESTRA MISIÓN</h1>
          <p>En nuestro taller mecánico, nuestra misión es superar las expectativas de nuestros clientes a través de la artesanía automotriz, la atención al detalle y el compromiso constante con la calidad. 
            Nos destacamos en el mundo de la mecánica automotriz de élite, brindando resultados inigualables gracias a nuestro equipo altamente calificado y nuestro compromiso con la perfección.</p>
        </div>
        {/* <button>Ver más</button> */}
    </div>
  )
}

export default Banner