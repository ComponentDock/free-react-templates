import { Quote } from 'lucide-react'

export function Testimonials() {
  return (
    <section className="bg-dark-900 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">What Client Says</h2>
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <Quote className="mx-auto mb-6 h-10 w-10 text-primary-400" />
          <p className="mb-6 text-lg text-gray-300">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
            there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
            the Semantics, a large language ocean.
          </p>
          <div className="flex items-center justify-center gap-4">
            <img
              src="https://picsum.photos/seed/roost-testimonial/60/60"
              alt="Jeff Freshman"
              className="h-12 w-12 rounded-full object-cover"
            />
            <div className="text-left">
              <p className="font-semibold text-white">Jeff Freshman</p>
              <p className="text-sm text-gray-400">Satisfied Client</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
