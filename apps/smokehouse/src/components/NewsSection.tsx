const newsItems = [
  {
    title: 'New Menu Launch This Summer',
    date: 'Sep 15, 2026',
    image: 'https://picsum.photos/seed/news1/600/400',
    size: 'large',
  },
  {
    title: "Chef's Special: Wagyu Night",
    date: 'Sep 10, 2026',
    image: 'https://picsum.photos/seed/news2/600/400',
    size: 'small',
  },
  {
    title: 'Wine Pairing Dinner Event',
    date: 'Sep 5, 2026',
    image: 'https://picsum.photos/seed/news3/600/400',
    size: 'small',
  },
  {
    title: 'Farm-to-Table Partnership',
    date: 'Sep 1, 2026',
    image: 'https://picsum.photos/seed/news4/600/400',
    size: 'large',
  },
]

export function NewsSection() {
  return (
    <section id="news" className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold text-heading md:text-4xl">
          News &amp; Events
        </h2>
        <div className="grid gap-4 md:grid-cols-2">
          {newsItems.map((item) => (
            <div
              key={item.title}
              className={`group relative overflow-hidden ${
                item.size === 'large' ? 'aspect-[16/10]' : 'aspect-[16/10]'
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />
              <div className="absolute bottom-0 left-0 p-6">
                <span className="mb-2 block text-xs font-medium uppercase tracking-widest text-brand-light">
                  {item.date}
                </span>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
