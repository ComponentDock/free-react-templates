const instagramImages = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  seed: `clareo-insta-${i + 1}`,
}))

export default function Instagram() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="mb-8 text-center font-display text-3xl font-bold text-gray-900">
          Follow Us
        </h2>
        <div className="grid grid-cols-4 gap-1 md:grid-cols-8">
          {instagramImages.map((img) => (
            <a
              key={img.id}
              href="#"
              className="group block aspect-square overflow-hidden"
              aria-label={`Instagram photo ${img.id}`}
            >
              <img
                src={`https://picsum.photos/seed/${img.seed}/200/200`}
                alt={`Instagram photo ${img.id}`}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
