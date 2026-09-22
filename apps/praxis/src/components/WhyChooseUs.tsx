import { Shield, UserCheck, ThumbsUp } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Only Top Products',
    text: 'We use only the highest quality implants and materials, sourced from trusted medical suppliers worldwide.',
  },
  {
    icon: UserCheck,
    title: 'The Best Doctors',
    text: 'Our board-certified surgeons have decades of combined experience in aesthetic and reconstructive procedures.',
  },
  {
    icon: ThumbsUp,
    title: 'Great Feedback',
    text: 'Thousands of satisfied patients trust us with their care, reflected in our outstanding review ratings.',
  },
]

export function WhyChooseUs() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/praxis-clinic/600/500"
              alt="Clinic interior"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <p className="mb-1 text-sm font-semibold uppercase tracking-widest text-coral-400">
              Why Us
            </p>
            <h2 className="mb-4 text-3xl font-bold text-gray-900">Why choose us?</h2>
            <p className="mb-8 leading-relaxed text-gray-500">
              Our commitment to excellence sets us apart. From the initial consultation to
              post-procedure care, we ensure every step of your journey is comfortable and
              rewarding.
            </p>
            <ul className="flex flex-col gap-6">
              {features.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-coral-100">
                    <Icon className="h-5 w-5 text-coral-500" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
