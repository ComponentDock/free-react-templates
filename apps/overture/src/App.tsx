import { useEffect } from 'react'
import { CountdownTimer } from './components/CountdownTimer'
import { NotifyButton } from './components/NotifyButton'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'

function getTargetDate(): string {
  const d = new Date()
  d.setDate(d.getDate() + 30)
  return d.toISOString()
}

export function App() {
  useEffect(() => {
    document.title = 'Overture — Coming Soon Template'
  }, [])

  const targetDate = getTargetDate()

  return (
    <div className="relative flex min-h-screen flex-col font-body text-white">
      {/* Background image */}
      <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/overture/1600/900')] bg-cover bg-center" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Main content — centered vertically and horizontally */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-5 py-10 text-center">
        <h1 className="font-heading text-5xl font-bold md:text-[3.5em]">Coming Soon</h1>

        <p className="mt-5 max-w-[500px] text-base leading-relaxed text-white/90">
          Our website is currently undergoing scheduled maintenance. We should be back shortly.
          Thank you for your patience.
        </p>

        <CountdownTimer targetDate={targetDate} />

        <NotifyButton />
      </main>

      {/* Social links — pinned near bottom */}
      <div className="relative z-10 pb-20">
        <SocialLinks />
      </div>

      <Footer />
    </div>
  )
}
