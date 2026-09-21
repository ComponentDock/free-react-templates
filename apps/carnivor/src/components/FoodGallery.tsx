const images = [
  { seed: 'carnivor-gallery1', alt: 'Grilled steak with herbs' },
  { seed: 'carnivor-gallery2', alt: 'Smoked brisket platter' },
  { seed: 'carnivor-gallery3', alt: 'Wagyu beef slices' },
  { seed: 'carnivor-gallery4', alt: 'Grilled vegetables side' },
  { seed: 'carnivor-gallery5', alt: 'Prime rib carving' },
  { seed: 'carnivor-gallery6', alt: 'Dessert and wine pairing' },
] as const

export function FoodGallery() {
  return (
    <section className="bg-cream py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="text-center font-display text-3xl text-ink md:text-4xl">Food Gallery</h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {images.map((img) => (
            <div key={img.seed} className="overflow-hidden rounded-lg">
              <img
                src={`https://picsum.photos/seed/${img.seed}/400/300`}
                alt={img.alt}
                className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
