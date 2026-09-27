import { Quote } from 'lucide-react'

interface Testimonial {
  name: string
  role: string
  quote: string
  avatar: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Cordelia Barton',
    role: 'CEO at TechCorp',
    quote:
      "Dwellpoint made finding our new office space effortless. The team's expertise and dedication helped us land the perfect location within budget.",
    avatar: 'https://picsum.photos/seed/dwellpoint-t1/80/80',
  },
  {
    name: 'Marcus Wells',
    role: 'Director of Acquisitions',
    quote:
      "We've closed three deals through Dwellpoint this year alone. Their market knowledge and responsiveness set them apart from other agencies.",
    avatar: 'https://picsum.photos/seed/dwellpoint-t2/80/80',
  },
  {
    name: 'Anika Patel',
    role: 'Homeowner',
    quote:
      'From the first viewing to signing the papers, everything was smooth. Dwellpoint turned a stressful process into a great experience.',
    avatar: 'https://picsum.photos/seed/dwellpoint-t3/80/80',
  },
]

export function Testimonials() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-start gap-12 lg:grid-cols-3">
          <div>
            <h2 className="mb-4 text-3xl font-bold text-gray-800">Client&apos;s Feedback</h2>
            <p className="leading-relaxed text-gray-500">
              Our clients trust us to deliver exceptional real estate services. Here&apos;s what
              they have to say about working with Dwellpoint.
            </p>
          </div>

          <div className="space-y-8 lg:col-span-2">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="flex gap-5 rounded-xl border border-gray-100 p-6 shadow-sm"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                />
                <div>
                  <Quote className="mb-2 h-5 w-5 text-crimson-400" />
                  <p className="mb-3 text-sm leading-relaxed text-gray-500">{t.quote}</p>
                  <h4 className="font-semibold text-gray-800">{t.name}</h4>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
