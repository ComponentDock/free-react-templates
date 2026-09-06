import { useCallback, useEffect, useState } from 'react'
import { Landing } from './components/Landing'
import { ConsultationModal } from './components/ConsultationModal'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Communique — Free Consultation Template'
  }, [])

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Landing onOpenModal={openModal} />
      </main>
      <Footer />
      <ConsultationModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
