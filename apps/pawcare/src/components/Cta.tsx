import { Phone } from 'lucide-react'

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-night py-20 lg:py-24">
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
        <h2 className="text-3xl font-semibold text-white lg:text-4xl">Why go with Pawcare?</h2>
        <p className="mx-auto mt-4 max-w-xl text-sm font-light leading-relaxed text-gray-300">
          Because we know that even the best care is only as good as the people behind it. 24/7
          support.
        </p>
        <p className="mt-8 inline-flex items-center gap-3 text-2xl font-semibold text-brand">
          <Phone className="h-6 w-6" aria-hidden="true" />
          +555 0000 565
        </p>
      </div>
    </section>
  )
}
