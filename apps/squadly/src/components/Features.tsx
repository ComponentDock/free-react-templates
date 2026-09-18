import { Headphones, Truck, ShieldCheck, Wrench } from 'lucide-react'
import type { ReactNode } from 'react'

interface FeatureItemProps {
  icon: ReactNode
  title: string
  description: string
}

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <div className="flex gap-4">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-white/20 text-white">
        {icon}
      </div>
      <div>
        <h3 className="mb-1 text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-200">{description}</p>
      </div>
    </div>
  )
}

export function Features() {
  return (
    <section className="bg-primary-500 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-10 lg:flex-row">
          <div className="flex-1">
            <h2 className="mb-8 text-3xl font-bold text-white">Why Choose To Rent In Squadly</h2>
            <div className="grid gap-8 sm:grid-cols-2">
              <FeatureItem
                icon={<Headphones className="h-6 w-6" />}
                title="24/7 Customer Service"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
              />
              <FeatureItem
                icon={<Truck className="h-6 w-6" />}
                title="Prompt Delivery"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
              />
              <FeatureItem
                icon={<ShieldCheck className="h-6 w-6" />}
                title="Reliable Equipment"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
              />
              <FeatureItem
                icon={<Wrench className="h-6 w-6" />}
                title="New Heavy Equipment"
                description="A small river named Duden flows by their place and supplies it with the necessary regelialia."
              />
            </div>
          </div>

          <div className="flex w-full items-center rounded-lg bg-white p-8 shadow-lg lg:w-[380px]">
            <form className="w-full space-y-4" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-xl font-bold text-ink">Request Quote</h3>
              <input
                type="text"
                placeholder="First Name"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <select className="w-full rounded border border-gray-300 px-4 py-2 text-sm text-muted focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500">
                <option value="">Select Your Services</option>
                <option value="forklift">Forklift</option>
                <option value="bulldozer">Bulldozer</option>
                <option value="excavator">Excavator</option>
                <option value="road-roller">Road Roller</option>
                <option value="other">Other Services</option>
              </select>
              <textarea
                rows={4}
                placeholder="Message"
                className="w-full rounded border border-gray-300 px-4 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
              />
              <button
                type="submit"
                className="w-full rounded bg-primary-500 px-6 py-3 font-semibold text-white transition-colors hover:bg-primary-600"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
