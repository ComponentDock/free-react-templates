export function EnvelopeIllustration() {
  return (
    <div className="relative flex items-center justify-center">
      {/* Decorative shapes */}
      <div className="absolute left-4 top-8 h-0 w-0 border-b-[12px] border-l-[20px] border-t-[12px] border-b-transparent border-l-yellow-400 border-t-transparent" />
      <div className="absolute right-8 top-4 h-3 w-3 rounded-full bg-yellow-400" />
      <div className="absolute bottom-12 left-8 h-2.5 w-2.5 rounded-full bg-green-400" />
      <div className="absolute bottom-8 right-4 h-0 w-0 border-b-[10px] border-l-[16px] border-t-[10px] border-b-transparent border-l-yellow-400 border-t-transparent" />

      {/* Envelope */}
      <svg
        width="160"
        height="120"
        viewBox="0 0 160 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Envelope body */}
        <rect x="10" y="20" width="140" height="90" rx="8" fill="#e0e0e0" />
        {/* Envelope flap */}
        <path
          d="M10 20L80 75L150 20"
          stroke="#7c3aed"
          strokeWidth="4"
          fill="#7c3aed"
          fillOpacity="0.2"
        />
        {/* Inner shadow */}
        <rect x="10" y="60" width="140" height="50" rx="8" fill="#d0d0d0" />
        {/* Top flap overlay */}
        <path d="M10 28L80 80L150 28" fill="#7c3aed" fillOpacity="0.15" />
      </svg>
    </div>
  )
}
