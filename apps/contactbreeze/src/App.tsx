import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'ContactBreeze — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans" data-testid="app-background">
      {/* Full-page gradient background: cyan → magenta */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: 'linear-gradient(to right, #00d2ff, #ff00ff)',
        }}
      />

      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <ContactForm />
      </main>

      <Footer />
    </div>
  )
}
