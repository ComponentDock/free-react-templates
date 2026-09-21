import { FileText, CheckCircle, Truck } from 'lucide-react'

const steps = [
  {
    number: '01',
    Icon: FileText,
    title: 'Online Applications',
    description: 'Fill out our simple online application form in just a few minutes.',
  },
  {
    number: '02',
    Icon: CheckCircle,
    title: 'Get an Approval',
    description: 'Our team reviews your application and provides quick approval.',
  },
  {
    number: '03',
    Icon: Truck,
    title: 'Card Delivery',
    description: 'Receive your new card at your doorstep within 3-5 business days.',
  },
] as const

export function HowItWorks() {
  return (
    <section className="bg-white py-16 transition-colors dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-black text-brand md:text-4xl">How It Works</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {steps.map(({ number, Icon, title, description }) => (
            <div key={number} className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand/10">
                <Icon className="h-8 w-8 text-brand" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-bold text-ink dark:text-white">
                {number}. {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">{description}</p>
              <a
                href="#contact"
                className="mt-4 inline-block rounded-full bg-brand px-5 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
              >
                Learn More
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
