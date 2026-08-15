import { Header } from './components/Header'
import { HeroSlider } from './components/HeroSlider'
import { BestSelling } from './components/BestSelling'
import { FeaturedWeek } from './components/FeaturedWeek'
import { LatestPublished } from './components/LatestPublished'
import { CtaBanners } from './components/CtaBanners'
import { Subscribe } from './components/Subscribe'
import { Footer } from './components/Footer'

export function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <BestSelling />
        <FeaturedWeek />
        <LatestPublished />
        <CtaBanners />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
