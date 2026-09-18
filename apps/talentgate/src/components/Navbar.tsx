import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-overlay/95 px-4 py-3 lg:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="/" className="text-xl font-bold text-white">
          TalentGate
        </a>
        <button
          className="text-white lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden items-center gap-6 lg:flex">
          <a href="#services" className="text-sm text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#jobs" className="text-sm text-gray-300 hover:text-white">
            Jobs
          </a>
          <a href="#blog" className="text-sm text-gray-300 hover:text-white">
            Blog
          </a>
          <a
            href="#post-job"
            className="rounded-full border border-white/30 px-5 py-2 text-sm text-white transition hover:bg-white hover:text-dark-overlay"
          >
            Post a Job
          </a>
          <a
            href="#find-job"
            className="rounded-full bg-brand-blue px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-blue/90"
          >
            Want a Job
          </a>
        </div>
      </div>
      {isOpen && (
        <div className="mt-4 flex flex-col gap-4 lg:hidden">
          <a href="#services" className="text-sm text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#jobs" className="text-sm text-gray-300 hover:text-white">
            Jobs
          </a>
          <a href="#blog" className="text-sm text-gray-300 hover:text-white">
            Blog
          </a>
          <a
            href="#post-job"
            className="rounded-full border border-white/30 px-5 py-2 text-center text-sm text-white"
          >
            Post a Job
          </a>
          <a
            href="#find-job"
            className="rounded-full bg-brand-blue px-5 py-2 text-center text-sm font-medium text-white"
          >
            Want a Job
          </a>
        </div>
      )}
    </nav>
  )
}
