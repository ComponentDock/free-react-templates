import { CreditCard, MessageSquare, Workflow, type LucideIcon } from 'lucide-react'

interface Service {
  icon: LucideIcon
  title: string
  copy: string
}

const services: Service[] = [
  {
    icon: Workflow,
    title: 'Easily Manage',
    copy: 'Organize your workflow, projects, and tasks in one simple, collaborative space.',
  },
  {
    icon: CreditCard,
    title: 'Get Payments Easily',
    copy: 'Accept payments from customers anywhere in the world with instant settlement.',
  },
  {
    icon: MessageSquare,
    title: 'Quick Messaging',
    copy: 'Instant messaging with your team keeps everyone aligned and moving fast.',
  },
]

export function Services() {
  return (
    <section id="services" className="bg-lavender py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-primary-600 dark:text-primary-400">
            Services
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-ink dark:text-white sm:text-4xl lg:text-5xl">
            How Can We Help Your with Appco!
          </h2>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                className="rounded-3xl bg-white p-10 text-center shadow-sm transition-shadow hover:shadow-lg dark:bg-gray-800"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-white">
                  <Icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <h3 className="mt-6 font-display text-xl font-bold text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist dark:text-gray-400">
                  {service.copy}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
