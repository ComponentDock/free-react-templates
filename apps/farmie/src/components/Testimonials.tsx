const testimonials = [
  {
    author: 'Mrs Lara Sullivan',
    role: 'Customer',
    quote:
      'Thank you for your organic products. My children like your products and they use them for breakfast. We are loving the pure milk, freshly picked fruit, and our staple, brown rice bread.',
    seed: 'farmie-testimonial-1',
  },
  {
    author: 'Ajoy Das',
    role: 'Client',
    quote:
      'The quality of the produce is outstanding. Everything arrives fresh and tastes like it was picked the same morning. Delivery is always on time and friendly.',
    seed: 'farmie-testimonial-2',
  },
  {
    author: 'Akash Khan',
    role: 'Customer',
    quote:
      'I have been ordering from Farmie for over a year now. The eggs, vegetables, and dairy are consistently the best I have found anywhere in the city.',
    seed: 'farmie-testimonial-3',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-paper py-14 dark:bg-gray-900 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-extrabold text-black dark:text-white">
          What Our Customers Say
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map(({ author, role, quote, seed }) => (
            <figure key={author} className="m-0">
              <blockquote className="rounded-lg bg-white p-6 text-base font-light italic leading-relaxed text-gray-700 shadow-sm dark:bg-gray-800 dark:text-gray-200">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${seed}/64/64`}
                  alt=""
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <span>
                  <span className="block text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {author}
                  </span>
                  <span className="block text-xs font-light text-gray-400 dark:text-gray-500">
                    {role}
                  </span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
