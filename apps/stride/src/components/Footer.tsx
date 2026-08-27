export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12 pb-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-gray-800 mb-4">
              About Stride
            </h4>
            <p className="text-sm text-text-gray leading-relaxed">
              Stride is a fitness community dedicated to helping you reach your peak performance
              through expert training, modern facilities, and a supportive environment.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-gray-800 mb-4">
              Links
            </h4>
            <ul className="space-y-2">
              {['Home', 'Classes', 'Schedule', 'Trainer'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-sm text-text-gray hover:text-brand transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-[0.15em] text-gray-800 mb-4">
              Subscribe
            </h4>
            <p className="text-sm text-text-gray leading-relaxed mb-4">
              Get the latest fitness tips and news delivered to your inbox.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email for newsletter"
                className="flex-1 border border-gray-300 rounded-l px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand/30"
              />
              <button
                type="submit"
                className="bg-brand text-white px-4 py-2 text-sm font-bold uppercase rounded-r hover:bg-brand-dark transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-gray">&copy; 2026 Stride. All rights reserved.</p>
          <p className="text-sm text-text-gray">
            More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="text-brand hover:underline font-semibold"
              target="_blank"
              rel="noopener noreferrer"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
