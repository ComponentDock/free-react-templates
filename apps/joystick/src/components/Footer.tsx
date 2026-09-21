import { Gamepad2 } from 'lucide-react'

const footerColumns = [
  {
    title: 'Game Reviews',
    links: ['Doom', 'Grand Theft Auto', 'Bloodborne', 'God of War', 'Persona 5'],
  },
  {
    title: 'Useful Links',
    links: ['Testimonials', 'Reviews', 'New Games', 'Forum', 'Contact'],
  },
  {
    title: "What's New",
    links: ['Doom', 'Grand Theft Auto', 'Bloodborne', 'God of War', 'Persona 5'],
  },
]

const footerNav = ['Home', 'Games', 'Articles', 'Reviews', 'Contact']

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      {/* Main footer */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand column */}
            <div>
              <a href="#" className="flex items-center gap-2 text-white font-bold text-xl mb-4">
                <Gamepad2 className="h-7 w-7 text-primary-400" />
                Joystick
              </a>
              <p className="text-gray-400 text-sm leading-relaxed">
                Your ultimate gaming destination. Discover the latest games, reviews, and news from
                the gaming world.
              </p>
            </div>

            {/* Link columns */}
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className="font-bold text-white mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-gray-400 text-sm hover:text-primary-400 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-gray-700">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <span className="text-primary-400">&#9829;</span> by{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-primary-400 hover:text-primary-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
          <nav className="flex gap-4">
            {footerNav.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-400 text-xs hover:text-primary-400 transition-colors"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
