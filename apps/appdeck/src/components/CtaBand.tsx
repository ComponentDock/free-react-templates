import { ShoppingCart } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'

export function CtaBand() {
  return (
    <section id="contact" aria-label="Purchase" className="bg-neutral-900 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-gray-100 sm:text-3xl">
          Make your website with our apps awesome landing template
        </h2>
        <div className="mt-8">
          <ButtonLink
            href="#home"
            className="rounded-full border-[3px] border-primary-500 px-9 py-3.5 text-primary-500 hover:bg-primary-500 hover:text-white"
          >
            <ShoppingCart className="mr-2 h-4 w-4" aria-hidden="true" />
            Purchase Now!
          </ButtonLink>
        </div>
      </div>
    </section>
  )
}
