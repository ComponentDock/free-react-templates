import { ArrowRight, Download } from 'lucide-react'
import { Button, ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center overflow-hidden bg-gradient-to-br from-primary-500 to-accent-400 pt-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        {/* Text */}
        <div className="text-white">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest opacity-80">Hello</p>
          <h1 className="mb-4 font-display text-4xl font-bold uppercase leading-tight md:text-5xl">
            I am Kael
          </h1>
          <h2 className="mb-8 font-display text-xl font-medium uppercase opacity-90">
            Senior Developer
          </h2>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-white text-primary-500 hover:bg-gray-100">
              <span className="flex items-center gap-2">
                Hire Me <ArrowRight className="h-4 w-4" />
              </span>
            </Button>
            <ButtonLink
              href="#"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary-500"
            >
              <span className="flex items-center gap-2">
                Get CV <Download className="h-4 w-4" />
              </span>
            </ButtonLink>
          </div>
        </div>

        {/* Portrait placeholder */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="https://picsum.photos/seed/kael-portrait/500/600"
            alt="Portrait of Kael"
            className="rounded-2xl object-cover shadow-2xl"
            width={500}
            height={600}
          />
        </div>
      </div>
    </section>
  )
}
