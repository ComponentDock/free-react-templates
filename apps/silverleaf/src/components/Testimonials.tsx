const testimonials = [
  {
    quote:
      'The care my mother receives here is exceptional. The staff truly treats every resident like family.',
    author: 'Sarah Johnson',
    role: 'Family Member',
    avatar: 'https://picsum.photos/seed/silverleaf-person1/80/80',
  },
  {
    quote: 'I have never felt more at home. The activities and community make every day enjoyable.',
    author: 'Robert Williams',
    role: 'Resident',
    avatar: 'https://picsum.photos/seed/silverleaf-person2/80/80',
  },
  {
    quote:
      'Professional, compassionate, and dedicated. Silverleaf sets the standard for elderly care.',
    author: 'Emily Davis',
    role: 'Healthcare Professional',
    avatar: 'https://picsum.photos/seed/silverleaf-person3/80/80',
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.author} className="relative bg-white p-8 text-center shadow-sm">
              {/* Avatar overlapping top */}
              <img
                src={t.avatar}
                alt={t.author}
                className="mx-auto -mt-12 mb-4 h-[80px] w-[80px] rounded-full border-4 border-white object-cover shadow"
                loading="lazy"
              />
              <blockquote className="mb-4 font-display italic leading-relaxed text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <cite className="not-italic">
                <span className="block text-sm font-semibold text-gray-900">{t.author}</span>
                <span className="text-xs text-gray-500">{t.role}</span>
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
