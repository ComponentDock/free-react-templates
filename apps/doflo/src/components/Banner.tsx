import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Banner() {
  return (
    <section
      id="home"
      className="relative flex min-h-[500px] items-center bg-brand-400 lg:min-h-[650px]"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:px-8">
        <div className="flex flex-col justify-center text-white">
          <p className="mb-3 text-lg font-medium">We are digital agency</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Digital and innovative idea
          </h1>
          <div className="mt-8">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white bg-white text-brand-400 hover:bg-brand-50"
            >
              Explore Work <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
        <div className="hidden items-center justify-center lg:flex">
          <img
            src="https://picsum.photos/seed/doflo-hero/520/400"
            alt="Doflo digital agency showcase"
            className="w-full max-w-md rounded-lg object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
