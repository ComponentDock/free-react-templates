const reviews = [
  {
    avatar: 'https://picsum.photos/seed/gastro-avatar1/100/100',
    name: 'Sarah Johnson',
    location: 'New York, USA',
    quote:
      'An absolutely wonderful dining experience. The food was exceptional and the service was impeccable. Highly recommend!',
    rating: 5,
  },
  {
    avatar: 'https://picsum.photos/seed/gastro-avatar2/100/100',
    name: 'Marco Rossi',
    location: 'Milan, Italy',
    quote:
      'The most authentic Italian food I have had outside of Italy. The pasta was perfectly al dente and the wine selection is fantastic.',
    rating: 5,
  },
  {
    avatar: 'https://picsum.photos/seed/gastro-avatar3/100/100',
    name: 'Emma Wilson',
    location: 'London, UK',
    quote:
      'Beautiful atmosphere and outstanding cuisine. The chef truly understands the art of Italian cooking. Will definitely return.',
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <p className="font-accent text-lg text-brand">Customers Say</p>
          <h2 className="mt-2 text-4xl font-bold">Review</h2>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="rounded-[10px] bg-gray-50 p-8 text-center">
              <img
                src={r.avatar}
                alt={r.name}
                className="mx-auto h-20 w-20 rounded-full border-4 border-brand object-cover"
                loading="lazy"
              />
              <p className="mt-6 text-sm leading-relaxed text-text-gray italic">"{r.quote}"</p>
              <div className="mt-4 flex justify-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    className={`h-4 w-4 ${i < r.rating ? 'text-brand' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-3 text-sm font-bold text-text-dark">{r.name}</p>
              <p className="mt-1 text-xs text-text-gray">{r.location}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
