import { Zap } from 'lucide-react'

const matches = [
  {
    date: 'May 05, 2025',
    venue: 'Chicago',
    home: 'Jinotega',
    score: '54:85',
    away: 'Toronto Raptors',
  },
  {
    date: 'May 05, 2025',
    venue: 'Chicago',
    home: 'San Isidro',
    score: '78:65',
    away: 'Brooklyn Nets',
  },
  {
    date: 'May 05, 2025',
    venue: 'Chicago',
    home: 'Costa Caribe',
    score: '119:86',
    away: 'Brooklyn Nets',
  },
]

export function LatestResults() {
  return (
    <section className="bg-dark-bg py-16 text-white">
      <div className="container mx-auto">
        <div className="grid gap-8 md:grid-cols-12">
          {/* Results table */}
          <div className="md:col-span-5">
            <div className="mb-6 flex items-center gap-2">
              <Zap size={20} className="text-primary" />
              <h2 className="font-heading text-2xl font-bold uppercase">Latest Results</h2>
            </div>
            <div className="overflow-hidden rounded border border-dark-border">
              <table className="w-full text-sm">
                <tbody>
                  {matches.map((m, i) => (
                    <tr key={i} className="border-b border-dark-border last:border-b-0">
                      <td className="p-3 text-gray-500">{m.date}</td>
                      <td className="p-3 text-center text-xs text-gray-500">{m.venue}</td>
                      <td className="p-3 text-right text-gray-400">{m.home}</td>
                      <td className="p-3 text-center font-heading font-bold text-primary">
                        {m.score}
                      </td>
                      <td className="p-3 text-gray-400">{m.away}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Featured match */}
          <div className="md:col-span-7">
            <div className="flex h-full items-center justify-center rounded bg-dark-card p-8">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-dark-muted">
                    <span className="font-heading text-lg font-bold">CC</span>
                  </div>
                  <p className="font-heading text-sm font-semibold uppercase">Costa Caribe</p>
                </div>
                <div className="text-center">
                  <p className="mb-1 text-xs uppercase tracking-wider text-gray-500">vs</p>
                  <p className="font-heading text-3xl font-bold text-primary">119:86</p>
                </div>
                <div className="text-center">
                  <div className="mx-auto mb-3 flex h-20 w-20 items-center justify-center rounded-full bg-dark-muted">
                    <span className="font-heading text-lg font-bold">BN</span>
                  </div>
                  <p className="font-heading text-sm font-semibold uppercase">Brooklyn Nets</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <a
            href="#join"
            className="inline-block border-2 border-primary bg-transparent px-8 py-3 font-heading text-sm uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
          >
            Join Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
