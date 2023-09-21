import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import Carousel from '../components/Carousel/Carousel'
import SummaryAbout from '../components/SummaryAbout/SummaryAbout'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <Carousel/>
        <SummaryAbout/>
    </div>
  )
}

export default Home