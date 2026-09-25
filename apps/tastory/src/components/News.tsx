const NEWS_ITEMS = [
  {
    title: 'We Have Delicious Food',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-news1/600/400',
  },
  {
    title: 'Chef Special Menu',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-news2/600/400',
  },
  {
    title: 'Marriage Celebrations',
    description:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.',
    image: 'https://picsum.photos/seed/tastory-news3/600/400',
  },
]

export function News() {
  return (
    <section id="news" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-heading text-4xl font-bold text-black">News</h2>
          <p className="mx-auto max-w-2xl text-lg text-body-text">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {NEWS_ITEMS.map((item) => (
            <div
              key={item.title}
              className="overflow-hidden rounded bg-white text-center shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-8">
                <h4 className="mb-3 font-heading text-xl font-bold text-black">{item.title}</h4>
                <p className="mb-4 text-body-text">{item.description}</p>
                <a
                  href="#news"
                  className="inline-block bg-amber-brand px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-amber-dark"
                >
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
