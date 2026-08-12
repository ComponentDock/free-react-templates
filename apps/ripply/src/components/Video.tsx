import { Play } from 'lucide-react'

/* Video panel (source: .video_area on #EFF1FF with a thumbnail + play). */
export function Video() {
  return (
    <section className="mt-[350px] bg-periwinkle px-[15px] py-[100px]">
      <div className="mx-auto max-w-[1140px] text-center">
        <h2 className="font-display text-[30px] font-bold uppercase text-ink">
          See Ripply in action
        </h2>
        <p className="mx-auto mt-4 max-w-[600px] text-[14px] text-body">
          Watch a short tour of the app and everything it can do for your product.
        </p>
      </div>
      <div className="relative mx-auto mt-12 max-w-[860px] overflow-hidden rounded-[12px]">
        <img
          src="https://picsum.photos/seed/ripply-video/860/480"
          alt="Video thumbnail"
          className="h-auto w-full object-cover"
        />
        <button
          type="button"
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/30"
        >
          <span className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-[#7c5cfc] shadow-lg">
            <Play className="ml-1 h-9 w-9" aria-hidden="true" />
          </span>
        </button>
      </div>
    </section>
  )
}
