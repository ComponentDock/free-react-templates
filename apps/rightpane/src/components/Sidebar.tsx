import { Home, User, FileText, Settings, Send } from 'lucide-react'
import { SidebarNav } from './SidebarNav'
import { Newsletter } from './Newsletter'
import { Footer } from './Footer'

const navItems = [
  { icon: Home, label: 'Home' },
  { icon: User, label: 'About' },
  { icon: FileText, label: 'Blog' },
  { icon: Settings, label: 'Services' },
  { icon: Send, label: 'Contacts' },
]

export interface SidebarProps {
  isOpen: boolean
}

export function Sidebar({ isOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed right-0 top-0 z-40 flex h-full w-[300px] flex-col bg-gradient-to-b from-[rgba(0,180,216,0.85)] to-[rgba(0,119,182,0.9)] text-white transition-all duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/rightpane-mountain/400/800)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      data-testid="sidebar"
    >
      {/* Overlay to ensure text readability over background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(0,180,216,0.85)] to-[rgba(0,119,182,0.9)]" />

      <div className="relative flex flex-1 flex-col p-6">
        {/* Brand header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold tracking-tight">Kenitic</h1>
          <p className="mt-1 text-sm font-medium text-white/80">Blog Agency</p>
        </div>

        {/* Navigation */}
        <SidebarNav items={navItems} />

        {/* Newsletter */}
        <Newsletter />

        {/* Footer */}
        <Footer />
      </div>
    </aside>
  )
}
