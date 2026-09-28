export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <img
        src="https://picsum.photos/seed/reglume-bg/1920/1080"
        alt=""
        className="h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>
  )
}
