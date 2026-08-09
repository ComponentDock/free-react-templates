import { Gem } from 'lucide-react'

export function Welcome() {
  return (
    <section id="about" className="bg-white py-24 transition-colors dark:bg-gray-950 lg:py-32">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-bold text-ink dark:text-white sm:text-4xl">
          Welcome to Locks <span className="text-brand">A Hair Salon</span>
        </h2>
        <Gem className="mx-auto mt-5 h-8 w-8 text-brand" aria-hidden="true" />
        <p className="mt-6 leading-relaxed text-mist">
          On her way she met a copy. The copy warned the Little Blind Text, that where it came from
          it would have been rewritten a thousand times and everything that was left from its origin
          would be the word &quot;and&quot;. So step in for a cut, a shave, or a full restyle — and
          leave looking sharp.
        </p>
      </div>
    </section>
  )
}
