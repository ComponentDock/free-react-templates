import { useEffect } from 'react'
import { EmailSignup } from './components/EmailSignup'
import { CountdownTimer } from './components/CountdownTimer'
import { SocialIcons } from './components/SocialIcons'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Signal — Coming Soon Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col font-body text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/signal-bg/1920/1080')] bg-cover bg-center" />

      {/* Gradient overlay — blue-to-pink at 0.7 opacity */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(-9deg, #6a82fb 0%, #6a82fb 40%, #fc5c7d 100%)',
          opacity: 0.7,
        }}
      />

      {/* Main content — centered vertically and horizontally */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <h1 className="font-heading text-5xl font-bold md:text-[3.5em]">Comming Soon</h1>

        <p className="mt-5 max-w-[500px] text-lg leading-relaxed opacity-90">
          Our website is currently undergoing scheduled maintenance. We should be back shortly.
          Thank you for your patience.
        </p>

        <EmailSignup />

        <CountdownTimer targetDate="2027/01/01" />

        <SocialIcons />
      </main>

      <Footer />
    </div>
  )
}
