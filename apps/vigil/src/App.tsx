import { useEffect } from 'react'
import { CountdownTimer } from './components/CountdownTimer'
import { SocialLinks } from './components/SocialLinks'
import { Footer } from './components/Footer'

const targetDate = new Date()
targetDate.setDate(targetDate.getDate() + 30)

export function App() {
  useEffect(() => {
    document.title = 'Vigil — Coming Soon Template'
  }, [])

  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <img
        src="https://picsum.photos/seed/vigil/1600/900"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" aria-hidden="true" />

      {/* Content area with inner shadow */}
      <div className="relative z-10 mx-auto max-w-3xl px-5 py-[30px] shadow-[2px_5px_30px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col items-center gap-6 text-center">
          <h1
            className="text-[3.5em] font-bold leading-tight text-white max-md:text-[2.8em]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Coming Soon
          </h1>

          <p className="max-w-[500px] text-base leading-relaxed text-white/90">
            Our website is currently undergoing scheduled maintenance. We should be back shortly.
            Thank you for your patience.
          </p>

          <CountdownTimer targetDate={targetDate} />

          <button
            className="mt-2 rounded-[50px] border-2 border-brand-pink bg-brand-pink px-[35px] py-[13px] text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-transparent hover:text-brand-pink"
            type="button"
          >
            Notify Us
          </button>
        </div>
      </div>

      {/* Social links at bottom */}
      <div className="absolute bottom-12 z-10 w-full">
        <SocialLinks />
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 z-10 w-full">
        <Footer />
      </div>
    </div>
  )
}
