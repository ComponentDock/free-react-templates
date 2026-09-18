import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Cody Hines',
    text: 'Excellent service! The driver was punctual and the ride was very comfortable. I use CabSpot for all my airport transfers now.',
    rating: 3,
  },
  {
    name: 'Chad Herrera',
    text: 'Very reliable and professional. The booking process was simple and the driver arrived right on time. Highly recommended!',
    rating: 3,
  },
  {
    name: 'Andre Gonzalez',
    text: 'Great experience from start to finish. Clean cars, friendly drivers, and affordable prices. Will definitely use again.',
    rating: 3,
  },
]

export function Reviews() {
  return (
    <section className="bg-[#f9f9ff] py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold text-gray-900 md:text-3xl">
          Client's Reviews
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="rounded-sm bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < review.rating ? 'fill-taxi text-taxi' : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-gray-600">{review.text}</p>
              <p className="text-sm font-bold text-gray-900">{review.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
