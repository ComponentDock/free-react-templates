import { Briefcase } from 'lucide-react'

export function Navbar() {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Briefcase className="h-6 w-6 text-brand" />
            <span className="text-xl font-bold text-gray-900">
              Career<span className="text-brand">ly</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#categories" className="text-gray-600 hover:text-brand transition-colors">
              For Candidates
            </a>
            <a href="#featured" className="text-gray-600 hover:text-brand transition-colors">
              For Employers
            </a>
            <a href="#testimonials" className="text-gray-600 hover:text-brand transition-colors">
              About
            </a>
            <a href="#cta" className="text-gray-600 hover:text-brand transition-colors">
              Contact
            </a>
          </div>
          <button className="md:hidden text-gray-600" aria-label="Toggle menu">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}
