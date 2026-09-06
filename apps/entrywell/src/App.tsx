import { useState } from 'react'
import { LaunchSection } from './components/LaunchSection'
import { SignModal } from './components/SignModal'
import { Footer } from './components/Footer'

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <LaunchSection onLaunch={() => setIsModalOpen(true)} />
      <Footer />
      <SignModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
