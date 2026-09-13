import { useState } from 'react'
import { Play, X } from 'lucide-react'

export function VideoSection() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <section className="bg-white py-10">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-6 font-body text-2xl font-bold text-text-dark">Featured Video</h2>
        <div
          className="relative cursor-pointer overflow-hidden rounded-sm"
          onClick={() => setModalOpen(true)}
          role="button"
          aria-label="Play video"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') setModalOpen(true)
          }}
        >
          <img
            src="https://picsum.photos/seed/ns-video/1100/500"
            alt="Featured video thumbnail"
            className="h-64 w-full object-cover sm:h-80 lg:h-96"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-text-dark transition-transform hover:scale-110">
              <Play size={28} className="ml-1" />
            </div>
          </div>
        </div>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
          role="dialog"
          aria-label="Video player"
        >
          <div className="relative w-full max-w-3xl bg-black">
            <button
              onClick={() => setModalOpen(false)}
              className="absolute -top-10 right-0 text-white"
              aria-label="Close video"
            >
              <X size={24} />
            </button>
            <div className="flex h-64 items-center justify-center bg-bg-darker text-text-light sm:h-80">
              <p className="font-ui text-sm">Video player placeholder</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
