import { cn } from '@free-react-templates/ui'

const tabs = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'portfolio', label: 'Portfolio' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
] as const

interface HeaderProps {
  activeTab: string
  onNavigate: (tab: string) => void
}

export function Header({ activeTab, onNavigate }: HeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 flex h-[97px] w-full items-center bg-white px-10 shadow-sm transition-all">
      <div className="mr-8 text-3xl font-extrabold text-brand-dark">
        Visage<span className="text-brand">.</span>
      </div>
      <nav className="flex flex-1">
        <ul className="flex">
          {tabs.map((tab) => (
            <li key={tab.id}>
              <button
                onClick={() => onNavigate(tab.id)}
                className={cn(
                  'px-6 py-4 text-sm font-normal text-white transition-colors',
                  activeTab === tab.id ? 'bg-brand' : 'bg-brand-dark hover:bg-brand',
                )}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <a
        href="#"
        className="ml-auto flex h-14 items-center bg-brand px-6 text-sm font-normal text-white transition-colors hover:bg-brand-dark"
      >
        Available for freelance work
      </a>
    </header>
  )
}
