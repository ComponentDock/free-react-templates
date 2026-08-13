const testimonials = [
  {
    quote:
      'We feel so lucky to have watched their love grow — the celebration was pure joy from the first note to the last dance.',
    name: 'Roger Scott',
    role: 'Marketing Manager',
    seed: 'nuptial-9',
  },
  {
    quote:
      'Every detail was beautiful beyond words — a wedding that felt like a warm, heartfelt embrace for everyone there.',
    name: 'Grace Whitfield',
    role: 'Wedding Planner',
    seed: 'nuptial-10',
  },
  {
    quote:
      'Being part of their day was a blessing — their happiness was so real you could feel it in every corner of the room.',
    name: 'Daniel Hayes',
    role: 'Best Man',
    seed: 'nuptial-11',
  },
] as const

export function SweetMessages() {
  return (
    <section
      id="greetings"
      className="bg-mist-50 py-16 transition-colors dark:bg-gray-900 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-script text-5xl text-pink-500 sm:text-6xl">
          Sweet Messages
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-xl border border-stone-200 bg-white p-8 text-center shadow-sm transition-colors dark:border-stone-800 dark:bg-gray-950"
            >
              <img
                src={`https://picsum.photos/seed/${testimonial.seed}/160/160`}
                alt=""
                className="mx-auto h-20 w-20 rounded-full object-cover"
                loading="lazy"
              />
              <blockquote className="mt-5 text-sm leading-relaxed text-ink-700 italic dark:text-stone-300">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5">
                <p className="font-semibold text-ink-900 dark:text-white">{testimonial.name}</p>
                <p className="mt-0.5 text-xs tracking-widest text-pink-500 uppercase">
                  {testimonial.role}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
