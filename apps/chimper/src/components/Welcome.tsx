import { MessageCircle, Paintbrush, Play, Puzzle, Smartphone } from 'lucide-react'

const services = [
  { title: 'Web Design', icon: Smartphone },
  { title: 'Branding & Identity', icon: Puzzle },
  { title: 'Art Direction', icon: Paintbrush },
  { title: 'Copywriting', icon: MessageCircle },
] as const

export function Welcome() {
  return (
    <section id="services" className="bg-band py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="flex items-center gap-5">
              <a
                href="https://vimeo.com/317571768"
                target="_blank"
                rel="noreferrer"
                aria-label="Play the welcome video"
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white transition-colors hover:bg-primary-700"
              >
                <Play className="h-5 w-5 fill-current" aria-hidden="true" />
              </a>
              <h2 className="text-xl font-bold leading-snug sm:text-2xl">
                Welcome To Chimper An Awward Winning Web Agency
              </h2>
            </div>
            <img
              src="https://picsum.photos/seed/chimper-about/640/480"
              alt="Chimper studio team at work"
              className="mt-8 w-full rounded-lg object-cover"
            />
          </div>

          <div className="grid gap-10 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = service.icon
              return (
                <div key={service.title}>
                  <h3 className="flex items-center gap-3 text-lg font-bold">
                    <Icon className="h-7 w-7 shrink-0 text-primary-400" aria-hidden="true" />
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ab nihil quam
                    nesciunt.
                  </p>
                  <p className="mt-3">
                    <a
                      href="#services"
                      className="text-sm text-white underline underline-offset-4 transition-colors hover:no-underline"
                    >
                      Read More
                    </a>
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
