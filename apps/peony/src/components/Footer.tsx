const information = ['FAQs', 'Privacy', 'Terms Condition'] as const
const links = ['Home', 'About', 'Services', 'Work', 'Blog', 'Contact'] as const

export function Footer() {
  return (
    <footer id="contact" className="bg-plum text-white transition-colors dark:bg-gray-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-script text-2xl">
            Peony<span className="text-brand">.</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-white/70">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        <nav aria-label="Information">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Information
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {information.map((item) => (
              <li key={item}>
                <a href="#home" className="transition-colors hover:text-brand">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Links">
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">Links</h2>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            {links.map((link) => (
              <li key={link}>
                <a href="#home" className="transition-colors hover:text-brand">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">
            Have a Questions?
          </h2>
          <address className="mt-4 space-y-2 text-sm not-italic text-white/70">
            <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            <p>+2 392 3929 210</p>
            <p>info@yourdomain.com</p>
          </address>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/50">
        © {new Date().getFullYear()} Peony — Free React Template
      </div>
    </footer>
  )
}
