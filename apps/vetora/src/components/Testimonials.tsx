const testimonials = [
  {
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    author: 'Lloyd Gomez',
    role: 'Customer',
  },
  {
    quote:
      'The team took wonderful care of our puppy during his first grooming — calm, gentle, and clearly experts at what they do.',
    author: 'Emily Carter',
    role: 'Customer',
  },
  {
    quote:
      'Booking a vet visit was effortless and the follow-up care has been outstanding. Our cat is healthier than ever.',
    author: 'Marcus Reed',
    role: 'Customer',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="py-16 dark:bg-gray-950 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-gray-900 sm:text-4xl dark:text-white">
          happy Customers Says
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.author} className="rounded-2xl bg-paper p-8 dark:bg-gray-900">
              <blockquote className="text-sm font-medium leading-relaxed text-gray-600 dark:text-gray-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm font-bold text-brand">
                - {item.author}, {item.role}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
