import { ReactNode } from 'react'
import { cn } from '@free-react-templates/ui'
import type { View } from '../App'

interface LayoutProps {
  children: ReactNode
  menuOpen: boolean
  currentView: View
}

export function Layout({ children, menuOpen, currentView }: LayoutProps) {
  return (
    <div
      className={cn(
        'transition-transform duration-300 ease-in-out',
        menuOpen && '-translate-x-[240px]',
      )}
    >
      {/* Mobile profile banner */}
      <aside
        className="sm:hidden h-[400px] bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/selfcraft-profile/800/400)',
        }}
        role="img"
        aria-label="Profile photo"
      />

      <div className="flex min-h-screen sm:min-h-0">
        {/* Desktop profile sidebar */}
        <aside
          className="hidden sm:block sm:fixed sm:right-0 sm:top-0 sm:h-screen sm:w-1/2 bg-cover bg-center"
          style={{
            backgroundImage: 'url(https://picsum.photos/seed/selfcraft-profile/1200/800)',
          }}
          role="img"
          aria-label="Profile photo"
        />

        {/* Main content */}
        <main className="w-full sm:w-1/2 sm:pl-[7%] sm:pr-[3%] py-8 px-6 sm:py-12">
          <nav className="mb-8" aria-label="Section navigation">
            <ul className="flex gap-6 text-xs uppercase tracking-[0.2em]">
              {(['bio', 'portfolio', 'resume', 'contact'] as const).map((v) => (
                <li key={v}>
                  <button
                    className={cn(
                      'transition-colors duration-300',
                      v === currentView ? 'text-brand font-bold' : 'text-heading hover:text-brand',
                    )}
                    aria-current={v === currentView ? 'page' : undefined}
                  >
                    {v.charAt(0).toUpperCase() + v.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {children}
        </main>
      </div>
    </div>
  )
}
