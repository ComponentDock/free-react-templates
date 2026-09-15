import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Marketing Director',
    quote:
      'Having a virtual assistant has transformed how we handle daily operations. The efficiency gains are remarkable.',
    avatar: 'https://picsum.photos/seed/valet-test1/80/80',
  },
  {
    name: 'Michael Chen',
    role: 'Startup Founder',
    quote:
      'I was skeptical at first, but the quality of work exceeded all expectations. Highly recommended for any growing business.',
    avatar: 'https://picsum.photos/seed/valet-test2/80/80',
  },
  {
    name: 'Emily Rodriguez',
    role: 'E-commerce Owner',
    quote:
      'The virtual assistant service helped me scale my business without the overhead of hiring full-time staff.',
    avatar: 'https://picsum.photos/seed/valet-test3/80/80',
  },
  {
    name: 'David Kim',
    role: 'Consultant',
    quote:
      'Professional, reliable, and incredibly skilled. My virtual assistant handles everything from scheduling to research.',
    avatar: 'https://picsum.photos/seed/valet-test4/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-x-0 top-0 h-48 bg-[#21bf73]" />
      <div className="relative z-10 container mx-auto px-4 pt-12">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-white">
            Testimonial
          </p>
          <h2 className="text-3xl font-bold text-white">Happy Clients</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded bg-white p-6 shadow-lg">
              <Quote className="mb-4 h-8 w-8 text-gray-300" />
              <p className="mb-4 text-sm text-gray-600">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
