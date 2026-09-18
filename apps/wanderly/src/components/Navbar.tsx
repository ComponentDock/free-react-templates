import { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [blogOpen, setBlogOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="/" className="text-2xl font-bold text-navy">
          Wanderly
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <a href="#" className="text-navy font-semibold hover:text-primary-500 transition-colors">
            Home
          </a>
          <a
            href="#about"
            className="text-navy font-semibold hover:text-primary-500 transition-colors"
          >
            About
          </a>
          <a
            href="#places"
            className="text-navy font-semibold hover:text-primary-500 transition-colors"
          >
            Packages
          </a>

          {/* Blog dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setBlogOpen(!blogOpen)
                setPagesOpen(false)
              }}
              className="flex items-center gap-1 text-navy font-semibold hover:text-primary-500 transition-colors"
              aria-expanded={blogOpen}
            >
              Blog <ChevronDown size={16} />
            </button>
            {blogOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Blog
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Single Post
                </a>
              </div>
            )}
          </div>

          {/* Pages dropdown */}
          <div className="relative">
            <button
              onClick={() => {
                setPagesOpen(!pagesOpen)
                setBlogOpen(false)
              }}
              className="flex items-center gap-1 text-navy font-semibold hover:text-primary-500 transition-colors"
              aria-expanded={pagesOpen}
            >
              Pages <ChevronDown size={16} />
            </button>
            {pagesOpen && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[160px] z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Elements
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Gallery
                </a>
              </div>
            )}
          </div>

          <a
            href="#contact"
            className="text-navy font-semibold hover:text-primary-500 transition-colors"
          >
            Contact
          </a>
        </div>

        <a
          href="#booking"
          className="hidden lg:inline-block bg-primary-500 text-white px-6 py-2 rounded font-semibold hover:bg-primary-600 transition-colors"
        >
          Book Now
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-navy"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t px-4 py-4 space-y-3">
          <a href="#" className="block text-navy font-semibold">
            Home
          </a>
          <a href="#about" className="block text-navy font-semibold">
            About
          </a>
          <a href="#places" className="block text-navy font-semibold">
            Packages
          </a>
          <a href="#" className="block text-navy font-semibold">
            Blog
          </a>
          <a href="#contact" className="block text-navy font-semibold">
            Contact
          </a>
          <a
            href="#booking"
            className="block bg-primary-500 text-white px-6 py-2 rounded font-semibold text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </nav>
  )
}
