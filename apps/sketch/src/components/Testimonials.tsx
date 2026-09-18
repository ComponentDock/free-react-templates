const testimonials = [
  {
    quote:
      'There live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    name: 'Adam Aderson',
    role: 'Head of Business Development',
    imageSeed: 'sketch-person-1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    imageSeed: 'sketch-person-2',
  },
  {
    quote:
      'Separate they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean of a large language.',
    name: 'James Cooper',
    role: 'Product Manager',
    imageSeed: 'sketch-person-3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white p-8 text-center shadow-sm">
              <img
                src={`https://picsum.photos/seed/${t.imageSeed}/100/100`}
                alt={t.name}
                className="mx-auto mb-4 h-16 w-16 rounded-full object-cover"
                width={64}
                height={64}
              />
              <blockquote className="mb-6 text-sm italic text-gray-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <div>
                <h4 className="text-sm font-bold text-heading">{t.name}</h4>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
