export function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 bg-bg">
      <img
        src="https://picsum.photos/seed/regpilot-bg/1920/1080"
        alt=""
        className="h-full w-full object-cover opacity-30"
        aria-hidden="true"
      />
    </div>
  )
}
