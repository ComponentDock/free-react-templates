import { Check } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export const discountChecks: ReadonlyArray<string> = [
  'First month free for all new members',
  'No joining fee when you pay up front',
  'Free personal-training session included',
]

export function DiscountBand() {
  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: 'url(https://picsum.photos/seed/bolt-4/1600/800)' }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="ml-auto max-w-xl">
          <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
            Pay now and get a 25% <span className="text-brand">Discount</span>
          </h2>
          <ul className="mt-8 space-y-3">
            {discountChecks.map((line) => (
              <li key={line} className="flex items-start gap-3 text-white">
                <Check className="mt-1 h-5 w-5 shrink-0 text-brand" aria-hidden="true" />
                <span className="text-lg">{line}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#"
            className="mt-10 rounded-none bg-brand px-10 py-5 text-lg font-bold text-[#353535] hover:bg-primary-400"
          >
            Become a Member
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
