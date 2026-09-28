const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Mellisa Howard',
    role: 'CEO, XYZ Company',
    image: 'foodnest-person1',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Mike Richardson',
    role: 'CEO, XYZ Company',
    image: 'foodnest-person2',
  },
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics.',
    name: 'Charles White',
    role: 'CEO, XYZ Company',
    image: 'foodnest-person3',
  },
] as const

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="mb-12 text-center">
        <h2 className="mb-4 text-3xl font-bold text-heading">Testimonial</h2>
      </div>
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="space-y-8">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="rounded-lg bg-gray-50 p-6 italic text-mist">
              <p className="mb-4 leading-relaxed">&ldquo; {t.quote} &rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.image}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div>
                  <h4 className="text-sm font-bold text-heading">{t.name}</h4>
                  <p className="text-xs text-mist">{t.role}</p>
                </div>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
