import { useEffect, useState } from 'react'
import { Play, X } from 'lucide-react'
import { HERO } from '../data'
import { DonationForm } from './DonationForm'

/* .home-banner-area — white hero split between copy ("New way to give
   back", lorem, teal circular play button opening a video modal) and a
   photo with the white .donation-box overlay ("Enter Monthly Donation
   Amount", USD select, amount input, green "Donate Now"). */

function VideoModal({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [onClose])

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Intro video"
      onClick={onClose}
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/80 p-4"
    >
      <div className="relative w-full max-w-3xl" onClick={(event) => event.stopPropagation()}>
        <button
          type="button"
          aria-label="Close video"
          onClick={onClose}
          className="absolute -top-11 right-0 cursor-pointer text-white transition-colors hover:text-accent"
        >
          <X aria-hidden="true" className="h-7 w-7" />
        </button>
        <iframe
          src={url}
          title="Altruist intro video"
          className="aspect-video w-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  )
}

export function Hero() {
  const [videoOpen, setVideoOpen] = useState(false)

  return (
    <section id="home" className="bg-white pb-[150px] pt-[130px]">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl font-bold leading-tight text-ink lg:text-[52px]">
            {HERO.headline}
          </h1>
          <p className="mt-6 max-w-lg leading-[1.625] text-body">{HERO.subtext}</p>
          <button
            type="button"
            onClick={() => setVideoOpen(true)}
            className="mt-9 inline-flex cursor-pointer items-center gap-4 text-ink transition-colors hover:text-accent"
          >
            <span className="inline-flex h-[60px] w-[60px] items-center justify-center rounded-full bg-teal text-white">
              <Play aria-hidden="true" className="h-6 w-6" fill="currentColor" />
            </span>
            <span className="text-[14px] font-medium">Watch our intro video</span>
          </button>
        </div>

        <div className="relative">
          <img
            src={HERO.image}
            alt="Children playing on a sunny field"
            className="w-full object-cover"
          />
          <div className="absolute left-1/2 top-1/2 w-[min(92%,360px)] -translate-x-1/2 -translate-y-1/2 bg-white p-8 shadow-[0_20px_50px_0_rgba(153,153,153,0.2)]">
            <DonationForm idPrefix="hero" label="Enter Monthly Donation Amount" />
          </div>
        </div>
      </div>

      {videoOpen && <VideoModal url={HERO.videoUrl} onClose={() => setVideoOpen(false)} />}
    </section>
  )
}
