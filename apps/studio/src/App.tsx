import { useEffect } from 'react'
import { Hero } from './components/Hero'

export function App() {
  useEffect(() => {
    document.title = 'Studio — Creative Studio Landing'
  }, [])

  return (
    <div className="min-h-screen bg-brand font-sans text-body transition-colors">
      <main>
        <Hero />
      </main>
      <footer className="border-t border-white/10 bg-brand py-6 text-center text-[13px] text-subtext">
        <p>
          More templates at{' '}
          <a
            className="font-semibold text-accent underline-offset-4 hover:underline"
            href="https://www.componentdock.com/"
          >
            Component Dock
          </a>
        </p>
      </footer>
    </div>
  )
}
