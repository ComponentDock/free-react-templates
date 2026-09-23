export function HeroBackground() {
  return (
    <div className="hidden h-full w-1/2 lg:block">
      <div
        className="h-full w-full bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://picsum.photos/seed/gatepass-city/1200/900")',
        }}
        role="img"
        aria-label="Decorative hero image"
      />
    </div>
  )
}
