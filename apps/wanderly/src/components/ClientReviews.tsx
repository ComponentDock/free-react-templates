import { Star, Quote } from 'lucide-react'

interface ReviewProps {
  text: string
  author: string
  rating: number
}

const reviews: ReviewProps[] = [
  {
    text: 'An absolutely magical experience. The team planned every detail perfectly and we never had to worry about a thing. Will definitely book again!',
    author: 'Sarah Mitchell',
    rating: 5,
  },
  {
    text: 'Our honeymoon trip to the Maldives was beyond expectations. Stunning villas, crystal waters, and impeccable service throughout the journey.',
    author: 'James Rodriguez',
    rating: 5,
  },
  {
    text: 'Professional, attentive, and incredibly knowledgeable. They found hidden gems we would never have discovered on our own. Highly recommended!',
    author: 'Emily Chen',
    rating: 5,
  },
  {
    text: 'From the initial consultation to the final farewell, every moment was crafted with care. The best travel agency we have ever worked with.',
    author: 'Michael Brown',
    rating: 5,
  },
]

function ReviewCard({ text, author, rating }: ReviewProps) {
  return (
    <div className="bg-white rounded-lg p-8 shadow-md min-w-[300px]">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          /* v8 ignore next -- all ratings are 5-star, false branch unreachable with static data */
          <Star
            key={i}
            size={16}
            className={i < rating ? 'fill-gold text-gold' : 'text-gray-300'}
          />
        ))}
      </div>
      <Quote size={32} className="text-primary-200 mb-3" />
      <p className="text-ash leading-relaxed mb-4">{text}</p>
      <p className="text-navy font-semibold">— {author}</p>
    </div>
  )
}

export function ClientReviews() {
  return (
    <section className="py-16 bg-cloud">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">What they said</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.author} {...review} />
          ))}
        </div>
      </div>
    </section>
  )
}
