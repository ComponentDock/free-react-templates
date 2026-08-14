import { useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { TopBar } from './TopBar'

/* header.site-navbar — the top utility row plus the navigation row; owns
   the shared mobile-menu state (toggle in the top bar, panel in the nav,
   Escape anywhere closes it). */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (!mobileOpen) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMobileOpen(false)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [mobileOpen])

  return (
    <header>
      <TopBar mobileOpen={mobileOpen} onToggleMenu={() => setMobileOpen((open) => !open)} />
      <Navbar mobileOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
