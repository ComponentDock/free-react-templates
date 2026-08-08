const testimonials = [
  {
    quote:
      'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt amet.',
    name: 'Falcon Astle',
    role: 'Google Android',
  },
  {
    quote:
      'If you are looking at blank cassettes on the web, lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt amet.',
    name: 'Falcon Astle',
    role: 'Google Android',
  },
] as const

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-night py-20 dark:bg-gray-900 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[3px] text-brand">OUR TESTIMONIAL</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold uppercase text-white lg:text-4xl">
            What People Say About Us
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <figure key={index} className="border-l-4 border-brand bg-white/5 px-8 py-8">
              <blockquote className="text-base italic leading-relaxed text-white/80">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6">
                <p className="font-display text-lg font-medium text-white">{item.name}</p>
                <p className="mt-1 text-xs uppercase tracking-[2px] text-brand">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
