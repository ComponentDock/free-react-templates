import { Play } from 'lucide-react'

export function VideoSection() {
  return (
    <section className="relative -mt-24 pb-16">
      <div className="mx-auto max-w-4xl px-4">
        <div className="relative min-h-[400px] overflow-hidden border-[16px] border-gray-100 bg-charcoal shadow-2xl sm:border-[20px]">
          <img
            src="https://picsum.photos/seed/azureline-video/800/450"
            alt="Video thumbnail"
            className="h-full w-full object-cover opacity-60"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/40" />
          <button
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/90 p-5 shadow-lg transition-transform hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 fill-brand-500 text-brand-500" />
          </button>
        </div>
        <div className="px-4 pt-16 pb-16 text-center">
          <h2 className="mb-6 text-3xl font-extralight text-gray-900 sm:text-4xl">
            Great <span className="font-semibold">Modern Design</span>
            <br />
            Built with <span className="font-semibold">usability</span> in mind
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-gray-500">
            Crafting interfaces that are intuitive, accessible, and visually compelling. We blend
            aesthetics with functionality so your users get the best experience across every device.
          </p>
        </div>
      </div>
    </section>
  )
}
