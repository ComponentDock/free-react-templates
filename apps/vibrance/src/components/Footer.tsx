const offices = [
  {
    city: 'Barcelona Office',
    address: 'C/Libertad, 34, 05200 Arevalo',
    phone: '0034 373840 2445 322',
    email: 'hello@company.com',
  },
  {
    city: 'New York Office',
    address: '475 Chinatown Drive, Willasport, TN 38487',
    phone: '0034 373840 2445 322',
    email: 'hello@company.com',
  },
  {
    city: 'Melbourne Office',
    address: '21 Ronald Chescent, WEST GLADSTONE QLD 468',
    phone: '(07) 4936 2100',
    email: 'hello@company.com',
  },
]

export function Footer() {
  return (
    <footer className="bg-footer py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-4 text-2xl font-bold">Vibrance</h3>
            <p className="text-sm leading-relaxed text-white/60">
              Litora torquent per conubia nostra, per inceptos himenaeos. Fusce quis tempus elit.
              Class aptent taciti orquent per conubia nostra inceptos.
            </p>
          </div>

          {offices.map((o) => (
            <div key={o.city}>
              <h5 className="mb-4 text-sm font-bold uppercase tracking-wider">{o.city}</h5>
              <p className="text-sm text-white/60">{o.address}</p>
              <p className="my-2 text-sm text-white/60">{o.phone}</p>
              <p className="text-sm text-white/60">{o.email}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-white/40">
          Made with <span className="text-brand-pink">&#9829;</span> by{' '}
          <a
            href="https://www.componentdock.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 underline transition-colors hover:text-white"
          >
            Component Dock
          </a>
        </div>
      </div>
    </footer>
  )
}
