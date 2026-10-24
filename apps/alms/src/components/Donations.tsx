import { donations } from '../data'

export function Donations() {
  return (
    <section id="donations" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-heading text-4xl font-light">Latest Donations</h2>
          <p className="mt-4 text-body">
            Gifts arrive every few minutes. Here are the most recent, shown with
            the program each donor chose.
          </p>
          <a
            href="#donations"
            className="mt-4 inline-block text-sm uppercase tracking-[0.14em] text-brand underline decoration-brand/60 underline-offset-4 hover:no-underline"
          >
            View All Donations
          </a>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {donations.map((donor) => (
            <article key={donor.name} className="text-center">
              <img
                src={donor.avatar}
                alt={`${donor.name} avatar`}
                className="mx-auto h-32 w-32 rounded-full object-cover"
                loading="lazy"
              />
              <h3 className="mt-5 font-heading text-xl font-light">{donor.name}</h3>
              <p className="text-xs text-faint">{donor.time}</p>
              <p className="mt-3 text-sm text-body">
                Donated <span className="font-semibold text-ink">{donor.amount}</span> for{' '}
                {donor.cause}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
