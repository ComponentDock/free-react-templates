import { Settings, CreditCard, MessageCircle } from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Easily Manage',
    description:
      'Streamline your tasks and projects with an intuitive dashboard designed for maximum efficiency.',
  },
  {
    icon: CreditCard,
    title: 'Get Payments Easily',
    description:
      'Integrated payment processing lets you accept and manage transactions seamlessly.',
  },
  {
    icon: MessageCircle,
    title: 'Quick Messaging',
    description:
      'Built-in messaging keeps your team connected in real time without switching tools.',
  },
] as const

export function Services() {
  return (
    <section id="services" className="bg-lavender py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-3xl font-bold text-ink sm:text-4xl">
          How Can We Help You with Spark!
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.title}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary-100 text-primary-500">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-ink">{s.title}</h3>
                <p className="text-sm leading-relaxed text-smoke">{s.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
