import { useEffect, useState } from 'react'
import { LaunchSection } from './components/LaunchSection'
import { SignupModal } from './components/SignupModal'
import { Footer } from './components/Footer'

export function App() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.title = 'Gateway — Signup Form Modal'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white text-navy">
      <main className="flex-1">
        <LaunchSection onLaunch={() => setOpen(true)} />
      </main>
      <Footer />
      {open && <SignupModal onClose={() => setOpen(false)} />}
    </div>
  )
}
