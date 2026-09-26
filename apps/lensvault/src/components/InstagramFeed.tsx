const images = ['lv-insta-1', 'lv-insta-2', 'lv-insta-3', 'lv-insta-4', 'lv-insta-5', 'lv-insta-6']

export function InstagramFeed() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mb-8 text-center">
          <a
            href="#"
            className="inline-block bg-brand-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand hover:text-brand-dark"
          >
            Follow Us on Instagram
          </a>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-6">
          {images.map((seed) => (
            <a key={seed} href="#" className="block overflow-hidden">
              <img
                src={`https://picsum.photos/seed/${seed}/200/200`}
                alt="Instagram photo"
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
