const aboutLinks = [
  'Homepage',
  'About Us',
  'Services & Offers',
  'Portfolio Presentation',
  'The News',
]
const solutionLinks = [
  'Our Loans',
  'Trading & Commerce',
  'Banking & Private Equity',
  'Industrial & Factory',
  'Financial Solutions',
]
const loanLinks = [
  'Our Loans',
  'Trading & Commerce',
  'Banking & Private Equity',
  'Industrial & Factory',
  'Financial Solutions',
]

const footerNews = [
  {
    title: 'How to get the best loan?',
    author: 'Jane Smith',
    date: 'April 26',
    img: 'https://picsum.photos/seed/credix-fn1/100/100',
  },
  {
    title: 'A new way to get a loan',
    author: 'Jane Smith',
    date: 'April 26',
    img: 'https://picsum.photos/seed/credix-fn2/100/100',
  },
  {
    title: 'Finance your home',
    author: 'Jane Smith',
    date: 'April 26',
    img: 'https://picsum.photos/seed/credix-fn3/100/100',
  },
]

function FooterColumn({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h5 className="mb-4 font-heading text-sm font-bold text-gray-900">{title}</h5>
      <ul className="flex flex-col gap-2" role="list">
        {links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm text-gray-500 transition hover:text-gold-400">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <FooterColumn title="About Us" links={aboutLinks} />
          <FooterColumn title="Solutions" links={solutionLinks} />
          <FooterColumn title="Our Loans" links={loanLinks} />

          {/* Latest News */}
          <div>
            <h5 className="mb-4 font-heading text-sm font-bold text-gray-900">Latest News</h5>
            <div className="flex flex-col gap-3">
              {footerNews.map((n) => (
                <div key={n.title} className="flex items-center gap-3">
                  <img
                    src={n.img}
                    alt=""
                    className="h-12 w-12 shrink-0 rounded object-cover"
                    loading="lazy"
                  />
                  <div>
                    <a href="#" className="text-sm font-semibold text-gray-900 hover:text-gold-400">
                      {n.title}
                    </a>
                    <p className="text-xs text-gray-400">
                      by {n.author} · {n.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="mt-12 border-t border-gray-100">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-4 sm:flex-row">
          <span className="font-heading text-sm font-bold text-navy-700">Credix</span>
          <p className="text-xs text-gray-400">
            Made with{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-semibold text-gold-400 hover:text-gold-500"
            >
              Component Dock
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
