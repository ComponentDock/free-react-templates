import { useEffect, useState } from 'react'
import { LaunchSection } from './components/LaunchSection'
import { ReviewModal } from './components/ReviewModal'
import { Footer } from './components/Footer'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'SplitModal — Product Review Modal'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900">
      <main className="flex-1">
        <LaunchSection onOpenModal={() => setIsModalOpen(true)} />
      </main>
      <Footer />
      <ReviewModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  )
}
