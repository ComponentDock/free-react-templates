import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Floyd Miles',
    role: 'Web Development',
    avatar: 'https://picsum.photos/seed/precept-avatar1/80/80',
    text: 'Do you want to be even more successful? Learn to love learning and growth. The more effort you put into broadening your own knowledge.',
    rating: 5,
  },
  {
    name: 'Jenny Wilson',
    role: 'UI/UX Design',
    avatar: 'https://picsum.photos/seed/precept-avatar2/80/80',
    text: 'Education is about creating leaders and not just employees. Our students are prepared to lead teams and innovate in their fields.',
    rating: 5,
  },
  {
    name: 'Robert Fox',
    role: 'Digital Marketing',
    avatar: 'https://picsum.photos/seed/precept-avatar3/80/80',
    text: 'Our learning experience is designed to prepare you for the real world. We combine theory with practice for the best results.',
    rating: 4,
  },
]

export function Reviews() {
  return (
    <section className="py-20 bg-bg-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-heading mb-2">Our Expert Instructors</h1>
          <p className="text-body">Who are in extremely love with eco friendly system.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-6 text-center">
              <img
                src={r.avatar}
                alt={r.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h4 className="text-base font-semibold text-heading">{r.name}</h4>
              <p className="text-brand text-sm mb-3">{r.role}</p>
              <div className="flex justify-center gap-1 mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="text-body text-sm">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
