import { PenTool, AppWindow } from 'lucide-react'

const services = [
  {
    icon: PenTool,
    title: 'Web Design',
    description: 'Crafting pixel-perfect interfaces that engage users and drive results.',
  },
  {
    icon: AppWindow,
    title: 'Web Application',
    description: 'Building scalable, performant web applications with modern frameworks.',
  },
] as const

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="https://picsum.photos/seed/forger-about/600/700"
                alt="About me"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-3">
            <span className="mb-2 inline-block rounded-full bg-brand px-4 py-1 text-sm font-medium text-white">
              Welcome
            </span>
            <h2 className="mt-4 text-3xl font-bold">About Me</h2>
            <p className="mt-4 leading-relaxed text-gray-600">
              A passionate developer who turns ideas into digital reality. With years of experience
              in web design and development, I create solutions that are both beautiful and
              functional.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              {services.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-brand/10">
                    <service.icon className="h-6 w-6 text-brand" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm text-gray-500">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-block rounded-lg bg-brand px-6 py-4">
              <p className="text-2xl font-bold text-white">200</p>
              <p className="text-sm text-white/80">Finished Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
