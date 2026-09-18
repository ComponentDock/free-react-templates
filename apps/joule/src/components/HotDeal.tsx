import { ShoppingBag } from 'lucide-react'

const countdownItems = [
  { label: 'Days', value: 0 },
  { label: 'Hours', value: 8 },
  { label: 'Mins', value: 32 },
  { label: 'Secs', value: 15 },
]

export function HotDeal() {
  return (
    <section id="hot-deal" className="relative bg-light-grey py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 md:flex-row">
        {/* Countdown */}
        <div className="flex gap-4">
          {countdownItems.map((item) => (
            <div
              key={item.label}
              className="flex h-[100px] w-[100px] flex-col items-center justify-center rounded-full bg-brand/90 text-white"
            >
              <span className="text-2xl font-bold">{String(item.value).padStart(2, '0')}</span>
              <span className="text-xs uppercase">{item.label}</span>
            </div>
          ))}
        </div>
        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="mb-2 text-sm font-bold uppercase tracking-widest text-body-text">
            Hot Deal This Week
          </h2>
          <p className="mb-4 max-w-md text-muted">
            Exclusive deals on top electronics. Save big on laptops, smartphones, cameras, and
            accessories. Limited time offer — don&apos;t miss out!
          </p>
          <a
            href="#"
            className="inline-block rounded-[40px] bg-brand px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary"
          >
            <ShoppingBag className="mr-1 inline h-4 w-4" />
            Shop Now
          </a>
        </div>
      </div>
    </section>
  )
}
