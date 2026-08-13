import { fundraisers } from '../data'

export function TopFundraisers() {
  return (
    <section id="gallery" aria-label="Top fundraisers" className="site-section py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-bold text-ink md:text-3xl">Top Fundraisers</h2>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {fundraisers.map((item, i) => (
            <article
              key={`${item.title}-${i}`}
              className="fundraise-item overflow-hidden rounded shadow-sm"
            >
              <img src={item.img} alt={item.alt} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-lg font-bold text-ink">{item.title}</h4>
                <p className="mt-2 text-sm font-light text-gray-500">{item.text}</p>
                <p className="mt-3 text-xs text-gray-400">{item.lastDonation}</p>
                <div className="mt-2 h-[0.2rem] w-full bg-gray-200">
                  <div className="h-full bg-success" style={{ width: '27%' }} />
                </div>
                <p className="mt-3 text-sm font-medium text-ink">{item.caption}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
