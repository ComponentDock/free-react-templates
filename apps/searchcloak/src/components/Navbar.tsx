import { Search } from 'lucide-react'

interface NavbarProps {
  onToggleSearch: () => void
}

const navLinks = ['Home', 'About', 'Contact'] as const

export function Navbar({ onToggleSearch }: NavbarProps) {
  return (
    <nav className="relative z-30 border-b border-[#dae0e5] bg-white shadow-[0_1px_5px_0_rgba(0,0,0,0.1)]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="/"
          className="py-[25px] text-2xl font-bold text-[#007bff] no-underline transition-colors duration-300 hover:text-[#0056b3]"
        >
          Brand
        </a>
        <div className="flex items-center">
          <ul className="hidden items-center gap-0 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="inline-block px-4 py-[25px] text-sm font-medium text-[#212529] no-underline transition-colors duration-300 hover:text-[#007bff]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            onClick={onToggleSearch}
            aria-label="Open search"
            className="ml-[50px] cursor-pointer border-none bg-transparent p-2 text-[#212529] transition-colors duration-300 hover:text-[#007bff]"
          >
            <Search size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}
