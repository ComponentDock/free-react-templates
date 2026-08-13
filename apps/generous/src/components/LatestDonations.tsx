import { donors } from '../data'

export function LatestDonations() {
  return (
    <section aria-label="Latest donations" className="bg-light py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">Latest Donations</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {donors.map((donor) => (
            <article key={donor.name} className="person-donate bg-white pt-4 text-center shadow-sm">
              <img
                src={donor.avatar}
                alt={donor.alt}
                className="mx-auto h-[100px] w-[100px] rounded-full object-cover"
              />
              <h4 className="mt-4 text-base font-bold text-ink">{donor.name}</h4>
              <p className="mt-1 text-sm font-light text-gray-400">Donated 3 hours ago</p>
              <div className="donate-amount mt-4 flex items-center justify-between border-t border-gray-200 px-4 py-3">
                <span className="text-sm font-light text-gray-500">Donated</span>
                <span className="text-sm font-bold text-ink">{donor.amount}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
