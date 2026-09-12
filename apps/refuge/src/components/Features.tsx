import { Headphones, Users, Award, FileCheck } from 'lucide-react'

const features = [
  {
    icon: Headphones,
    title: '24/7 Support',
    text: 'Our team is available around the clock to assist you with any questions or claims.',
  },
  {
    icon: Users,
    title: 'Trusted People',
    text: 'Licensed professionals who put your interests first and build lasting relationships.',
  },
  {
    icon: Award,
    title: '12 Years Experience',
    text: 'Over a decade of proven expertise in providing reliable insurance solutions.',
  },
  {
    icon: FileCheck,
    title: 'Join With Us',
    text: 'Become part of a community of satisfied customers who chose the right coverage.',
  },
]

export function Features() {
  return (
    <section className="bg-paper py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block font-display text-sm font-bold uppercase tracking-wider text-brand">
            Outstanding Services
          </span>
          <h2 className="font-display text-3xl font-bold uppercase text-ink md:text-4xl">
            Why Choose Us
          </h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="text-center">
              <f.icon className="mx-auto mb-4 h-12 w-12 text-brand" />
              <h3 className="mb-3 font-display text-lg font-bold uppercase text-ink">{f.title}</h3>
              <p className="text-sm text-mist">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
