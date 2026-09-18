import { ButtonLink } from '@free-react-templates/ui'

const services = [
  {
    img: 'https://picsum.photos/seed/briefly-svc1/400/300',
    title: 'Get to Know Project Estimate?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud.',
  },
  {
    img: 'https://picsum.photos/seed/briefly-svc2/400/300',
    title: 'Get to Know Project Estimate?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud.',
  },
  {
    img: 'https://picsum.photos/seed/briefly-svc3/400/300',
    title: 'Get to Know Project Estimate?',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt labore dolore magna aliqua enim minim veniam quis nostrud.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-ink dark:text-white sm:text-4xl">
            Services Offered By Us
          </h2>
          <p className="mt-4 text-smoke dark:text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor incididunt
            labore dolore magna aliqua enim minim veniam quis nostrud.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md dark:bg-gray-800"
            >
              <img
                src={svc.img}
                alt={svc.title}
                className="h-56 w-full object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  <ButtonLink href="#contact" className="hover:text-primary-400">
                    {svc.title}
                  </ButtonLink>
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-smoke dark:text-gray-400">
                  {svc.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
