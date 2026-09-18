import { CheckCircle } from 'lucide-react'

const benefits = [
  'Verified and trusted listings',
  'Real customer reviews and ratings',
  'Easy and fast listing process',
]

export function WhyUs() {
  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 md:flex-row">
          <div className="w-full md:w-1/2">
            <img
              src="https://picsum.photos/seed/spotlight-whyus/800/600"
              alt="Why choose Spotlight"
              className="rounded-lg object-cover"
              loading="lazy"
            />
          </div>
          <div className="w-full md:w-1/2 md:pl-8">
            <h2 className="mb-4 text-3xl font-light text-primary">Why Us</h2>
            <p className="mb-4 text-body">
              Spotlight connects you with the best local businesses and services. Our curated
              directory ensures you find exactly what you need, when you need it.
            </p>
            <p className="mb-6 text-body">
              Every listing is verified by our team, and real customer reviews help you make
              informed decisions. Join thousands of satisfied users who discover new places every
              day.
            </p>
            <ul className="space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-2 text-body">
                  <CheckCircle className="h-5 w-5 flex-shrink-0 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
