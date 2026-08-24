import { Play } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section id="home" className="bg-gradient-to-br from-pulse-400 to-accent-400">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            We Are Digital Agency Helping To Boost Your Sales
          </h1>
          <p className="mt-6 max-w-lg text-lg text-white/85">
            We craft digital experiences that drive results. From strategy to execution, we help
            businesses grow in the digital landscape.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full border-white bg-white text-pulse-700 hover:bg-white/90"
            >
              START A PROJECT
            </Button>
            <Button variant="ghost" size="lg" className="rounded-full text-white hover:bg-white/10">
              <Play className="mr-2 h-4 w-4" aria-hidden="true" />
              WATCH THE VIDEO
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
