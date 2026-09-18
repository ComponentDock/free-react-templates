import { Stethoscope, Cpu, Heart } from 'lucide-react'

const features = [
  {
    title: 'Well Experience Dentist',
    description: 'Our team brings decades of experience to every procedure.',
    icon: Stethoscope,
  },
  {
    title: 'High Technology Facilities',
    description: 'State-of-the-art equipment for accurate diagnosis and treatment.',
    icon: Cpu,
  },
  {
    title: 'Comfortable Clinics',
    description: 'A relaxing environment designed for your comfort during every visit.',
    icon: Heart,
  },
] as const

export function About() {
  return (
    <section id="about" className="bg-light-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <img
              src="https://picsum.photos/seed/smilecraft-2/600/400"
              alt="Smilecraft dental clinic interior"
              className="w-full rounded-lg object-cover"
              loading="lazy"
            />
          </div>

          <div>
            <h2 className="text-2xl font-bold text-ink sm:text-3xl">
              Smilecraft with a Personal Touch
            </h2>
            <p className="mt-4 text-body">
              At Smilecraft, we believe every patient deserves personalized attention. Our
              compassionate team takes the time to understand your unique dental needs and provides
              tailored treatment plans for the best possible outcomes.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-lg bg-white p-4 shadow-sm">
                  <feature.icon className="h-8 w-8 text-primary-300" aria-hidden="true" />
                  <h3 className="mt-3 text-sm font-bold text-ink">{feature.title}</h3>
                  <p className="mt-1 text-xs text-body">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
