import { useState } from 'react'
import { Play } from 'lucide-react'

/* Rounded full-width band over a cover image with a single play affordance.
   There is no external video in the recreation: the control acknowledges the
   click in place. */
export function VideoCta() {
  const [acknowledged, setAcknowledged] = useState(false)

  return (
    <section id="video" className="bg-white py-[100px]">
      <div className="mx-auto max-w-[1140px] px-4">
        <div
          style={{ backgroundImage: 'url(https://picsum.photos/seed/wanderbug-video-bg/1440/700)' }}
          className="flex h-[320px] flex-col items-center justify-center rounded-[20px] bg-navy bg-cover bg-center px-4 text-center lg:h-[560px]"
        >
          <button
            type="button"
            aria-label="Play our last tour film"
            onClick={() => setAcknowledged(true)}
            className="flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white text-navy transition-colors hover:bg-brand focus-visible:ring-2 focus-visible:ring-brand"
          >
            <Play className="h-7 w-7" aria-hidden="true" />
          </button>
          <h3 className="mt-[24px] text-[22px] font-bold text-white md:text-[31px] lg:text-[40px]">
            Watch our last tour
          </h3>
          {acknowledged ? (
            <p role="status" className="mt-3 text-[15px] text-white/85">
              The tour film is being edited — check back soon.
            </p>
          ) : null}
        </div>
      </div>
    </section>
  )
}
