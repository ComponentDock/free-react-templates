export function InstagramFeed() {
  return (
    <section className="overflow-hidden bg-gray-900 py-4">
      <div className="flex gap-1">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="group relative flex-1">
            <img
              src={`https://picsum.photos/seed/batterly-ig${i + 1}/400/400`}
              alt={`Cake photo ${i + 1}`}
              width={400}
              height={400}
              className="h-40 w-full object-cover sm:h-56"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-brand/70 opacity-0 transition-opacity group-hover:opacity-100">
              {/* Inline Instagram SVG — brand icons removed from lucide-react */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
