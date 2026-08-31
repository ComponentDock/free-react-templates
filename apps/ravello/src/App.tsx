import { Carousel } from './components/Carousel'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-ink dark:bg-gray-950 dark:text-white">
      <main>
        <Carousel />
      </main>
      <Footer />
    </div>
  )
}
