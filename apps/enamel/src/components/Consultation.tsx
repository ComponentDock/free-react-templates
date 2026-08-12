import { useState, type FormEvent } from 'react'
import { Calendar, ChevronDown, Clock } from 'lucide-react'
import { Button } from '@free-react-templates/ui'

const departments = [
  'Neurology',
  'Cardiology',
  'Dental',
  'Ophthalmology',
  'Other Services',
] as const

/** Blue consultation band: services teaser left, Free Consultation form in
    the darker middle column, Find A Doctor teaser right (the source
    .consultation row). */
export function Consultation() {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [department, setDepartment] = useState('Dental')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [requested, setRequested] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setRequested(true)
  }

  return (
    <section id="contact">
      <div className="grid lg:grid-cols-3">
        <div className="bg-primary px-6 py-16 text-center text-white/90 md:px-10">
          <h3 className="text-xl font-medium text-white">Dental Services</h3>
          <p className="mx-auto mt-4 max-w-xs leading-relaxed">
            Complete care under one roof — from preventive check-ups to advanced implant and
            orthodontic treatments.
          </p>
          <a
            href="#services"
            className="mt-8 inline-block text-xs font-semibold uppercase tracking-wide text-white underline decoration-[#57bee1] decoration-4 underline-offset-4 transition-opacity hover:opacity-80"
          >
            See Services
          </a>
        </div>

        <div className="bg-ocean px-6 py-16 text-white/90 md:px-10">
          <h3 className="text-xl font-medium text-white">Free Consultation</h3>
          {requested ? (
            <p role="status" className="mt-6 rounded bg-white/10 px-4 py-3 text-white">
              Appointment requested — we will call you back shortly.
            </p>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
              <label htmlFor="first-name" className="sr-only">
                First Name
              </label>
              <input
                id="first-name"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                placeholder="First Name"
                className="h-12 w-full border-b border-white/40 bg-transparent px-1 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <label htmlFor="last-name" className="sr-only">
                Last Name
              </label>
              <input
                id="last-name"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                placeholder="Last Name"
                className="h-12 w-full border-b border-white/40 bg-transparent px-1 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
              />
              <label htmlFor="department" className="sr-only">
                Department
              </label>
              <div className="relative">
                <select
                  id="department"
                  value={department}
                  onChange={(event) => setDepartment(event.target.value)}
                  className="h-12 w-full appearance-none border-b border-white/40 bg-transparent px-1 text-white focus:border-white focus:outline-none"
                >
                  {departments.map((option) => (
                    <option key={option} value={option} className="text-ink">
                      {option}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
                  aria-hidden="true"
                />
              </div>
              <label htmlFor="date" className="sr-only">
                Date
              </label>
              <div className="relative">
                <input
                  id="date"
                  value={date}
                  onChange={(event) => setDate(event.target.value)}
                  placeholder="Date"
                  className="h-12 w-full border-b border-white/40 bg-transparent px-1 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <Calendar
                  className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
                  aria-hidden="true"
                />
              </div>
              <label htmlFor="time" className="sr-only">
                Time
              </label>
              <div className="relative">
                <input
                  id="time"
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  placeholder="Time"
                  className="h-12 w-full border-b border-white/40 bg-transparent px-1 text-white placeholder:text-white/60 focus:border-white focus:outline-none"
                />
                <Clock
                  className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-white/60"
                  aria-hidden="true"
                />
              </div>
              <Button
                type="submit"
                className="h-12 self-end rounded bg-lime px-6 text-white hover:bg-lime-hover md:col-span-2"
              >
                Appointment
              </Button>
            </form>
          )}
        </div>

        <div className="bg-primary px-6 py-16 text-center text-white/90 md:px-10">
          <h3 className="text-xl font-medium text-white">Find A Doctor</h3>
          <p className="mx-auto mt-4 max-w-xs leading-relaxed">
            Meet the specialists behind the smiles — experienced dentists and hygienists ready to
            take care of you.
          </p>
          <a
            href="#doctors"
            className="mt-8 inline-block text-xs font-semibold uppercase tracking-wide text-white underline decoration-[#57bee1] decoration-4 underline-offset-4 transition-opacity hover:opacity-80"
          >
            Meet our doctor
          </a>
        </div>
      </div>
    </section>
  )
}
