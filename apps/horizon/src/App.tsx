import { useEffect } from 'react'
import { CountdownTimer } from './components/CountdownTimer'
import { EmailSignup } from './components/EmailSignup'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'

function getTargetDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 30)
  return d.toISOString()
}

export function App() {
  useEffect(() => {
    document.title = 'Horizon — Coming Soon Template'
  }, [])

  const targetDate = getTargetDate()

  return (
    <div className="relative flex min-h-screen flex-col font-body text-white">
      {/* Full-screen background image */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/horizon/1920/1080')] bg-cover bg-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main content — centered frame */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-10">
        {/* The "frame" — bordered box with backdrop blur */}
        <div className="w-full max-w-lg rounded-lg border border-white/80 bg-white/5 p-10 backdrop-blur-sm">
          <h1 className="text-center font-heading text-5xl font-bold md:text-[3.5em]">
            Coming Soon
          </h1>

          <p className="mx-auto mt-5 max-w-[420px] text-center text-sm leading-relaxed text-white/80">
            Our website is currently undergoing scheduled maintenance. We should be back shortly.
            Thank you for your patience.
          </p>

          <CountdownTimer targetDate={targetDate} />

          <div className="flex justify-center">
            <EmailSignup />
          </div>
        </div>

        <SocialLinks />
      </main>

      <Footer />
    </div>
  )
}
