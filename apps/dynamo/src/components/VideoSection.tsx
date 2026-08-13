import { useState } from 'react'
import { Play, X } from 'lucide-react'
import { ButtonLink } from '@free-react-templates/ui'
import { videoBackground, videoBlurb, videoEmbedUrl, videoHeading } from '../data'

export function VideoSection() {
  const [open, setOpen] = useState(false)

  return (
    <section data-section="video" className="py-[103px]">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-2">
        <div>
          <h2 className="text-4xl font-light leading-tight text-navy-900">{videoHeading}</h2>
          <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-400">{videoBlurb}</p>
          <ButtonLink
            href="#about"
            className="mt-8 min-w-[186px] rounded-none bg-primary-600 px-[47px] py-6 text-sm font-semibold uppercase tracking-wide text-white hover:bg-primary-700"
          >
            Read More
          </ButtonLink>
        </div>

        <div
          data-video-box
          className="relative flex aspect-video items-center justify-center"
          style={{
            backgroundImage: `url(${videoBackground})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <button
            type="button"
            aria-label="Play video"
            onClick={() => setOpen(true)}
            className="flex h-20 w-20 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg transition-transform hover:scale-110"
          >
            <Play className="ml-1 h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Video"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-6"
        >
          <button
            type="button"
            aria-label="Close video"
            onClick={() => setOpen(false)}
            className="absolute right-6 top-6 text-white hover:text-primary-600"
          >
            <X className="h-8 w-8" aria-hidden="true" />
          </button>
          <iframe
            src={videoEmbedUrl}
            title="Dynamo company video"
            className="aspect-video w-full max-w-4xl"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </section>
  )
}
