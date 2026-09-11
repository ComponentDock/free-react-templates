import { Quote } from 'lucide-react'

export function Testimonial() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <blockquote>
          <Quote className="mx-auto h-10 w-10 text-primary-400" aria-hidden="true" />
          <p className="mt-6 text-lg leading-relaxed text-ink">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus totam sit delectus
            earum facere ex ea sunt, eos?
          </p>
          <cite className="mt-6 block not-italic">
            <span className="font-semibold text-ink">Mike Dorney</span>
            <span className="ml-1 text-gray-500">— CEO and Co-Founder</span>
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
