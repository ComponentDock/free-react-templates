import { useCallback, useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { Landing } from './components/Landing'
import { SplitModal } from './components/SplitModal'
import { Footer } from './components/Footer'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Splitform — Sign-In / Sign-Up Modal Template'
  }, [])

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <div className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <Navbar />
      <main className="flex-1">
        <Landing onOpenModal={openModal} />
      </main>
      <Footer />
      <SplitModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
