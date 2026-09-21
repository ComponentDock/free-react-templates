const instagramPosts = [
  { id: 1, seed: 'threadline-ig1' },
  { id: 2, seed: 'threadline-ig2' },
  { id: 3, seed: 'threadline-ig3' },
  { id: 4, seed: 'threadline-ig4' },
  { id: 5, seed: 'threadline-ig5' },
  { id: 6, seed: 'threadline-ig6' },
]

export function InstagramFeed() {
  return (
    <section className="py-16 bg-white" aria-label="Instagram feed">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-surface-dark">Instagram</h2>
        <p className="text-gray-500 mt-2 max-w-lg mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
        <p className="text-brand-500 font-bold mt-2">#Threadline</p>
      </div>
      <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
        {instagramPosts.map((post) => (
          <a
            key={post.id}
            href="#instagram"
            className="relative group overflow-hidden aspect-square"
            aria-label={`Instagram post ${post.id}`}
          >
            <div
              className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{ backgroundImage: `url(https://picsum.photos/seed/${post.seed}/300/300)` }}
            />
            <div className="absolute inset-0 bg-brand-500/0 group-hover:bg-brand-500/60 transition-colors flex items-center justify-center">
              <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-bold">
                #
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
