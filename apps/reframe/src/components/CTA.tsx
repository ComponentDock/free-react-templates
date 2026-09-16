import { cn } from '@free-react-templates/ui'

export interface CTAProps {
  className?: string
}

export function CTA({ className }: CTAProps) {
  return (
    <section data-testid="cta" className={cn('bg-brand py-16 text-center', className)}>
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-display text-3xl font-bold uppercase text-white md:text-4xl">
          Contact Us For Projects or Need a Quotation
        </h2>
        <a
          href="#contact"
          className="mt-8 inline-block rounded border-2 border-white bg-transparent px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-brand"
        >
          Get Started
        </a>
      </div>
    </section>
  )
}
