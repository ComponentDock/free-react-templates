import { ArrowRight, Check, Clock, Phone, Star } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

const avatars = [
  { name: 'Dr. Sarah Mitchell', src: 'https://picsum.photos/seed/cura-doc-1/120/120' },
  { name: 'Dr. James Okafor', src: 'https://picsum.photos/seed/cura-doc-2/120/120' },
  { name: 'Dr. Emily Chen', src: 'https://picsum.photos/seed/cura-doc-3/120/120' },
] as const

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gray-50 bg-[radial-gradient(circle_at_1px_1px,#dbeafe_1px,transparent_0)] bg-[size:26px_26px] dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
        <div>
          <p className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-1.5 text-sm font-semibold text-primary-800 dark:bg-primary-900/50 dark:text-primary-200">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Trusted by 100,000+ Patients
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Your Health Is Our <span className="text-primary-600">Top Priority</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-gray-600 dark:text-gray-400">
            Experience compassionate, patient-centered healthcare with our team of expert physicians
            and state-of-the-art facilities.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <ButtonLink
              href="#booking"
              className="bg-primary-600 px-6 py-3 shadow-lg shadow-primary-600/25 hover:bg-primary-700"
            >
              Book Appointment
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
            <ButtonLink
              href="tel:+15559110000"
              className="border border-accent-500 bg-white px-6 py-3 text-accent-600 hover:bg-accent-50 dark:bg-gray-900"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Emergency Line
            </ButtonLink>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
            <div className="flex -space-x-3">
              {avatars.map((avatar) => (
                <img
                  key={avatar.name}
                  src={avatar.src}
                  alt={avatar.name}
                  className="h-11 w-11 rounded-full border-2 border-white object-cover dark:border-gray-800"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">
                50+ Doctors Board Certified
              </p>
              <div className="mt-1 flex items-center gap-2">
                <span
                  className="flex items-center gap-0.5 text-amber-400"
                  aria-label="4.9 out of 5 stars"
                >
                  {Array.from({ length: 5 }, (_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </span>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  4.9/5 Rating
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">2,500+ Reviews</span>
              </div>
            </div>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <img
            src="https://picsum.photos/seed/cura-hero/640/720"
            alt="A Cura physician consulting with a patient"
            className="aspect-[8/9] w-full rounded-3xl object-cover shadow-2xl"
          />
          <div className="absolute -top-4 right-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:right-6 dark:bg-gray-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/60 dark:text-primary-300">
              <Clock className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-extrabold text-gray-900 dark:text-white">
                24/7
              </span>
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400">
                Emergency Care
              </span>
            </span>
          </div>
          <div className="absolute -bottom-4 left-2 flex items-center gap-3 rounded-2xl bg-white p-4 shadow-xl sm:left-6 dark:bg-gray-900">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-success-100 text-success-600 dark:bg-success-900/60 dark:text-success-300">
              <Check className="h-5 w-5" aria-hidden="true" />
            </span>
            <span>
              <span className="block text-lg font-extrabold text-gray-900 dark:text-white">
                25+
              </span>
              <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400">
                Years Experience
              </span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
