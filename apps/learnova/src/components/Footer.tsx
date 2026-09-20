export function Footer() {
  return (
    <footer id="footer" role="contentinfo" className="relative py-16">
      <img
        src="https://picsum.photos/seed/learnova-footer/1920/600"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href="#home" className="text-2xl font-black uppercase tracking-wider text-white">
              LEARNOVA
            </a>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Dedicated to providing quality online education. Our mission is to make learning
              accessible to everyone, everywhere.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Programs</h3>
            <ul className="mt-4 space-y-3">
              {['Web Development', 'Data Science', 'Graphic Design', 'Mobile Development'].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#courses"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Support</h3>
            <ul className="mt-4 space-y-3">
              {['FAQ', 'Contact Us', 'Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a
                    href="#support"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Community</h3>
            <ul className="mt-4 space-y-3">
              {['Blog', 'Events', 'Student Stories', 'Partners'].map((item) => (
                <li key={item}>
                  <a
                    href="#community"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/50">
          &copy; {new Date().getFullYear()} Learnova. Crafted with love by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-blue hover:underline"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
