import { useState, useEffect } from 'react'
import { cn } from '@free-react-templates/ui'
import {
  Home,
  User,
  Briefcase,
  Code2,
  GraduationCap,
  Clock,
  FolderOpen,
  PenTool,
  Mail,
  Sun,
  Moon,
} from 'lucide-react'
import { FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon } from './SocialIcons'

interface SidebarProps {
  darkMode: boolean
  onToggleDark: () => void
  activeSection: string
}

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'about', label: 'About', icon: User },
  { id: 'services', label: 'Services', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Clock },
  { id: 'work', label: 'Work', icon: FolderOpen },
  { id: 'blog', label: 'Blog', icon: PenTool },
  { id: 'contact', label: 'Contact', icon: Mail },
]

const socialLinks = [
  { icon: FacebookIcon, label: 'Facebook', href: '#' },
  { icon: TwitterIcon, label: 'Twitter', href: '#' },
  { icon: InstagramIcon, label: 'Instagram', href: '#' },
  { icon: LinkedinIcon, label: 'LinkedIn', href: '#' },
]

export function Sidebar({ darkMode, onToggleDark, activeSection }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="fixed top-4 left-4 z-50 rounded-lg bg-brand p-2 text-white shadow-lg lg:hidden"
        aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
      >
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {mobileOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/50 lg:hidden"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          'fixed left-0 top-0 z-40 flex h-full w-[250px] flex-col border-r border-border bg-bg-primary p-6 transition-transform duration-300',
          'lg:translate-x-0',
          mobileOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        {/* Avatar */}
        <div className="mb-4 flex flex-col items-center">
          <img
            src="https://picsum.photos/seed/jockford-avatar/120/120"
            alt="Ford Jock"
            className="mb-3 h-[100px] w-[100px] rounded-full border-4 border-brand object-cover"
          />
          <h2 className="text-lg font-bold text-text-primary">Ford Jock</h2>
          <p className="text-sm text-text-muted">UI/UX Designer</p>
        </div>

        {/* Navigation */}
        <nav className="mb-6 flex-1">
          <ul className="space-y-1">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    'flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors',
                    activeSection === item.id
                      ? 'bg-brand/10 text-brand'
                      : 'text-text-secondary hover:bg-bg-secondary hover:text-text-primary',
                  )}
                >
                  <item.icon className="h-4 w-4" />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social links */}
        <div className="mb-4 flex justify-center gap-3">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-bg-secondary text-text-muted transition-colors hover:bg-brand hover:text-white"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>

        {/* Dark mode toggle */}
        <button
          onClick={onToggleDark}
          className="flex items-center justify-center gap-2 rounded-md border border-border px-3 py-2 text-sm text-text-secondary transition-colors hover:border-brand hover:text-brand"
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>

        {/* Footer */}
        <p className="mt-4 text-center text-xs text-text-muted">
          &copy; {new Date().getFullYear()} Ford Jock
        </p>
      </aside>
    </>
  )
}
