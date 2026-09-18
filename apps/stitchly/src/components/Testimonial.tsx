import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="bg-testimonial py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl px-4 sm:px-6">
        <div className="text-center">
          <Quote className="mx-auto mb-6 h-10 w-10 text-brand/40" aria-hidden="true" />
          <blockquote className="text-lg leading-relaxed text-mist italic">
            "Stitchly delivered a bespoke suit that exceeded every expectation. The fit is
            impeccable, the fabric quality outstanding, and the attention to detail truly sets them
            apart. I would not go anywhere else for my tailoring needs."
          </blockquote>
          <div className="mt-8 flex items-center justify-center gap-4">
            <img
              src="https://picsum.photos/seed/stitchly-founder/80/80"
              alt=""
              className="h-14 w-14 rounded-full object-cover"
              loading="lazy"
            />
            <div className="text-left">
              <span className="block font-display text-base font-bold text-ink dark:text-white">
                Robert Brown
              </span>
              <span className="text-sm text-mist">Satisfied Client</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
