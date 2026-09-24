export function LogoHeader() {
  return (
    <div className="bg-white py-5">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-3xl font-heading font-bold text-heading tracking-tight">
          Scoop
        </a>
        <div className="hidden md:block">
          <img
            src="https://picsum.photos/seed/scoop-banner/728/90"
            alt="Advertisement"
            className="h-16 w-auto object-cover rounded"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}
