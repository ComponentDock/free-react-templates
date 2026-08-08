import { Droplets, Flower2, Hand, Heart, Leaf, Scissors } from 'lucide-react'
import { Reveal } from './Reveal'

const services = [
  {
    icon: Flower2,
    title: 'Facial Treatments',
    blurb:
      'Rejuvenating facials tailored to your skin, from hydrating rituals to deep-cleansing glow sessions.',
    price: 85,
  },
  {
    icon: Hand,
    title: 'Massage Therapy',
    blurb:
      'Swedish, deep tissue, and hot stone massages that melt away tension and restore your energy.',
    price: 95,
  },
  {
    icon: Droplets,
    title: 'Body Treatments',
    blurb: 'Exfoliating scrubs and nourishing wraps that leave your skin silky smooth and renewed.',
    price: 120,
  },
  {
    icon: Scissors,
    title: 'Hair Salon',
    blurb: 'Precision cuts, balayage, and styling by award-winning stylists in a serene setting.',
    price: 65,
  },
  {
    icon: Heart,
    title: 'Nail Care',
    blurb: 'Manicures, pedicures, and luxury nail art using breathable, skin-loving products.',
    price: 45,
  },
  {
    icon: Leaf,
    title: 'Wellness',
    blurb:
      'Yoga, meditation, and holistic wellness programs designed for complete mind-body balance.',
    price: 150,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 lg:py-28 dark:bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wider text-primary-600 uppercase dark:text-primary-400">
            Our Services
          </p>
          <h2 className="font-heading mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
            Treatments &amp; Services
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Every ritual is crafted with premium products and practiced hands, so you leave feeling
            lighter, brighter, and beautifully cared for.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 80}
              className="flex flex-col rounded-2xl bg-white p-8 shadow-soft transition-shadow hover:shadow-soft-lg dark:bg-gray-950"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900 dark:text-primary-300">
                <service.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="font-heading mt-6 text-xl font-bold text-gray-900 dark:text-white">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-gray-600 dark:text-gray-400">{service.blurb}</p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  from ${service.price}
                </span>
                <a
                  href="#contact"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  Learn More
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
