import { useState } from 'react'
import { Quote } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const testimonials = [
  {
    name: 'Alice Morgan',
    role: 'Marketing Manager',
    text: 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.',
  },
  {
    name: 'Brian Foster',
    role: 'Interface Designer',
    text: 'The best cloud platform I have used. Everything works seamlessly and the support team is incredibly responsive.',
  },
  {
    name: 'Carla Simmons',
    role: 'UI Designer',
    text: 'Our team migrated to Cirrus last quarter and productivity has never been higher. The dashboard is a joy to use.',
  },
  {
    name: 'David Chen',
    role: 'Web Developer',
    text: 'Reliable, fast, and well-documented. I recommend Cirrus to every developer looking for cloud infrastructure.',
  },
  {
    name: 'Elena Price',
    role: 'System Analyst',
    text: 'The analytics and monitoring tools alone are worth the investment. Cirrus keeps our systems healthy around the clock.',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]!

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1))
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1))

  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-bold text-heading">What Users Saying</h2>
        <div className="relative">
          <div className="flex justify-center">
            <div className="max-w-xl text-center">
              <div className="relative mx-auto mb-6 inline-block">
                <img
                  src={`https://picsum.photos/seed/cirrus-testi-${current}/150/150`}
                  alt={t.name}
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />
                <div className="absolute -right-1 -bottom-1 flex h-10 w-10 items-center justify-center rounded-full bg-brand-green text-white">
                  <Quote size={20} />
                </div>
              </div>
              <blockquote className="mb-4 text-base leading-relaxed text-muted">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <p className="text-lg font-bold text-heading">{t.name}</p>
              <p className="text-sm text-muted">{t.role}</p>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
          >
            &lsaquo;
          </button>
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-gray-100 p-3 transition-colors hover:bg-gray-200"
          >
            &rsaquo;
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={cn(
                  'h-2.5 w-2.5 rounded-full transition-colors',
                  i === current ? 'bg-brand-green' : 'bg-gray-300',
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
