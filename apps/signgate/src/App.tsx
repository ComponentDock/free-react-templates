import { useState, useRef } from 'react'
import { LaunchSection } from './components/LaunchSection'
import { SignUpModal } from './components/SignUpModal'
import { Footer } from './components/Footer'

export function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const triggerRef = useRef<HTMLButtonElement>(null)

  return (
    <div
      className="flex min-h-screen flex-col bg-gray-50 text-gray-900 transition-colors"
      style={{ fontFamily: "'Roboto', sans-serif", color: '#b3b3b3' }}
    >
      <main className="flex-1">
        <LaunchSection onOpen={() => setIsModalOpen(true)} triggerRef={triggerRef} />
      </main>
      <SignUpModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        triggerRef={triggerRef}
      />
      <Footer />
    </div>
  )
}
