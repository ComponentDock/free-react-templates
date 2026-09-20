const testimonials = [
  {
    name: 'Sarah Johnson',
    quote:
      'Studium transformed my career. The courses are top-notch and the instructors are incredibly supportive.',
    seed: 'studium-test1',
  },
  {
    name: 'Michael Chen',
    quote: 'I loved the flexibility. I could learn at my own pace and still get certified.',
    seed: 'studium-test2',
  },
  {
    name: 'Emily Rodriguez',
    quote: 'The community here is amazing. I connected with professionals worldwide.',
    seed: 'studium-test3',
  },
]

export function Testimonials() {
  return (
    <section className="bg-brand-light-alt py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <h2 className="mb-12 text-3xl font-bold text-brand-text md:text-4xl">
          What Are Students Says
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl bg-white p-8 shadow-md">
              <p className="mb-6 italic text-brand-muted">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="font-semibold text-brand-text">{t.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
