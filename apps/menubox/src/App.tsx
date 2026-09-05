import { useEffect } from 'react'
import { ProfileButton } from './components/ProfileButton'
import { Footer } from './components/Footer'

export function App() {
  useEffect(() => {
    document.title = 'Menubox — Profile Dropdown Menu'
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-surface text-dark">
      <main className="flex flex-1 items-center justify-center px-4 py-20">
        <ProfileButton />
      </main>
      <Footer />
    </div>
  )
}
