import { useEffect } from 'react'
import { RegVault } from './components/RegVault'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'RegVault — Event Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-br from-gradient-start to-gradient-end">
      <main className="flex flex-1 items-center justify-center px-4 py-12">
        <RegVault />
      </main>
      <Footer />
    </div>
  )
}
