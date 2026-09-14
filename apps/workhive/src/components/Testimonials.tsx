import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="bg-peach py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="mb-12 text-3xl font-bold text-ink sm:text-4xl font-display">
          Spaces that you'd love
        </h2>
        <div className="relative">
          <Quote className="mx-auto mb-6 h-12 w-12 text-primary/30" />
          <blockquote className="text-xl leading-relaxed text-body italic sm:text-2xl">
            "Workhive transformed the way our team works. The spaces are beautifully designed,
            incredibly comfortable, and the community is unmatched. We've found our home base for
            creativity and productivity."
          </blockquote>
          <div className="mt-8">
            <p className="font-semibold text-ink">Sarah Johnson</p>
            <p className="text-sm text-muted">Creative Director, Pixel Studio</p>
          </div>
        </div>
      </div>
    </section>
  )
}
