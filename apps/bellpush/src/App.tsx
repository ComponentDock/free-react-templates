import { useCallback, useEffect, useState } from 'react'
import { LaunchSection } from './components/LaunchSection'
import { NewsletterModal } from './components/NewsletterModal'
import { Footer } from './components/Footer'

export function App() {
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    document.title = 'Bellpush — Newsletter Modal Template'
  }, [])

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors dark:bg-gray-950 dark:text-white">
      <main className="flex-1">
        <LaunchSection onOpenModal={openModal} />
      </main>
      <Footer />
      <NewsletterModal open={modalOpen} onClose={closeModal} />
    </div>
  )
}
