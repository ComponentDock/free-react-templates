const testimonials = [
  {
    quote:
      'The attorneys at Statute provided exceptional representation during my case. Their expertise and dedication resulted in a favorable outcome that exceeded my expectations.',
    author: 'Sarah Mitchell',
    role: 'Business Owner',
  },
  {
    quote:
      'I was facing serious criminal charges and the team fought tirelessly for my rights. Their strategic approach and courtroom presence made all the difference.',
    author: 'James Rodriguez',
    role: 'Client',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-light-bg py-20 lg:py-[120px]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Testimony</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="rounded bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
            >
              <p className="mb-6 leading-relaxed text-gray-500 italic">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-light text-lg font-bold text-brand">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-gray-800">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
