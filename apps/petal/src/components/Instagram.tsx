const images = ['petal-insta1', 'petal-insta2', 'petal-insta3', 'petal-insta4', 'petal-insta5']

function InstaIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  )
}

export function Instagram() {
  return (
    <section className="bg-gray-100 py-4">
      <div className="grid grid-cols-5">
        {images.map((seed) => (
          <a
            key={seed}
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden"
          >
            <img
              src={`https://picsum.photos/seed/${seed}/300/300`}
              alt="Instagram post"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-rose-400/0 opacity-0 transition-all group-hover:bg-rose-400/80 group-hover:opacity-100">
              <InstaIcon className="mb-2 h-6 w-6 text-white" />
              <span className="text-sm font-medium text-white">Follow us @petal</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
