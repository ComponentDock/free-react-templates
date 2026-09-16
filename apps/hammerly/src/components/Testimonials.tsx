import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dig nissimos praesentium fugiat odit reprehenderit.',
    name: 'John Doe',
    role: 'CEO, TechCorp',
    seed: 'hammerly-test-1',
  },
  {
    quote:
      'Natus totam voluptatibus animi aspernatur ducimus quas obcaecati mollitia quibusdam temporibus culpa.',
    name: 'Jane Smith',
    role: 'Marketing Director, BizInc',
    seed: 'hammerly-test-2',
  },
  {
    quote:
      'Aperiam neque id, illum laudantium consequuntur sunt nisi. Dolores molestias blanditiis sequi ratione.',
    name: 'Mark Wilson',
    role: 'Founder, StartupHub',
    seed: 'hammerly-test-3',
  },
] as const

export function Testimonials() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-12 border-l-4 border-brand pl-4">
          <h2 className="font-section text-3xl font-bold uppercase md:text-4xl">Client Says</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-lg bg-paper p-6 shadow-sm">
              <Quote className="mb-4 text-brand" size={32} />
              <p className="mb-6 italic text-body">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                  width={80}
                  height={80}
                  loading="lazy"
                />
                <div>
                  <span className="block font-heading text-sm font-bold uppercase text-ink">
                    {t.name}
                  </span>
                  <span className="text-xs text-body">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
