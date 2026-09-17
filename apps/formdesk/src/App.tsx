import { useEffect } from 'react'
import { ContactForm } from './components/ContactForm'
import { SocialIcons } from './components/SocialIcons'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'FormDesk — Contact Form Template'
  }, [])

  return (
    <div className="flex min-h-screen flex-col font-sans">
      {/* Split-screen layout */}
      <main className="flex flex-1 flex-col md:flex-row">
        {/* Left panel — desk photo */}
        <div
          className="relative hidden w-full bg-cover bg-center md:block md:w-1/2 md:min-h-screen"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/formdesk-desk/1200/900)',
          }}
          data-testid="desk-photo"
          role="img"
          aria-label="Lifestyle desk photograph with laptop, coffee cup, notebook, and smartphone"
        />

        {/* Right panel — contact form */}
        <div className="flex w-full flex-col justify-center px-6 py-12 md:w-1/2 md:px-16 md:py-20">
          <h1 className="mb-8 text-3xl font-semibold text-ink">Send Us A Message</h1>
          <ContactForm />
          <div className="mt-8">
            <SocialIcons />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
