import { Navbar } from './components/Navbar'
import { ContentArea } from './components/ContentArea'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <ContentArea />
      <Footer />
    </div>
  )
}
