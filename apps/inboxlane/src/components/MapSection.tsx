import { MapPin } from 'lucide-react'

export function MapSection() {
  return (
    <div
      className="relative w-full h-full min-h-[400px] bg-map-overlay overflow-hidden"
      aria-label="Map showing company location"
    >
      {/* Dark map background simulating a dark-themed map */}
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://picsum.photos/seed/inboxlane-map/800/600"
          alt=""
          className="w-full h-full object-cover grayscale brightness-50"
          loading="lazy"
        />
      </div>
      {/* Map grid lines overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
      {/* Location pin */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <div className="bg-white rounded-lg px-3 py-1.5 shadow-lg text-sm text-gray-800 font-medium mb-1">
          My Co.
        </div>
        <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-white" />
        <MapPin className="w-8 h-8 text-brand fill-brand/30" />
      </div>
    </div>
  )
}
