import { Rocket, Sun } from 'lucide-react'

export function AboutTop() {
  return (
    <section id="about" className="bg-brio-light">
      <div className="mx-auto grid min-h-[400px] items-center lg:grid-cols-2">
        <div className="relative overflow-hidden">
          <img
            src="https://picsum.photos/seed/brio-about1/800/500"
            alt="About our app"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="space-y-8 px-4 py-12 lg:px-12">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brio-pink/10">
                <Rocket className="text-brio-pink" size={24} />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brio-dark">
                Becoming A DVD Repair Expert Online
              </h3>
              <p className="text-brio-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brio-yellow/20">
                <Sun className="text-brio-yellow" size={24} />
              </div>
            </div>
            <div>
              <h3 className="mb-2 text-xl font-semibold text-brio-dark">
                Becoming A DVD Repair Expert Online
              </h3>
              <p className="text-brio-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
