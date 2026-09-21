import { Check, ArrowRight } from 'lucide-react'

const benefits = [
  'Personalized training programs for all levels',
  'Access to premium equipment and facilities',
  'Nutrition coaching and meal planning',
  'Community support and accountability groups',
]

export function Subscription() {
  return (
    <section id="subscription" className="py-20 bg-paper">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-6">
              Get your subscription
            </h2>
            <p className="mb-8 leading-relaxed text-mist">
              Join FitForge today and unlock access to world-class training facilities, expert
              coaching, and a supportive community that will push you to your limits and help you
              achieve your fitness goals.
            </p>
            <ul className="mb-8 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                    <Check className="h-3 w-3 text-brand" />
                  </div>
                  <span className="text-sm text-ink">{benefit}</span>
                </li>
              ))}
            </ul>
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 rounded bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-dark transition-colors"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Image */}
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/fitforge-sub/600/400"
              alt="Fitness training session"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
