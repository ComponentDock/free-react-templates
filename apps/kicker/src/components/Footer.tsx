const FOOTER_COLUMNS = [
  {
    title: 'About',
    links: ['Our Story', 'Mission', 'About Us', 'News'],
  },
  {
    title: 'Categories',
    links: ['Work', 'Services', 'Products', 'Tips & Tricks'],
  },
  {
    title: 'More',
    links: ['Work', 'Services', 'Products', 'Tips & Tricks'],
  },
  {
    title: 'Quick Links',
    links: ['Privacy Policy', 'Privacy Statement', 'Use of cookies', 'International Editions'],
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink">
      <div className="px-4 py-[100px] lg:px-[88px]">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title + col.links[0]}>
              <h4 className="mb-6 font-chivo text-[20px] font-normal text-white">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="font-chivo text-[16px] text-footer-text transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 px-4 py-[20px] text-center lg:px-[88px]">
        <p className="font-chivo text-[16px] text-footer-text">
          Copyright &copy; {year} All rights reserved | This template is made with &#9829; by{' '}
          <a
            href="https://www.componentdock.com/"
            className="text-white underline transition-colors hover:text-brand-red"
          >
            Component Dock
          </a>
        </p>
      </div>
    </footer>
  )
}
