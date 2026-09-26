import { Heart } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-ink py-20">
      <div className="container mx-auto px-4 text-center">
        <nav className="mb-6 flex flex-wrap justify-center gap-6">
          <a href="#home" className="text-sm text-white transition hover:text-white/80">
            Home
          </a>
          <a href="#about" className="text-sm text-white transition hover:text-white/80">
            About
          </a>
          <a href="#services" className="text-sm text-white transition hover:text-white/80">
            Services
          </a>
          <a href="#contact" className="text-sm text-white transition hover:text-white/80">
            Contact
          </a>
        </nav>
        <div className="mb-6 flex justify-center gap-4">
          {/* Social icons using inline SVGs */}
          <a href="#" aria-label="Facebook" className="text-white transition hover:text-white/80">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a href="#" aria-label="Twitter" className="text-white transition hover:text-white/80">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
          </a>
          <a href="#" aria-label="Dribbble" className="text-white transition hover:text-white/80">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
              <path
                d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </a>
          <a href="#" aria-label="Behance" className="text-white transition hover:text-white/80">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-7.686-4h4.965c-.105-1.547-1.136-2.219-2.477-2.219-1.466 0-2.277.768-2.488 2.219zm-9.574 6.988H0V5.021h6.953c5.476.081 5.58 5.444 2.72 6.906 3.461 1.26 3.577 8.061-3.207 8.061zM3 11h3.584c2.508 0 2.906-3-.312-3H3v3zm3.391 3H3v3.016h3.341c3.055 0 2.868-3.016.05-3.016z" />
            </svg>
          </a>
        </div>
        <p className="flex items-center justify-center gap-1 text-xs text-white/60">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <Heart size={12} className="text-red-400" aria-hidden="true" /> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
