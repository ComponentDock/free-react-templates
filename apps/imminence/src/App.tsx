import { useEffect } from 'react'
import { LeftPanel } from './components/LeftPanel'
import { RightPanel } from './components/RightPanel'
import { Footer } from './components/Footer'

const DEFAULT_TARGET = new Date('2030-01-01T00:00:00')

export function App() {
  useEffect(() => {
    document.title = 'Imminence — Coming Soon'
  }, [])

  return (
    <div className="relative h-screen overflow-hidden bg-white font-sans text-body">
      <LeftPanel targetDate={DEFAULT_TARGET} />
      <RightPanel />
      <Footer />
    </div>
  )
}
