import { CreditCard, Package, RefreshCw } from 'lucide-react'
import { methods } from '../data'

const methodIcons = [Package, CreditCard, RefreshCw] as const

export function ShopMethods() {
  return (
    <section id="methods-section" className="bg-band">
      <div className="mx-auto grid max-w-[1320px] gap-10 px-6 py-14 text-white md:grid-cols-3 lg:px-10">
        {methods.map((method, index) => {
          const Icon = methodIcons[index]!
          return (
            <div key={method.title} className="flex items-start gap-5">
              <Icon className="h-10 w-10 shrink-0 text-white" aria-hidden="true" />
              <div>
                <h3 className="font-body text-xl font-bold">{method.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/90">{method.paragraph}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
