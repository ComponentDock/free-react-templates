import { CalendarCheck, Award, Clock, BadgeDollarSign } from 'lucide-react'

const features = [
  {
    icon: CalendarCheck,
    title: 'Easy Booking',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Award,
    title: 'Experience',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: Clock,
    title: 'Flexible Schedule',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
  {
    icon: BadgeDollarSign,
    title: 'Best Price Guarantee',
    desc: 'A small river named Duden flows by their place and supplies it with the necessary regelialia.',
  },
]

export function Features() {
  return (
    <section id="services" className="relative overflow-hidden py-20">
      {/* Gradient bg: peach → tan → teal */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-300/35 via-amber-200/35 to-tooth-teal/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6">
        <h2 className="mb-12 text-center text-2xl font-bold uppercase tracking-[3px] text-tooth-dark-blue">
          Make An Appointment
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {/* Features list */}
          <div className="flex flex-col gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-tooth-teal-light">
                  <Icon className="h-6 w-6 text-tooth-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-tooth-dark-blue">{title}</h3>
                  <p className="mt-1 text-sm text-tooth-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Appointment form */}
          <div id="appointment" className="rounded-lg bg-white p-8 shadow-lg">
            <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-tooth-blue focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-tooth-blue focus:outline-none"
              />
              <input
                type="date"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-tooth-blue focus:outline-none"
              />
              <input
                type="time"
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-tooth-blue focus:outline-none"
              />
              <select
                className="rounded border border-gray-300 px-4 py-3 text-sm focus:border-tooth-blue focus:outline-none"
                defaultValue=""
              >
                <option value="" disabled>
                  Select Service
                </option>
                <option value="general">General Checkup</option>
                <option value="cleaning">Teeth Cleaning</option>
                <option value="whitening">Teeth Whitening</option>
                <option value="surgery">Dental Surgery</option>
              </select>
              <button
                type="submit"
                className="rounded bg-tooth-blue px-6 py-3 font-semibold text-white transition-colors hover:bg-tooth-dark-blue"
              >
                Book Appointment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
