export function HeroImage() {
  return (
    <div className="relative hidden w-[29.1%] min-h-[400px] md:block">
      <img
        src="https://picsum.photos/seed/regsnap/400/600"
        alt="Registration hero"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}
