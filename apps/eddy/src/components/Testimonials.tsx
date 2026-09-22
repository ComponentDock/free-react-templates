import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section aria-label="Testimonials" className="bg-charcoal py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <Quote className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
        <blockquote className="mt-6 font-heading text-2xl leading-relaxed text-white sm:text-3xl">
          &ldquo;An absolutely stunning resort! The views are breathtaking, the rooms are luxurious,
          and the staff goes above and beyond. We will definitely be returning next year.&rdquo;
        </blockquote>
        <div className="mt-8">
          <p className="text-lg font-semibold text-white">Samantha Brown</p>
          <p className="text-sm text-gray-400">Travel Blogger</p>
        </div>
      </div>
    </section>
  )
}
