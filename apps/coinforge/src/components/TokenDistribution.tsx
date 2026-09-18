const allocations = [
  { label: 'Build Up Team', pct: 15, color: 'bg-coral' },
  { label: 'ICO Investors', pct: 50, color: 'bg-accent' },
  { label: 'Branding & Marketing', pct: 25, color: 'bg-gold' },
  { label: 'Bounty', pct: 10, color: 'bg-muted' },
]

const salesBreakdown = [
  { label: 'HR & Development', pct: 40 },
  { label: 'Branding & Marketing', pct: 30 },
  { label: 'Possible Buyout', pct: 20 },
  { label: 'Legal Advisory', pct: 10 },
]

export function TokenDistribution() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-wider text-coral">Token Distribution</p>
          <h2 className="mb-12 text-3xl font-bold text-white md:text-4xl">Initial Distribution</h2>
        </div>

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Pie chart placeholder */}
          <div className="flex justify-center">
            <svg
              viewBox="0 0 200 200"
              className="h-64 w-64"
              aria-label="Token distribution pie chart"
            >
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#004cff"
                strokeWidth="40"
                strokeDasharray="251.2 502.65"
                strokeDashoffset="0"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#f9748f"
                strokeWidth="40"
                strokeDasharray="75.4 502.65"
                strokeDashoffset="-251.2"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#F6D266"
                strokeWidth="40"
                strokeDasharray="125.6 502.65"
                strokeDashoffset="-326.6"
              />
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#7a8fb5"
                strokeWidth="40"
                strokeDasharray="50.3 502.65"
                strokeDashoffset="-452.2"
              />
            </svg>
          </div>

          <div className="space-y-4">
            {allocations.map((a) => (
              <div key={a.label} className="flex items-center gap-4">
                <span className={`h-4 w-4 rounded-full ${a.color}`} aria-hidden="true" />
                <span className="text-sm text-light">
                  <span className="font-bold">{a.pct}%</span> {a.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="mb-2 text-sm uppercase tracking-wider text-coral">Sale Breakdown</h3>
          <h2 className="mb-12 text-2xl font-bold text-white">Token Sales Contribution</h2>
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {salesBreakdown.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between rounded-lg bg-surface/60 px-6 py-4"
              >
                <span className="text-sm text-light">{s.label}</span>
                <span className="text-lg font-bold text-coral">{s.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
