const navLinks = ['Home', 'Clothes', 'Accessories', 'Lingerie', 'Contact']
const socialLinks = ['Pinterest', 'LinkedIn', 'Instagram', 'Reddit', 'Twitter']

export function Footer() {
  return (
    <footer className="bg-dark py-12 text-center text-white">
      <div className="mx-auto max-w-7xl px-6">
        <a href="#" className="mb-4 inline-block font-sans text-2xl font-bold">
          Vow
        </a>
        <nav aria-label="Footer navigation">
          <ul className="mb-6 flex flex-wrap justify-center gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/60 transition-colors hover:text-white">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="mb-6 flex justify-center gap-4" aria-label="Social links">
          {socialLinks.map((s) => (
            <li key={s}>
              <a
                href="#"
                aria-label={s}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-sm text-white/60 transition-colors hover:border-white hover:text-white"
              >
                {s[0]}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-xs text-white/40">
          &copy; {new Date().getFullYear()} All rights reserved | Made with{' '}
          <a
            href="https://www.componentdock.com/"
            className="underline transition-colors hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
