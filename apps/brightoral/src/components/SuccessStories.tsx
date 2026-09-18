import { Star } from 'lucide-react'

const STORIES = [
  {
    name: 'Sarah Johnson',
    treatment: 'Teeth Whitening',
    quote:
      'Absolutely thrilled with my results! The team was professional and made me feel comfortable throughout.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    treatment: 'Dental Implants',
    quote: 'Best dental experience I have ever had. The implants look and feel completely natural.',
    rating: 5,
  },
  {
    name: 'Emma Williams',
    treatment: 'Orthodontics',
    quote:
      'My smile has never looked better. The staff was incredibly supportive during my treatment.',
    rating: 5,
  },
]

export function SuccessStories() {
  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-2xl font-light uppercase tracking-wider text-ink">
          Success <span className="font-bold">Stories</span>
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {STORIES.map((story) => (
            <div key={story.name} className="rounded-lg bg-white p-8 shadow-sm">
              <div className="mb-4 flex gap-1">
                {Array.from({ length: story.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-brand text-brand" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-mist">&ldquo;{story.quote}&rdquo;</p>
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-bold text-ink">{story.name}</p>
                <p className="text-xs text-mist">{story.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
