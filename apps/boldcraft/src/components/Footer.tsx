const socialIcons = [
  {
    label: 'Twitter',
    path: 'M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z',
  },
  {
    label: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    label: 'Pinterest',
    path: 'M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z',
  },
  {
    label: 'Globe',
    path: 'M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.002 2.307c.288 0 .522.234.522.522v1.046c0 .288-.234.522-.522.522-.289 0-.522-.234-.522-.522V2.829c0-.288.233-.522.522-.522zm4.61 2.66a.52.52 0 0 1 0 .736l-.74.74a.52.52 0 0 1-.736-.736l.74-.74a.52.52 0 0 1 .736 0zm-9.218.736a.52.52 0 0 1-.736 0l-.74-.74a.52.52 0 0 1 .736-.736l.74.74a.52.52 0 0 1 0 .736zM12 21.693c-.288 0-.522-.234-.522-.522v-1.046c0-.288.234-.522.522-.522.289 0 .522.234.522.522v1.046c0 .288-.233.522-.522.522zm5.468-6.054h1.566c.289 0 .522.234.522.522v.522c0 .288-.233.522-.522.522h-1.566a.52.52 0 0 1-.522-.522v-.522c0-.288.234-.522.522-.522zm-11.936 0h1.566c.288 0 .522.234.522.522v.522c0 .288-.234.522-.522.522H5.534a.52.52 0 0 1-.522-.522v-.522c0-.288.234-.522.522-.522z',
  },
  {
    label: 'Instagram',
    path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z',
  },
]

const navLinks = ['Home', 'Work', 'Service', 'Blog', 'Contact']

export function Footer() {
  return (
    <footer className="bg-footer-bg">
      {/* CTA section */}
      <div className="mx-auto max-w-[1200px] px-4 py-16">
        <div className="flex flex-col items-center gap-10 md:flex-row md:justify-between">
          <div className="max-w-sm text-center md:text-left">
            <p className="mb-4 font-heading text-2xl font-bold text-white">BoldCraft</p>
            <p className="mb-6 text-sm leading-relaxed text-white/60">
              Crafting digital products that make a difference. Let&apos;s work together to bring
              your vision to life.
            </p>
            <div className="flex justify-center gap-3 md:justify-start">
              {socialIcons.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-[var(--radius-social)] bg-brand-social transition-colors hover:bg-brand"
                >
                  <svg className="h-4 w-4 fill-white" viewBox="0 0 24 24">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <a
              href="#contact"
              className="rounded-[30px] border-2 border-brand bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-hover"
            >
              Let&apos;s Talk
            </a>
            <a
              href="#"
              className="rounded-[30px] border-2 border-white px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-text-primary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row">
          <p className="text-xs text-white/40">
            © 2026 BoldCraft. Made with ❤️ by{' '}
            <a
              href="https://www.componentdock.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand transition-colors hover:text-brand-hover"
            >
              Component Dock
            </a>
          </p>
          <nav className="flex gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-xs text-white/40 transition-colors hover:text-white"
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
