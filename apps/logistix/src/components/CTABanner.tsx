import { ArrowRight } from 'lucide-react'

export function CTABanner() {
  return (
    <section className="bg-surface py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div>
          <h2 className="font-display text-2xl font-bold text-gray-900 sm:text-3xl">
            Need Help? Get Free quote!
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Praesent eu rhoncus nibh. Quisque tincidunt, nisi in commodo
          </p>
        </div>
        <a
          href="#"
          className="inline-flex items-center gap-2 border-2 border-white bg-brand px-8 py-4 text-sm font-medium uppercase text-white transition-colors hover:bg-white hover:text-brand"
        >
          Learn More
          <ArrowRight size={16} />
        </a>
      </div>
    </section>
  )
}
