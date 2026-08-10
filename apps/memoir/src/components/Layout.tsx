import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { Sidebar } from './Sidebar'
import { BlogList } from './BlogList'
import { Pagination } from './Pagination'
import { Widgets } from './Widgets'

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
    <div className="relative min-h-screen bg-white font-sans text-body-900">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-controls="memoir-sidebar"
        aria-label="Toggle sidebar"
        className="fixed top-4 left-4 z-50 rounded p-2 text-ink-900 transition-colors hover:bg-soft-100"
      >
        {open ? (
          <X className="h-7 w-7" aria-hidden="true" />
        ) : (
          <Menu className="h-7 w-7" aria-hidden="true" />
        )}
      </button>

      <div
        id="memoir-sidebar"
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-80 max-w-[85vw] transition-transform duration-300 lg:translate-x-0',
          open ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Sidebar />
      </div>

      <main className="lg:pl-80">
        <div className="flex flex-col gap-12 px-6 py-20 sm:px-10 lg:flex-row lg:px-12">
          <div className="min-w-0 flex-1">
            <BlogList />
            <Pagination />
          </div>
          <div className="w-full shrink-0 lg:w-80 xl:w-96">
            <Widgets />
          </div>
        </div>
      </main>
    </div>
  )
}
