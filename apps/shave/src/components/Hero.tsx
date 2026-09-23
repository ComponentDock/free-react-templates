import { ArrowRight } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-r from-pink-400 to-purple-400">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
        <div className="text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            HairStyle is a<br />
            Must try Fashion
            <br />
            for all Occasion
          </h1>
          <p className="mt-5 max-w-md text-white/85">
            Expert grooming and classic styling at its finest. From precision cuts to relaxing
            treatments, Shave delivers a premium barbershop experience for every occasion.
          </p>
          <Button
            variant="outline"
            size="lg"
            className="mt-8 rounded-full border-white bg-white text-pink-400 hover:bg-pink-50"
          >
            View More <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/shave-hero/560/640"
            alt="Shave barbershop featured styling"
            className="max-h-[560px] w-full max-w-md rounded-2xl object-cover shadow-2xl"
            loading="eager"
          />
        </div>
      </div>
    </section>
  )
}
