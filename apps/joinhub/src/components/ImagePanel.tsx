export function ImagePanel() {
  return (
    <div
      data-testid="image-panel"
      className="relative flex flex-col items-center justify-center p-8 text-center"
      style={{
        backgroundImage: 'url(https://picsum.photos/seed/joinhub/800/600)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div
        data-overlay
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: '#6807f9', opacity: 0.4 }}
      />
      <div className="relative z-10">
        <h2 className="mb-4 text-2xl font-normal text-white">Welcome to signup form</h2>
        <p className="text-sm leading-relaxed text-white/80">Signup with social networks</p>
        <div className="mt-6 flex justify-center gap-3">
          <span className="inline-block h-1 w-8 rounded-full bg-white/50" />
          <span className="inline-block h-1 w-8 rounded-full bg-white/50" />
          <span className="inline-block h-1 w-8 rounded-full bg-white/50" />
        </div>
      </div>
    </div>
  )
}
