const IMAGES = [
  'havenshore-insta1',
  'havenshore-insta2',
  'havenshore-insta3',
  'havenshore-insta4',
  'havenshore-insta5',
]

export function InstagramGallery() {
  return (
    <section className="overflow-hidden">
      <div className="flex">
        {IMAGES.map((seed) => (
          <div key={seed} className="group relative flex-1">
            <img
              src={`https://picsum.photos/seed/${seed}/400/400`}
              alt="Instagram post"
              className="h-[200px] w-full object-cover transition group-hover:opacity-80 md:h-[250px]"
              loading="lazy"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 transition group-hover:opacity-100">
              <svg
                className="h-8 w-8 text-white drop-shadow-lg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" />
              </svg>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
