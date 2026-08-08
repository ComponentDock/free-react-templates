import { CalendarCheck, Phone } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '10,000+', label: 'Happy Patients' },
  { value: '4.9★', label: 'Star Rating' },
  { value: 'Same-Day', label: 'Appointments' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-primary-50 to-white dark:from-gray-900 dark:to-gray-950"
    >
      <div className="relative mx-auto max-w-7xl px-4 pb-16 pt-20 text-center sm:px-6 lg:px-8 lg:pt-28">
        <p className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
          <span className="h-1.5 w-1.5 rounded-full bg-primary-500" aria-hidden="true" />
          Now Accepting New Patients
        </p>
        <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl dark:text-white">
          Your Smile Deserves{' '}
          <span className="text-primary-600 dark:text-primary-400">the Best Care</span>
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-gray-600 sm:text-xl dark:text-gray-400">
          Experience modern, gentle dental care in a warm and welcoming environment. Our expert team
          combines advanced technology with compassionate treatment to give you the confident smile
          you deserve.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <ButtonLink
            href="#contact"
            className="rounded-full bg-primary-600 px-8 py-4 text-base font-medium text-white hover:bg-primary-700"
          >
            <CalendarCheck className="h-5 w-5" aria-hidden="true" />
            Book Appointment
          </ButtonLink>
          <ButtonLink
            href="tel:5552345678"
            variant="outline"
            className="rounded-full border-gray-300 bg-white px-8 py-4 text-base text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call (555) 234-5678
          </ButtonLink>
        </div>
        <dl className="mx-auto mt-14 grid max-w-3xl grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="order-2 mt-1 block text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.label}
              </dt>
              <dd className="order-1 text-2xl font-bold text-gray-900 sm:text-3xl dark:text-white">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <img
          src="https://picsum.photos/seed/dentora-1/1200/600"
          alt="Modern dental office with a treatment chair and overhead light"
          className="mx-auto w-full max-w-5xl rounded-2xl object-cover shadow-lg"
          loading="lazy"
        />
      </div>
    </section>
  )
}
