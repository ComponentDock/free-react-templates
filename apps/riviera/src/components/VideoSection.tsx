import { Play } from 'lucide-react'

/* VideoSection — the full-bleed video backdrop with a second photo block
   pulled up over it and a centered white circular play button (peach
   icon) linking to a placeholder trailer. */
export function VideoSection() {
  return (
    <section aria-label="Video" className="relative">
      <img
        src="https://picsum.photos/seed/riviera-4/1920/534"
        alt="Riviera resort video backdrop"
        className="h-[534px] w-full object-cover"
      />
      <div className="relative -mt-[320px] flex h-[703px] items-center justify-center">
        <img
          src="https://picsum.photos/seed/riviera-5/1920/703"
          alt="Riviera resort feature photo"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <a
          href="#"
          aria-label="Play video"
          className="relative z-10 flex h-[95px] w-[95px] items-center justify-center rounded-full bg-white text-brand transition-transform hover:scale-105"
        >
          <Play aria-hidden="true" className="ml-1 h-[30px] w-[30px] fill-brand" />
        </a>
      </div>
    </section>
  )
}
