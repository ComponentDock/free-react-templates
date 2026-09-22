import { cn } from '@free-react-templates/ui'

interface CtaBannerProps {
  className?: string
}

export function CtaBanner({ className }: CtaBannerProps) {
  return (
    <section className={cn('border-t border-gray-200 bg-white py-16', className)}>
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <h2 className="max-w-xl font-heading text-2xl font-semibold text-heading-text">
            Make Yourself Comfortable in Any of Our Fully Air-conditioned Rooms
          </h2>
          <a
            href="#reservation-form"
            className="inline-block rounded-full bg-brand px-10 py-4 text-base font-semibold text-white transition-colors hover:bg-brand-dark"
          >
            Reserve Now
          </a>
        </div>
      </div>
    </section>
  )
}
