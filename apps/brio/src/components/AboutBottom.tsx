import { ArrowRight, Rocket } from 'lucide-react'

export function AboutBottom() {
  return (
    <section className="bg-brio-light">
      <div className="mx-auto grid min-h-[400px] items-center lg:grid-cols-2">
        <div className="space-y-6 px-4 py-12 lg:px-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brio-pink/10">
                <Rocket className="text-brio-pink" size={24} />
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-brio-dark">Powerful Performance</h2>
          <p className="text-brio-muted">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-full border border-brio-pink bg-brio-pink px-8 py-3 text-sm font-medium text-white transition hover:bg-brio-pink/90"
          >
            Learn More
            <ArrowRight size={16} />
          </a>
        </div>
        <div className="relative overflow-hidden">
          <img
            src="https://picsum.photos/seed/brio-about2/800/500"
            alt="About our app"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
