import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'

export function CtaBanner() {
  return (
    <section className={cn('relative py-24', 'bg-[#18181c] text-white')}>
      <div className="mx-auto max-w-4xl px-4 text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Get Your Tickets</h2>
        <p className="mb-8 text-lg text-gray-400">
          Don't miss the chance to be part of the most exciting conference of 2026. Secure your spot
          now and join thousands of professionals from around the world.
        </p>
        <Button className="rounded-full bg-[#f50136] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#d4002e]">
          Buy Now
        </Button>
      </div>
    </section>
  )
}
