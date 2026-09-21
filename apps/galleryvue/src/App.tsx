import { Sidebar } from './components/Sidebar'
import { Gallery } from './components/Gallery'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Sidebar />
      <main className="ml-[20%] max-lg:ml-0">
        <Gallery />
        <Footer />
      </main>
    </div>
  )
}
