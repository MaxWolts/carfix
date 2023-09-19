import PropTypes from 'prop-types';
import styles from './ItemCarousel.module.css'
const ItemCarousel = ({ img, title, description }) => {
  return (
    <div className={styles.item}>
        <img src={img} alt="item image"/>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

//validation
ItemCarousel.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};

export default ItemCarousel