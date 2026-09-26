import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-periwinkle-50 to-white pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
        <div className="flex justify-center lg:order-2 lg:justify-end">
          <img
            src="https://picsum.photos/seed/velox-portrait/520/600"
            alt="Portrait illustration"
            className="max-h-[520px] w-full max-w-md rounded-t-[10rem] object-cover shadow-2xl"
            loading="eager"
          />
        </div>
        <div className="text-center lg:order-1 lg:text-left">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-periwinkle-400">
            This is me
          </p>
          <h1 className="mt-4 text-4xl font-bold uppercase leading-tight text-gray-900 sm:text-5xl font-[family-name:var(--font-heading)]">
            Travor James
          </h1>
          <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-gray-500 lg:mx-0">
            You will begin to realise why this exercise is called the Dickens Pattern (with
            reference to the ghost showing Scrooge some different futures).
          </p>
          <Button
            variant="primary"
            size="lg"
            className="mt-8 rounded bg-gradient-to-r from-periwinkle-400 to-sky-400 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-lg hover:from-periwinkle-500 hover:to-sky-500"
          >
            Discover Now <ArrowRight className="ml-2 inline h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
