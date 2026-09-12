import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dig nissimos praesentium fugiat odit reprehenderit.',
    name: 'John Doe',
    role: 'CEO, TechCorp',
  },
  {
    quote:
      'Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa.',
    name: 'Jane Smith',
    role: 'Marketing Director, BizInc',
  },
  {
    quote:
      'Aperiam neque id, illum laudantium consequuntur sunt nisi. Dolores molestias blanditiis sequi ratione.',
    name: 'Mark Wilson',
    role: 'Founder, StartupHub',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-brand py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 font-display text-3xl font-bold uppercase md:text-4xl">
            Testimonials
          </h2>
          <p className="mx-auto max-w-2xl text-white/70">
            Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam
            temporibus culpa dolore molestias blanditiis consequuntur sunt nisi.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-white/10 p-6 backdrop-blur-sm">
              <Quote className="mb-4 text-accent" size={32} />
              <p className="mb-6 italic text-white/80">{t.quote}</p>
              <div>
                <span className="block font-display text-sm font-bold uppercase">{t.name}</span>
                <span className="text-xs text-white/60">{t.role}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
