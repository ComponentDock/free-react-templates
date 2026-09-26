import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="relative px-10 pt-8 pb-5">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-dark-teal">Enigma</h2>

        <div className="flex items-center gap-6">
          <Button className="hidden bg-brand-black text-white px-6 py-3 text-sm font-normal tracking-wide hover:bg-dark-teal transition-colors md:block">
            Get in touch
          </Button>

          <nav className="hidden md:block" aria-label="Main navigation">
            <ul className="flex items-center gap-5 list-none">
              {['Home', 'About', 'Work', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-lg text-dark-teal hover:text-gray-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="text-dark-teal md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <nav className="mt-4 md:hidden" aria-label="Mobile navigation">
          <ul className="flex flex-col gap-3 list-none">
            {['Home', 'About', 'Work', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lg text-dark-teal hover:text-gray-accent transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <Button className="mt-4 bg-brand-black text-white px-6 py-3 text-sm font-normal tracking-wide hover:bg-dark-teal transition-colors w-full">
            Get in touch
          </Button>
        </nav>
      )}
    </header>
  )
}
