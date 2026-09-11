import { UserPlus, Package, Truck } from 'lucide-react'

const steps = [
  {
    icon: UserPlus,
    title: '1. Create an Account',
    description: 'Connect your store, import your products, then send us your inventory.',
  },
  {
    icon: Package,
    title: '2. Create New Orders',
    description: 'We store your inventory in any combination of our fulfillment centers.',
  },
  {
    icon: Truck,
    title: '3. Ship and Track',
    description:
      'As soon as a customer places an order, we ship it from the nearest fulfillment center.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <span className="mb-2 block text-sm font-bold uppercase tracking-wider text-brand">
            How it works
          </span>
          <h2 className="mx-auto max-w-2xl text-2xl font-bold text-heading md:text-3xl">
            A simple process to get your project off the ground and running smoothly.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.title} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10 text-brand">
                <step.icon size={32} />
              </div>
              <h3 className="mb-3 text-lg font-bold text-heading">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
