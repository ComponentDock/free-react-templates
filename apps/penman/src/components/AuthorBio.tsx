const info = [
  { label: 'Name', value: 'Franklin Henderson' },
  { label: 'Date of birth', value: 'November 28, 1980' },
  { label: 'Address', value: 'San Francisco CA 97987 USA' },
  { label: 'Zip code', value: '1000' },
  { label: 'Email', value: 'franklinsample@gmail.com' },
  { label: 'Phone', value: '+1-2234-5678-9-0' },
]

export function AuthorBio() {
  return (
    <section id="author" className="bg-white py-16">
      <div className="mx-auto grid max-w-7xl items-stretch gap-0 px-4 md:grid-cols-2 md:px-8">
        <div className="relative overflow-hidden rounded-l-lg">
          <img
            src="https://picsum.photos/seed/penman-author/600/500"
            alt="Author portrait"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="rounded-r-lg bg-mist px-6 py-12 md:px-12">
          <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary-400">
            Know More About The Author
          </span>
          <h2 className="mb-4 text-3xl font-bold text-ink">Franklin Henderson</h2>
          <p className="mb-6 text-smoke">
            A small river named Duden flows by their place and supplies it with the necessary
            regelialia.
          </p>
          <ul className="mb-8 space-y-3">
            {info.map((item) => (
              <li key={item.label} className="flex gap-4 text-sm">
                <span className="min-w-[120px] font-semibold text-ink">{item.label}:</span>
                <span className="text-smoke">{item.value}</span>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary-400">120</span>
            <span className="text-sm text-smoke">View All Books</span>
          </div>
        </div>
      </div>
    </section>
  )
}
