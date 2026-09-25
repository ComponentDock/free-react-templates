import { PenTool, Code } from 'lucide-react'

const SERVICES = [
  {
    icon: PenTool,
    title: 'Web Design',
    description:
      'Creating beautiful, user-friendly interfaces that engage visitors and drive results.',
  },
  {
    icon: Code,
    title: 'Web Application',
    description: 'Building robust, scalable web applications with modern technologies.',
  },
]

export function About() {
  return (
    <section id="about" className="bg-white py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://picsum.photos/seed/spectra-about/600/700"
              alt="About me"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="mb-2 text-sm font-medium uppercase tracking-[3px] text-brand">
              Welcome
            </span>
            <h2 className="mb-6 text-[40px] font-semibold leading-tight text-dark">About Me</h2>
            <p className="mb-8 leading-relaxed text-text-light">
              I&apos;m a passionate web developer with over 5 years of experience creating digital
              experiences. I specialize in building modern, responsive websites and applications
              that help businesses grow.
            </p>
            <div className="grid gap-6 sm:grid-cols-2">
              {SERVICES.map((service) => (
                <div key={service.title} className="flex gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <service.icon size={24} />
                  </div>
                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-dark">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-text-light">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 inline-flex self-start bg-brand px-8 py-5 shadow-lg">
              <div className="text-center">
                <span className="block text-3xl font-bold text-white">200</span>
                <span className="text-sm font-medium text-white/80">Finished Projects</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
