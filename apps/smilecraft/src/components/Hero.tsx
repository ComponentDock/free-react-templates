import { Calendar } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[600px] items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/smilecraft-1/1600/900)',
      }}
    >
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center justify-center gap-2 text-sm text-white/80">
            <li>
              <a href="#home" className="hover:text-white">
                Home
              </a>
            </li>
            <li aria-hidden="true">/</li>
            <li aria-current="page">Welcome</li>
          </ol>
        </nav>
        <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
          Modern Dentistry in a Calm and Relaxed Environment
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
          Experience exceptional dental care with our team of skilled professionals. We combine
          advanced technology with a gentle approach to give you the perfect smile.
        </p>
        <div className="mt-8">
          <ButtonLink
            href="#contact"
            className="inline-flex items-center gap-2 rounded bg-primary-300 px-8 py-3 text-sm font-bold text-white hover:bg-primary-400"
          >
            <Calendar className="h-4 w-4" aria-hidden="true" />
            Make an Appointment
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
