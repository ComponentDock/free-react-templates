import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Jean Smith',
    avatar: 'https://picsum.photos/seed/lens-person-1/100/100',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde tenetur quis facilis quam optio voluptate totam placeat, doloremque.',
  },
  {
    id: 2,
    name: 'Maria Johnson',
    avatar: 'https://picsum.photos/seed/lens-person-2/100/100',
    quote:
      'Sit repellat ipsum dolor fugit similique itaque maxime saepe ipsam. Velit, harum! Magnam quasi voluptates delectus nemo.',
  },
] as const

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const active = testimonials[current]!

  return (
    <section id="testimonials" className="py-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        <h2 className="mb-12 text-4xl font-bold uppercase text-white">Testimonial</h2>
        <div className="relative">
          <figure className="mx-auto mb-4 w-24">
            <img src={active.avatar} alt={active.name} className="w-full rounded-full" />
          </figure>
          <p className="mb-4 text-white">
            <strong>{active.name}</strong>
          </p>
          <blockquote className="text-gray-300 italic">&ldquo;{active.quote}&rdquo;</blockquote>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setCurrent(i)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  i === current ? 'bg-brand' : 'bg-gray-600'
                }`}
                aria-label={`Show testimonial from ${t.name}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
