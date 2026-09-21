import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="py-20 bg-paper">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-ink mb-12">Testimonials</h2>
        <div className="relative">
          <Quote className="mx-auto mb-6 h-10 w-10 text-brand/30" />
          <p className="mb-8 text-lg leading-relaxed text-mist italic">
            FitForge completely transformed my approach to fitness. The coaches are incredible, the
            community is supportive, and the results speak for themselves. I've never felt stronger
            or more confident.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://picsum.photos/seed/fitforge-author/80/80"
              alt="James Smith"
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <div className="font-heading text-lg font-semibold text-ink">James Smith</div>
              <div className="text-sm text-mist">Crossfit Coach</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
