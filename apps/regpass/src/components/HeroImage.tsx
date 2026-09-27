export function HeroImage() {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        src="https://picsum.photos/seed/regpass/1200/400"
        alt="Registration hero"
        className="h-64 w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900/40 to-transparent" />
    </div>
  )
}
