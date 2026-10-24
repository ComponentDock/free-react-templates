import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Play, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { videoChecks } from '../data'

const thumb = 'https://picsum.photos/seed/amberline-video/1272/800'

export function VideoCta() {
  const [open, setOpen] = useState(false)
  const closeRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) {
      return
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('keydown', onKeyDown)
    closeRef.current?.focus()
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <section className="bg-page pb-24 lg:pb-32">
      <div className="mx-auto grid max-w-[1320px] items-center gap-14 px-4 md:grid-cols-2">
        <div className="relative">
          <img
            src={thumb}
            alt="Crew reviewing a steel frame at dusk"
            loading="lazy"
            className="h-[400px] w-full rounded-[5px] object-cover"
          />
          <button
            type="button"
            aria-label="Play the Amberline showreel"
            onClick={() => setOpen(true)}
            className="absolute top-1/2 left-1/2 flex size-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand text-white transition-transform hover:scale-105"
          >
            <Play aria-hidden="true" className="size-8" />
          </button>
        </div>

        <div>
          <span className="mb-1 block text-[16px] font-semibold text-deep-amber">Watch our story</span>
          <h2 className="text-[40px] font-medium leading-[1.2] text-black/80 lg:text-[54px]">
            Building Dreams Into Reality Since 1982
          </h2>
          <p className="mt-5">
            Two generations on the same sites. The crews that poured the first footings still walk
            our towers today, which is why the detail survives the handover.
          </p>
          <ul className="mt-6 space-y-2 text-[16px]">
            {videoChecks.map((check) => (
              <li key={check} className="flex items-center gap-3 py-2">
                <Check aria-hidden="true" className="size-5 shrink-0 text-brand" />
                <span>{check}</span>
              </li>
            ))}
          </ul>
          <ButtonLink
            href="#about"
            className="mt-8 h-[53px] gap-3 rounded-none border border-transparent bg-brand px-6 text-[12px] font-bold uppercase tracking-[1px] text-ink hover:border-brand hover:bg-transparent hover:text-brand"
          >
            Learn more about us
            <ArrowRight aria-hidden="true" className="size-4" />
          </ButtonLink>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4">
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Amberline showreel"
            className="relative w-full max-w-3xl bg-ink p-2"
          >
            <img
              src={thumb}
              alt="Showreel poster frame"
              className="h-[320px] w-full object-cover sm:h-[420px]"
            />
            <p className="p-4 text-center text-[14px] uppercase tracking-[0.2em] text-white/80">
              Showreel — 02:14
            </p>
            <button
              ref={closeRef}
              type="button"
              aria-label="Close the showreel"
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 flex size-10 items-center justify-center bg-brand text-ink"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  )
}
