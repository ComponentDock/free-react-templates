const donations = [
  {
    name: 'John Smith',
    amount: '$250.00',
    avatar: 'gracious-avatar-1',
    cause: 'Clean Water Initiative',
  },
  {
    name: 'Sarah Johnson',
    amount: '$150.00',
    avatar: 'gracious-avatar-2',
    cause: 'Education for All',
  },
  {
    name: 'Michael Brown',
    amount: '$500.00',
    avatar: 'gracious-avatar-3',
    cause: 'Healthcare Access',
  },
] as const

export function LatestDonations() {
  return (
    <section className="bg-section py-16 transition-colors lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-teal">
            Recent
          </span>
          <h2 className="mt-3 text-2xl font-bold text-ink sm:text-3xl">Latest Donations</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {donations.map((donation) => (
            <div
              key={donation.name}
              className="flex items-center gap-4 rounded bg-white p-5 shadow-md transition-all hover:shadow-lg"
            >
              <img
                src={`https://picsum.photos/seed/${donation.avatar}/100/100`}
                alt={donation.name}
                className="h-16 w-16 rounded-full object-cover"
              />
              <div>
                <h3 className="text-base font-bold text-ink">{donation.name}</h3>
                <p className="text-sm text-meta">{donation.cause}</p>
                <span className="text-lg font-bold text-brand">{donation.amount}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
