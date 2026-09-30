import { useState } from 'react'

const testimonials = [
  {
    quote:
      '"Process starts as soon as your clothes commodo diam libero vitae. Mauris blandit aliquet elit.',
    body: 'The automated process starts as soon as your clothes go into the machine. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.',
    name: 'Robert Brown',
    role: 'CEO of Boostly',
  },
  {
    quote:
      '"Everything we shipped last quarter moved faster than we thought possible. The platform just works.',
    body: 'From the first workflow to the final report, the automated process kept our whole team in sync. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla.',
    name: 'Angela Moss',
    role: 'CTO of Northwind Labs',
  },
  {
    quote:
      '"We replaced four tools with one dashboard and never looked back. Our customers noticed first.',
    body: 'Setup took an afternoon and the support team answered every question before we even asked. Nunc ut sem vitae risus tristique posuere.',
    name: 'Daniel Cruz',
    role: 'Founder of Loopstack',
  },
] as const

/** Testimonials: deep plum (#2D0A31) band with a fixed cover photo overlay;
 *  a white card pushed to the right holds the active quote (30px heading,
 *  gray body, black founder name with a small gray role) while dot
 *  indicators below navigate between the three slides. */
export function Testimonials() {
  const [index, setIndex] = useState(0)
  const active = testimonials[index]!

  return (
    <section
      className="bg-plum bg-cover bg-fixed py-[120px]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(45,10,49,0.92), rgba(45,10,49,0.92)), url(https://picsum.photos/seed/boostly-testimonial/1600/800)',
      }}
    >
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="ml-auto bg-white p-[50px_24px_53px] lg:w-[58%] lg:p-[70px_60px_53px]">
          <h3 className="mb-[15px] font-heading text-[30px] font-semibold leading-snug text-ink">
            {active.quote}
          </h3>
          <p className="mb-9 font-body text-lg leading-[1.6] text-body lg:text-xl">{active.body}</p>
          <p className="font-heading text-xl font-semibold text-ink">
            - {active.name}
            <span className="mt-1 block font-body text-xs font-normal text-body">
              {active.role}
            </span>
          </p>
        </div>
        <div className="mt-8 flex justify-end gap-3 pr-1">
          {testimonials.map((testimonial, dotIndex) => (
            <button
              key={testimonial.name}
              type="button"
              aria-label={`Show testimonial ${dotIndex + 1}`}
              aria-current={dotIndex === index ? 'true' : undefined}
              onClick={() => setIndex(dotIndex)}
              className={
                dotIndex === index
                  ? 'h-3 w-3 rounded-full bg-white'
                  : 'h-3 w-3 rounded-full bg-white/40'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
