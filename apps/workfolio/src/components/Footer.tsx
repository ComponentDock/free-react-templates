export function Footer() {
  return (
    <footer className="bg-navy-deep pt-24 pb-8" id="contact">
      <div className="mx-auto max-w-6xl px-6">
        {/* Top: CTA row */}
        <div className="mb-16 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="mb-2 text-sm text-white/60">Discuss your project now</p>
            <a
              href="mailto:hello@workfolio.com"
              className="text-2xl font-semibold text-white transition-colors hover:text-coral md:text-3xl"
            >
              hello@workfolio.com
            </a>
          </div>
          <a
            href="#"
            className="inline-block bg-coral px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:bg-coral-hover"
          >
            Download CV
          </a>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center">
          {/* Nav links */}
          <nav className="flex gap-6">
            <a href="#about" className="text-sm text-white/60 transition-colors hover:text-coral">
              About
            </a>
            <a
              href="#portfolio"
              className="text-sm text-white/60 transition-colors hover:text-coral"
            >
              Work
            </a>
            <a href="#contact" className="text-sm text-white/60 transition-colors hover:text-coral">
              Contact
            </a>
          </nav>

          {/* Social icons */}
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="text-white/50 transition-colors hover:text-coral"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-white/50 transition-colors hover:text-coral"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Behance"
              className="text-white/50 transition-colors hover:text-coral"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.67.767-.62.16-1.26.25-1.92.25H0v-14.1h6.938z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Website"
              className="text-white/50 transition-colors hover:text-coral"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} All rights reserved. Made with{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral transition-colors hover:text-coral-hover"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
