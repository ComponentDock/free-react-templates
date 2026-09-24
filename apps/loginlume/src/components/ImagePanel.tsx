export function ImagePanel() {
  return (
    <div className="relative w-1/2 max-md:w-full">
      <img
        src="https://picsum.photos/seed/loginlume/800/900"
        alt="Login background"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/10" />
    </div>
  )
}
