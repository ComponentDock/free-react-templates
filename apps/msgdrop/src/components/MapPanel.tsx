export interface MapPanelProps {
  className?: string
}

export function MapPanel({ className }: MapPanelProps) {
  return (
    <div className={`relative w-full min-h-[400px] md:min-h-screen bg-gray-900 ${className ?? ''}`}>
      <img
        src="https://picsum.photos/seed/msgdrop-map/960/939"
        alt="Map background"
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <span className="inline-flex items-center gap-2 bg-brand-green text-white px-5 py-2.5 rounded-full font-medium shadow-lg hover:opacity-90 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          (+00) 345 6389
        </span>
      </div>
    </div>
  )
}
