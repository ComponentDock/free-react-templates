import { ButtonLink } from '@free-react-templates/ui'
import { ChevronRight } from 'lucide-react'

const pricingRows = [
  { service: 'Teeth Whitening Service at home', stage: '1 times', price: '$115.00' },
  { service: 'Teeth Whitening Service at Dental Clinic', stage: '1 times', price: '$100.00' },
  { service: 'Ceramic crowns and fillings Dental porcelain', stage: '1 times', price: '$99.00' },
  { service: 'Remove crowns, bridges Service', stage: '1 tooth', price: '$50.00' },
  { service: 'Covering the recession of the gums', stage: '1 times', price: '$400.00' },
  {
    service: 'Consultation, impressions and preparation of models',
    stage: '1 times',
    price: '$35.00',
  },
  { service: 'Removal of an old inlay, old crown', stage: '1 times', price: '$99.00' },
  { service: 'Overlay teeth whitening (2 arches)', stage: '1 times', price: '$170.00' },
  {
    service: 'Standard porcelain and zirconium crown on implant',
    stage: '1 tooth',
    price: '$499.00',
  },
  { service: 'Implantation of an implant', stage: '1 tooth', price: '$600.00' },
] as const

export function Pricing() {
  return (
    <section id="pricing" className="py-16 dark:bg-gray-950">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-2 text-2xl font-bold dark:text-white">Pricing</h2>
          <div className="mx-auto h-1 w-12 bg-primary-400" />
        </div>
        <div className="overflow-x-auto rounded-lg border border-gray-100 shadow-sm dark:border-gray-800">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="bg-primary-400 text-white">
                <th className="px-6 py-4 font-semibold">Service Names</th>
                <th className="px-6 py-4 font-semibold">Stage</th>
                <th className="px-6 py-4 font-semibold">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr
                  key={row.service}
                  className="border-b border-gray-100 bg-card transition-colors last:border-0 hover:bg-gray-50 dark:border-gray-800 dark:hover:bg-gray-900"
                >
                  <td className="px-6 py-4 font-semibold text-smoke dark:text-gray-300">
                    {row.service}
                  </td>
                  <td className="px-6 py-4 text-smoke dark:text-gray-400">{row.stage}</td>
                  <td className="px-6 py-4 font-semibold text-smoke dark:text-gray-300">
                    {row.price}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-8 text-center">
          <ButtonLink
            href="#"
            className="inline-flex items-center gap-2 rounded-md bg-primary-400 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-600"
          >
            Read More <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
