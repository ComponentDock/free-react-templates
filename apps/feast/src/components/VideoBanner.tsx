import { Play } from 'lucide-react'

export function VideoBanner() {
  return (
    <section className="relative overflow-hidden bg-navy py-20">
      {/* Zigzag top border */}
      <div className="absolute left-0 right-0 top-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full rotate-180"
        >
          <path
            d="M0 60L40 40L80 60L120 40L160 60L200 40L240 60L280 40L320 60L360 40L400 60L440 40L480 60L520 40L560 60L600 40L640 60L680 40L720 60L760 40L800 60L840 40L880 60L920 40L960 60L1000 40L1040 60L1080 40L1120 60L1160 40L1200 60L1240 40L1280 60L1320 40L1360 60L1400 40L1440 60V0H0V60Z"
            fill="white"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-4 text-center lg:px-8">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold text-white">Watch Video</h2>
          <p className="mt-2 text-gray-400">You will love our execution</p>
          <button
            className="mt-8 flex h-20 w-20 items-center justify-center rounded-full border-2 border-white/30 text-white transition-colors hover:border-primary-500 hover:text-primary-500"
            aria-label="Play video"
          >
            <Play className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Zigzag bottom border */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0 60L40 40L80 60L120 40L160 60L200 40L240 60L280 40L320 60L360 40L400 60L440 40L480 60L520 40L560 60L600 40L640 60L680 40L720 60L760 40L800 60L840 40L880 60L920 40L960 60L1000 40L1040 60L1080 40L1120 60L1160 40L1200 60L1240 40L1280 60L1320 40L1360 60L1400 40L1440 60V0H0V60Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  )
}
