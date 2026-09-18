import { Mail } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#333] text-gray-400">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">About Coachly</h3>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate necessitatibus
              inventore consequuntur voluptatibus.
            </p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#training" className="hover:text-white">
                  Training
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Subscribe</h3>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full rounded-l px-3 py-2 text-sm text-gray-900"
              />
              <button className="rounded-r bg-[#3a4971] px-4 py-2 text-sm text-white hover:bg-[#2d3a5c]">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-600 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Coachly. All rights reserved.{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-[#3a4971] hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              More templates at Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
