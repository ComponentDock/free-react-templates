import { useState, type FormEvent } from 'react'
import { Send } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const serviceOptions = ['Change Oil', 'Battery Replace', 'Change Tire'] as const

export function Appointment() {
  const [service, setService] = useState('')
  const [name, setName] = useState('')
  const [vehicle, setVehicle] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')
  const [confirmed, setConfirmed] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (name.trim() && vehicle.trim() && date) {
      setConfirmed(true)
    }
  }

  return (
    <section
      id="appointment"
      className="bg-cover bg-center py-20 text-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/torquely-5/1600/600')" }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand">
              Booking an Appointment
            </p>
            <h2 className="mt-2 font-display text-3xl font-extrabold sm:text-4xl">
              Free Consultation
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-white/80">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts.
            </p>
          </div>

          <div className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm sm:p-8">
            {confirmed ? (
              <p className="rounded-lg bg-brand/25 p-4 text-sm font-semibold leading-relaxed">
                Booking confirmed — see you on {date}, {name}!
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div>
                  <label
                    htmlFor="appt-service"
                    className="mb-1 block text-sm font-semibold text-white/80"
                  >
                    Select services
                  </label>
                  <select
                    id="appt-service"
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white focus:border-brand focus:outline-none"
                  >
                    <option value="" className="text-ink">
                      Select services
                    </option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="text-ink">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-name"
                      className="mb-1 block text-sm font-semibold text-white/80"
                    >
                      Your Name
                    </label>
                    <input
                      id="appt-name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 focus:border-brand focus:outline-none"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-vehicle"
                      className="mb-1 block text-sm font-semibold text-white/80"
                    >
                      Vehicle number
                    </label>
                    <input
                      id="appt-vehicle"
                      value={vehicle}
                      onChange={(e) => setVehicle(e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 focus:border-brand focus:outline-none"
                      placeholder="ABC-1234"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="appt-date"
                      className="mb-1 block text-sm font-semibold text-white/80"
                    >
                      Date
                    </label>
                    <input
                      id="appt-date"
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white focus:border-brand focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="appt-time"
                      className="mb-1 block text-sm font-semibold text-white/80"
                    >
                      Time
                    </label>
                    <input
                      id="appt-time"
                      type="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                      className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white focus:border-brand focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="appt-message"
                    className="mb-1 block text-sm font-semibold text-white/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="appt-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    className="w-full rounded border border-white/20 bg-white/10 px-4 py-2 text-white placeholder-white/40 focus:border-brand focus:outline-none"
                    placeholder="Tell us about the issue"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full rounded bg-brand text-sm font-bold uppercase text-white transition-colors hover:bg-brand-dark"
                  size="lg"
                >
                  <Send className="h-4 w-4" aria-hidden="true" /> Send message
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
