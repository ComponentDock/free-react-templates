const testimonials = [
  {
    quote:
      'Working with humanitarian aid agencies, we have supported programmes that alleviate suffering through animal welfare.',
    author: 'Jon Miller',
  },
  {
    quote:
      'The team at Leopet treats every animal with patience and kindness, and it shows in how calm our dog is at every visit.',
    author: 'Sarah Mitchell',
  },
  {
    quote:
      'Adopting through Leopet was the best decision we made — the guidance and aftercare have been outstanding.',
    author: 'David Chen',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-night py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
          What Pet Owners Say
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="rounded-2xl bg-white/5 p-8">
              <blockquote className="text-sm font-medium leading-relaxed text-gray-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold text-brand">- {item.author}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
