export function HeroImage() {
  return (
    <div
      className="h-[220px] w-full bg-cover bg-center"
      style={{
        backgroundImage: 'url("https://picsum.photos/seed/portalink-hero/600/250")',
      }}
      role="img"
      aria-label="Decorative hero image"
    />
  )
}
