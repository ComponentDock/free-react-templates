import { cn } from '@free-react-templates/ui'
import { Button } from '@free-react-templates/ui'

export function Hero() {
  return (
    <section
      id="home"
      className={cn(
        'relative flex min-h-screen items-center justify-center',
        'bg-[#18181c] text-white',
      )}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: 'url(https://picsum.photos/seed/gathr-hero/1920/1080)',
        }}
      />
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[4px] text-gray-300">
          March 15-17, 2026
        </p>
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
          Prepare yourself for the conference
        </h1>
        <p className="mb-8 text-lg text-gray-300">15-17 March 2026 — San Francisco, CA</p>
        <Button className="rounded-full bg-[#f50136] px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white hover:bg-[#d4002e]">
          Get Tickets
        </Button>
      </div>
    </section>
  )
}
