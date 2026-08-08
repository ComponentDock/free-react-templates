import { Play } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const services = [
  { day: 'Sunday', name: 'Sunday Worship', time: '9:00 AM & 11:00 AM' },
  { day: 'Wednesday', name: 'Wednesday Bible Study', time: '7:00 PM' },
  { day: 'Friday', name: 'Youth Group', time: '6:30 PM' },
] as const

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-900">
      <img
        src="https://picsum.photos/seed/sanctuary-1/1600/900"
        alt="Congregation gathered during a Sunday service"
        loading="eager"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-4xl flex-col items-center justify-center px-4 py-32 text-center">
        <h1 className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
          A Place to Belong
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
          Whether you&apos;re exploring faith for the first time or looking for a church home,
          you&apos;re welcome here. Join our community of believers as we grow together.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-white px-8 py-4 text-base font-medium text-primary-700 hover:bg-primary-50"
          >
            Plan Your Visit
          </ButtonLink>
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-medium text-white transition-all hover:bg-white/10"
          >
            <Play className="h-5 w-5" aria-hidden="true" />
            Watch Online
          </a>
        </div>

        {/* Join Us This Week */}
        <div className="mt-16 w-full max-w-3xl rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-sm sm:p-8">
          <h2 className="font-serif text-xl font-semibold text-white">Join Us This Week</h2>
          <div className="mt-6 grid gap-6 text-left sm:grid-cols-3">
            {services.map((service) => (
              <div key={service.name}>
                <p className="text-sm font-medium text-primary-100">{service.day}</p>
                <p className="mt-1 font-semibold text-white">{service.name}</p>
                <p className="mt-1 text-sm font-semibold text-gold">{service.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
