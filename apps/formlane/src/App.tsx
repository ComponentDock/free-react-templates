import { useEffect } from 'react'
import { FormCard } from './components/FormCard'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Formlane — Registration Form'
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <main
        className="flex flex-1 items-center justify-center px-4 py-16"
        style={{ background: 'linear-gradient(136deg, #009EFD 0%, #2AF598 100%)' }}
      >
        <FormCard />
      </main>
      <Footer />
    </div>
  )
}
