import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

const navLinks = ['Home', 'Property', 'Agents', 'News', 'Pages', 'Contact']
const languages = ['English', 'Français', 'Español', 'Deutsch']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [selectedLang, setSelectedLang] = useState('English')

  return (
    <header className="sticky top-0 z-50 bg-[#19191a]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        <a href="/" className="font-heading text-2xl font-bold text-white">
          Terravault
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="font-heading text-sm font-medium text-white/80 transition-colors hover:text-[#2cbdb8]"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-sm text-white/70 hover:text-white"
              aria-label="Select language"
            >
              {selectedLang}
              <ChevronDown size={14} />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full z-10 mt-2 w-32 rounded bg-[#19191a] py-2 shadow-lg">
                {languages.map((lang) => (
                  <li key={lang}>
                    <button
                      className={`block w-full px-4 py-2 text-left text-sm transition-colors hover:bg-[#2cbdb8] hover:text-white ${
                        selectedLang === lang ? 'text-[#2cbdb8]' : 'text-white/70'
                      }`}
                      onClick={() => {
                        setSelectedLang(lang)
                        setLangOpen(false)
                      }}
                    >
                      {lang}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <a
            href="#contact"
            className="rounded-full bg-[#2cbdb8] px-5 py-2 font-heading text-sm font-semibold text-white transition-colors hover:bg-[#24a6a1]"
          >
            Submit Property
          </a>
        </div>
        <button
          className="text-white md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-white/10 bg-[#19191a] px-4 pb-4 md:hidden">
          <ul className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="block font-heading text-sm font-medium text-white/80 hover:text-[#2cbdb8]"
                  onClick={() => setOpen(false)}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="mt-3 block rounded-full bg-[#2cbdb8] px-5 py-2 text-center font-heading text-sm font-semibold text-white hover:bg-[#24a6a1]"
            onClick={() => setOpen(false)}
          >
            Submit Property
          </a>
        </div>
      )}
    </header>
  )
}
