import { Header } from './components/Header'
import { Banner } from './components/Banner'
import { Featured } from './components/Featured'
import { ServiceArea } from './components/ServiceArea'
import { AmazingWorks } from './components/AmazingWorks'
import { StoryArea } from './components/StoryArea'
import { Subscription } from './components/Subscription'
import { FooterWidgets } from './components/FooterWidgets'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Banner />
      <Featured />
      <ServiceArea />
      <AmazingWorks />
      <StoryArea />
      <Subscription />
      <FooterWidgets />
      <Footer />
    </div>
  )
}
