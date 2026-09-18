import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { ContactCard } from './components/ContactCard'
import { Footer } from './components/Footer'

export function App() {
  const [cardVisible, setCardVisible] = useState(true)

  useEffect(() => {
    document.title = 'ContactDrop — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-[#6a1b9a] via-[#9c27b0] to-[#ba68c8] font-sans text-ink transition-colors dark:from-[#4a148c] dark:via-[#7b1fa2] dark:to-[#9c27b0]">
      <Navbar />
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        {cardVisible ? (
          <ContactCard onClose={() => setCardVisible(false)} />
        ) : (
          <div className="rounded-lg bg-white/90 px-12 py-10 text-center shadow-lg">
            <p className="text-lg font-semibold text-ink">Thank you! We&apos;ll be in touch.</p>
            <button
              type="button"
              onClick={() => setCardVisible(true)}
              className="mt-4 text-sm font-medium text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              Send another message
            </button>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
