import { useEffect } from 'react'
import { ContactCards } from './components/ContactCards'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FormVolt — Contact Form Template'
  }, [])

  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center font-sans"
      data-testid="app-background"
    >
      {/* Nature background image */}
      <div
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(https://picsum.photos/seed/formvolt/1920/1080)' }}
      />
      <div className="fixed inset-0 -z-10 bg-white/20" />

      <main className="flex flex-1 items-center justify-center py-12">
        <ContactCards />
      </main>

      <Footer />
    </div>
  )
}
