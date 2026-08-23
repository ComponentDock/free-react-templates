import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-blush-400">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            New Styles, Suited for You Unlike Any Other
          </h1>
          <p className="mt-5 max-w-md text-white/85">
            Fresh fashion, curated every season. From statement pieces to everyday essentials,
            Aurora brings you looks that turn heads — without the markup.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-full border-white bg-white text-blush-400 hover:bg-blush-50"
          >
            Send Message <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/aurora-hero/560/640"
            alt="Aurora featured look"
            className="max-h-[560px] w-full max-w-md rounded-t-[10rem] object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
