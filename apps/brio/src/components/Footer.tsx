const footerColumns = [
  {
    title: 'Top Products',
    links: ['Managed Website', 'Manage Reputation', 'Power Tools', 'Marketing Service'],
  },
  {
    title: 'Navigation',
    links: ['Home', 'Main Features', 'Offered Services', 'Latest Portfolio'],
  },
  {
    title: 'Compare',
    links: ['Works & Builders', 'Works & WordPress', 'Works & Templates'],
  },
]

export function Footer() {
  return (
    <footer className="bg-brio-light py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="mb-4 text-sm font-semibold uppercase text-brio-dark">{col.title}</h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-brio-muted transition hover:text-brio-pink">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase text-brio-dark">About</h4>
            <p className="text-sm text-brio-muted">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi nam iusto ipsum
              error, ad expedita eveniet libero non magni.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 border-t border-gray-200">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 pt-8 sm:flex-row">
          <p className="text-sm text-brio-muted">
            &copy; {new Date().getFullYear()} Brio. More templates at{' '}
            <a
              href="https://www.componentdock.com/"
              className="font-medium text-brio-pink transition hover:text-brio-pink/80"
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
