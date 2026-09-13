export function Adverts() {
  return (
    <section className="bg-mist py-12">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 md:grid-cols-2">
        <a href="#" className="group relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/techvault-ad1/600/300"
            alt="Smartphone deals"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
          <div className="absolute bottom-6 left-6">
            <h3 className="font-display text-xl font-bold text-white">Smartphone Deals</h3>
            <p className="mt-1 text-sm text-white/80">Up to 40% off on selected models</p>
          </div>
        </a>
        <a href="#" className="group relative overflow-hidden rounded-lg">
          <img
            src="https://picsum.photos/seed/techvault-ad2/600/300"
            alt="Gaming accessories"
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/30 transition-colors group-hover:bg-black/40" />
          <div className="absolute bottom-6 left-6">
            <h3 className="font-display text-xl font-bold text-white">Gaming Accessories</h3>
            <p className="mt-1 text-sm text-white/80">Premium gear for gamers</p>
          </div>
        </a>
      </div>
    </section>
  )
}
