import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section data-testid="testimonials" className="bg-white py-20 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-brand-500 dark:text-brand-400">
            Testimonials
          </p>
          <h2 className="font-heading text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            What Clients Say
          </h2>
        </div>

        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 flex justify-center">
            <Quote className="h-10 w-10 text-brand-300 dark:text-brand-600" />
          </div>
          <blockquote className="mb-8 text-xl leading-relaxed text-gray-700 sm:text-2xl dark:text-gray-300">
            Alex transformed our entire product experience. Their ability to understand both the
            user and the business is rare. The redesign led to a 40% increase in user engagement.
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://picsum.photos/seed/client-sarah/80/80"
              alt="Sarah Johnson"
              className="h-12 w-12 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <p className="font-semibold text-gray-900 dark:text-white">Sarah Johnson</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">VP of Product, TechCorp</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
