import { Code, Palette, PenTool } from 'lucide-react'

const services = [
  {
    title: 'Story Boarding',
    description:
      'Inappropriate behavior is often laughed off as boys will be boys, women face higher conduct standards especially in the workplace that is why.',
    icon: PenTool,
  },
  {
    title: 'Creative Design',
    description:
      'We craft pixel-perfect interfaces and brand systems that turn raw ideas into visual stories people remember and share.',
    icon: Palette,
  },
  {
    title: 'Web Development',
    description:
      'From marketing pages to complex web apps, we build fast, accessible, and maintainable products with modern tooling.',
    icon: Code,
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-white py-16 dark:bg-gray-950 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            We Are Crafted. We Provide These Services to Our Customers
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-body dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-paper dark:bg-gray-900">
                <service.icon className="h-9 w-9 text-primary-500" aria-hidden="true" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-ink dark:text-white">{service.title}</h3>
              <p className="mt-4 leading-relaxed text-body dark:text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
