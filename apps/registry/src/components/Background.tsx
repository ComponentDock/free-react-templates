export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <img
        src="https://picsum.photos/seed/registry-bg/1920/1080"
        alt=""
        className="h-full w-full object-cover"
        aria-hidden="true"
      />
    </div>
  )
}
