import { instagramHandle, instagramImages } from '../data'

/* Square instagram-photo strip offset clear of the fixed sidebar on
   wide screens, with an outlined @handle button. */
export function InstagramBand() {
  return (
    <section aria-label="Instagram feed" className="min-[1600px]:pl-[300px]">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {instagramImages.map((src) => (
            <img key={src} src={src} alt="" className="aspect-square h-full w-full object-cover" />
          ))}
        </div>
        <div className="mt-8 pb-24 text-center">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noreferrer"
            className="inline-block border-2 border-copper bg-white px-8 py-3 font-display text-lg font-medium text-copper transition-colors hover:bg-copper hover:text-white"
          >
            {instagramHandle}
          </a>
        </div>
      </div>
    </section>
  )
}
