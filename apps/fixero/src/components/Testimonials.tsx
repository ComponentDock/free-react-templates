import { Testimonial } from './Testimonial'

const testimonials = [
  {
    quote:
      'Fixero delivered our renovation project on time and within budget. Their attention to detail and professional approach exceeded our expectations.',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    avatar: 'https://picsum.photos/seed/fixero-person1/100/100',
  },
  {
    quote:
      'We hired Fixero for our office build-out and could not be happier with the result. Highly recommended for any construction project.',
    name: 'Michael Chen',
    role: 'Business Owner',
    avatar: 'https://picsum.photos/seed/fixero-person2/100/100',
  },
]

export function Testimonials() {
  return (
    <section className="bg-gray-50 py-16 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold text-ink dark:text-white">Testimonials</h2>
          <div className="mx-auto mt-3 h-1 w-16 bg-brand" />
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <Testimonial key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
