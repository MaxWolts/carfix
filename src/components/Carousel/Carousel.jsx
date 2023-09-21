import ItemCarousel from './ItemCarousel.jsx'
import { ItemData } from './data.js'
import { useState, useRef } from 'react'
import styles from './Carousel.module.css'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const refCarousel = useRef(null)
  
  const obtainItemWidth = () => {
    if (refCarousel.current) {
      return refCarousel.current.firstChild.getBoundingClientRect().width
    }
    return 0
  }
  const obtainCarouselWidth = () => {
    if (refCarousel.current) {
      return refCarousel.current.parentNode.getBoundingClientRect().width
    }
    return 0
  }

  const prevSlide = () => {
    const widthItem = obtainItemWidth()
    const newValue = currentIndex + widthItem + 16
    setCurrentIndex(newValue)
  };

  const nextSlide = () => {
    const widthItem = obtainItemWidth()
    const newValue = currentIndex - widthItem - 16
    if (isVisibleLastElement()) {
      setCurrentIndex(newValue)
    }
  };

  const isVisibleLastElement = () => {
    const carouselWith = obtainCarouselWidth()
    const itemWidth = obtainItemWidth()
    const possibleMoves = Math.round(itemWidth*5 / carouselWith) +1
    const actualMove = currentIndex / itemWidth
    if (-possibleMoves < actualMove && -actualMove < 4) {
      return 1
    }
    return 0
  }

  const translateXValue = currentIndex + 'px'

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.textContainer}>
        <h1>Nuestros Servicios</h1>
        <p>Descubra nuestros servicios de alta calidad que mantienen su vehículo en óptimas condiciones y en el camino sin problemas.</p>
      </div>
      <button className={styles.carouselBtn + ' ' + styles.prevBtn} onClick={prevSlide} disabled={currentIndex < 0? false: true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <div ref={refCarousel} style={{ transform: `translateX(${translateXValue})` }} className={styles.carousel}>
        {ItemData.map((item,index) => <ItemCarousel img={item.img} description={item.description} title={item.title} key={index}/>)}
      </div>
      <button className={styles.carouselBtn + ' ' + styles.nextBtn} onClick={nextSlide} disabled={isVisibleLastElement() || currentIndex==0 ? false: true}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>

      </button>
    </div>
  )
}

export default Carousel