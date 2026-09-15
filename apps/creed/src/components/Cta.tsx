import { Users } from 'lucide-react'

export function Cta() {
  return (
    <section className="bg-primary-400 py-16">
      <div className="mx-auto max-w-6xl px-4 text-center text-white">
        <p className="mb-4 text-lg">
          Duis elementum diam eget eros tincidunt, at venenatis nunc tincidunt
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded bg-white px-8 py-3 font-semibold text-primary-500 transition-colors hover:bg-gray-100"
        >
          <Users className="h-5 w-5" />
          Visitors Info
        </a>
      </div>
    </section>
  )
}
