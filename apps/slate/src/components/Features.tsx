import { Card } from '@free-react-templates/ui'
import { features } from '../data'

export function Features() {
  return (
    <section id="features" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Everything Your Business Needs
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            A complete toolkit for launching a modern business website — without the framework
            fatigue.
          </p>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <Card key={feature.title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-slate text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
