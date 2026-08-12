import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Sidebar } from './Sidebar'
import { Hero } from './Hero'
import { Articles } from './Articles'
import { Footer } from './Footer'

export function Layout() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <div className="min-h-screen bg-white font-sans">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="jotter-sidebar"
        aria-label="Toggle sidebar"
        className="fixed top-4 left-4 z-50 rounded p-2 text-ink transition-colors hover:bg-sidebar lg:hidden"
      >
        {open ? (
          <X className="h-7 w-7" aria-hidden="true" />
        ) : (
          <Menu className="h-7 w-7" aria-hidden="true" />
        )}
      </button>

      <div
        id="jotter-sidebar"
        data-testid="sidebar-panel"
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-[270px] transition-transform duration-300 lg:w-[25%] lg:min-w-[270px] lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Sidebar />
      </div>

      <main className="lg:pl-[25%]">
        <Hero />
        <Articles />
        <Footer />
      </main>
    </div>
  )
}
