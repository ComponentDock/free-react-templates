const testimonials = [
  {
    author: 'Ricky Fisher',
    quote:
      'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
    seed: 'doglife-testimonial-1',
  },
  {
    author: 'Ken Davis',
    quote:
      'Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
    seed: 'doglife-testimonial-2',
  },
  {
    author: 'Mellisa Griffin',
    quote:
      'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
    seed: 'doglife-testimonial-3',
  },
  {
    author: 'Robert Steward',
    quote:
      'Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life.',
    seed: 'doglife-testimonial-4',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-serif text-3xl font-extrabold text-black dark:text-white">
          Happy Customers
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map(({ author, quote, seed }) => (
            <figure key={author} className="m-0">
              <blockquote className="rounded-lg bg-white p-6 font-serif text-lg italic leading-relaxed text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                {quote}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${seed}/64/64`}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                  {author}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
