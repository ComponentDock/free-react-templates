import { Wallet, Heart, GraduationCap } from 'lucide-react'

const services = [
  {
    icon: Wallet,
    title: 'Give Donation',
    description:
      'Your generosity can change lives. Every donation helps us provide essential resources to those in need.',
    linkText: 'Learn More',
  },
  {
    icon: Heart,
    title: 'Become Volunteer',
    description:
      'Join our team of dedicated volunteers and make a hands-on difference in your community.',
    linkText: 'Learn More',
  },
  {
    icon: GraduationCap,
    title: 'Give Scholarship',
    description:
      'Help students achieve their dreams by funding educational scholarships and programs.',
    linkText: 'Learn More',
  },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://picsum.photos.photos/seed/charity-hands/1920/1080"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-48">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Donate
            <span className="block text-3xl md:text-4xl font-light mt-2">
              Together we can make a difference
            </span>
          </h1>
          <a
            href="#donate"
            className="inline-block rounded-full bg-white px-8 py-3.5 text-sm font-bold text-ink uppercase tracking-wider transition hover:bg-gray-100"
          >
            Donate Now
          </a>
        </div>
      </div>

      {/* Service intro cards */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 -mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.title} className="bg-white rounded-lg p-8 shadow-lg text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <service.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-ink mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 mb-4">{service.description}</p>
              <a
                href="#"
                className="text-sm font-bold text-primary hover:text-primary-600 transition"
              >
                {service.linkText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
