import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis expedita similique.',
    author: 'John Doe',
    role: 'CEO, Company',
    image: 'https://picsum.photos/seed/turbo-test1/100/100',
  },
  {
    quote:
      'Dolor sit amet consectetur adipisicing elit. Quisquam necessitatibus incidunt ut officiis expedita similique ullam.',
    author: 'Jane Smith',
    role: 'Marketing Director',
    image: 'https://picsum.photos/seed/turbo-test2/100/100',
  },
] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold">Testimonials</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2">
          {testimonials.map((t) => (
            <div key={t.author} className="rounded-lg bg-mist p-8">
              <Quote className="mb-4 h-8 w-8 text-primary-500" />
              <p className="mb-6 text-smoke">{t.quote}</p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.author} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.author}</p>
                  <p className="text-sm text-smoke">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
