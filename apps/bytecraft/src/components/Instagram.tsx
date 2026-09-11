const images = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  seed: `bytecraft-inst-${i + 1}`,
}))

export function Instagram() {
  return (
    <section className="bg-gray-bg py-4">
      <div className="flex flex-wrap">
        {images.map((img) => (
          <div key={img.id} className="w-1/3 sm:w-1/6">
            <img
              src={`https://picsum.photos/seed/${img.seed}/300/300`}
              alt={`Instagram feed ${img.id}`}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
