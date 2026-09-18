const TOUR_DATES = [
  { date: 'Sun, 21 Oct 2024', venue: 'The O2', location: 'London, United Kingdom' },
  { date: 'Mon, 22 Oct 2024', venue: 'Madison Square Garden', location: 'New York, USA' },
  { date: 'Tue, 23 Oct 2024', venue: 'Zenith', location: 'Paris, France' },
  { date: 'Wed, 24 Oct 2024', venue: 'Olympiahalle', location: 'Munich, Germany' },
] as const

export default function Tours() {
  return (
    <section data-testid="tours" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Promotional card */}
          <div className="lg:w-1/3">
            <div className="relative h-96 rounded-xl overflow-hidden group">
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('https://picsum.photos/seed/ampstat-tour/400/400')`,
                }}
              />
              <div className="absolute inset-0 border-2 border-white/30 m-4 rounded-lg" />
              <div className="absolute inset-0 flex flex-col items-center justify-end p-8 text-center">
                <span className="text-white text-sm font-bold uppercase tracking-widest mb-1">
                  it's awesome
                </span>
                <span className="text-brand-yellow-light text-5xl font-bold">2024</span>
                <span className="text-white text-2xl font-bold mb-1">world tour</span>
                <span className="text-white/70 text-sm mb-4">october 2024</span>
                <button className="w-[200px] h-14 bg-brand-green text-white text-sm font-bold uppercase rounded-[22px] hover:bg-brand-green/90 transition-colors">
                  get your tickets
                </button>
              </div>
            </div>
          </div>

          {/* Tour dates list */}
          <div className="lg:w-2/3">
            <h2 className="text-4xl font-bold text-text-dark mb-8">Tour Dates</h2>
            <ul className="space-y-0">
              {TOUR_DATES.map((tour, i) => (
                <li
                  key={i}
                  data-testid="tour-item"
                  className="flex flex-col sm:flex-row sm:items-center justify-between py-5 border-b border-gray-200"
                >
                  <div>
                    <div className="text-text-muted text-sm">{tour.date}</div>
                    <a
                      href="#"
                      className="text-text-dark text-lg font-bold hover:text-brand-green transition-colors"
                    >
                      {tour.venue}
                    </a>
                    <div className="text-text-muted text-sm">{tour.location}</div>
                  </div>
                  <button className="mt-3 sm:mt-0 w-[200px] h-14 bg-brand-green text-white text-sm font-bold uppercase rounded-[22px] hover:bg-brand-green/90 transition-colors shrink-0">
                    get your tickets
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="#"
                className="text-brand-green font-bold text-sm uppercase hover:text-brand-purple transition-colors"
              >
                See All Tour Dates
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
