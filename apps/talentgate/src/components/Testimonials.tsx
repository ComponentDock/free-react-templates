import { Quote } from 'lucide-react'
import { useState, useEffect, useCallback } from 'react'

const TESTIMONIALS = [
  {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    quote:
      'TalentGate helped me find my dream job in just two weeks. The platform is incredibly user-friendly!',
    photo: 'https://picsum.photos/seed/testimonial-1/100/100',
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager',
    quote: "As an employer, I've found amazing candidates through TalentGate. Highly recommended!",
    photo: 'https://picsum.photos/seed/testimonial-2/100/100',
  },
  {
    name: 'Emily Davis',
    role: 'UX Designer',
    quote:
      "The job matching is spot-on. I received relevant opportunities from day one. Can't praise it enough.",
    photo: 'https://picsum.photos/seed/testimonial-3/100/100',
  },
]

export function Testimonials() {
  const [active, setActive] = useState(0)

  const next = useCallback(() => {
    setActive((prev) => (prev + 1) % TESTIMONIALS.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [next])

  const current = TESTIMONIALS[active]!

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-12 text-3xl font-bold text-dark-overlay">Happy Clients</h2>
        <div className="relative">
          <div className="mb-6">
            <img
              src={current.photo}
              alt={current.name}
              className="mx-auto h-16 w-16 rounded-full object-cover"
            />
          </div>
          <Quote size={24} className="mx-auto mb-4 text-brand-blue/30" />
          <p className="mb-4 text-lg italic text-gray-600">&ldquo;{current.quote}&rdquo;</p>
          <h4 className="font-semibold text-dark-overlay">{current.name}</h4>
          <p className="text-sm text-gray-500">{current.role}</p>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === active ? 'bg-brand-blue' : 'bg-gray-300'
                }`}
                aria-label={`Show testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
