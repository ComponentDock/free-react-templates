const REVIEWS = [
  {
    rating: '9.3',
    ratingColor: 'bg-primary',
    title: 'Cyber Nexus: Awakening',
    description: 'A stunning cyberpunk adventure with deep narrative choices.',
    image: 'https://picsum.photos/seed/fragzone-review1/300/300',
  },
  {
    rating: '9.5',
    ratingColor: 'bg-badge-purple',
    title: 'Velocity Rush GT',
    description: 'The most exhilarating racing experience of the year.',
    image: 'https://picsum.photos/seed/fragzone-review2/300/300',
  },
  {
    rating: '9.1',
    ratingColor: 'bg-badge-green',
    title: 'Wilderness Protocol',
    description: 'A gripping survival story set in a beautifully rendered world.',
    image: 'https://picsum.photos/seed/fragzone-review3/300/300',
  },
  {
    rating: '9.7',
    ratingColor: 'bg-badge-red',
    title: 'Stellar Odyssey',
    description: 'An epic space odyssey that redefines the RPG genre.',
    image: 'https://picsum.photos/seed/fragzone-review4/300/300',
  },
]

export function RecentReviews() {
  return (
    <section className="bg-heading py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-12 text-center text-3xl font-light text-white">Recent Reviews</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {REVIEWS.map((review) => (
            <div key={review.title} className="relative text-center">
              <span
                className={`${review.ratingColor} absolute -top-4 left-6 z-10 inline-block rounded-full px-3.5 py-2.5 text-sm font-semibold text-white`}
              >
                {review.rating}
              </span>
              <div className="mb-3 overflow-hidden">
                <img src={review.image} alt={review.title} className="h-48 w-full object-cover" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-white">{review.title}</h3>
              <p className="text-sm text-gray-400">{review.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
