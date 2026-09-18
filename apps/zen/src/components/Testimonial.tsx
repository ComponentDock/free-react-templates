import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-24"
      style={{ backgroundImage: "url('https://picsum.photos/seed/zen-testimonial/1920/900')" }}
    >
      <div className="absolute inset-0 bg-zen-purple/60" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <Quote className="mx-auto mb-6 h-12 w-12 text-zen-yellow" aria-hidden="true" />
        <span className="mb-2 block text-xs font-medium uppercase tracking-[1px] text-white/80">
          Beginner & Advanced
        </span>
        <h3 className="mb-10 text-2xl font-bold uppercase tracking-[2px] text-white">
          Meditation Sessions
        </h3>
        <blockquote className="mb-8 text-lg leading-relaxed text-white/90">
          &ldquo;Zen transformed my approach to wellness. The meditation sessions
          helped me find a sense of calm I never knew existed. The instructors
          are patient, knowledgeable, and genuinely caring. I recommend this
          studio to anyone seeking balance in their life.&rdquo;
        </blockquote>
        <cite className="not-italic">
          <span className="mb-1 block text-base font-semibold text-white">Maria Smith</span>
          <span className="text-sm text-white/70">Student</span>
        </cite>
      </div>
    </section>
  )
}
