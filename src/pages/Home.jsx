import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import SummaryAbout from '../components/SummaryAbout/SummaryAbout'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Carousel/>
        <SummaryAbout/>
        <Testimonials/>
    </div>
  )
}

export default Home