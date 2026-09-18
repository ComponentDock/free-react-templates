export interface BannerHeaderProps {
  className?: string
}

export function BannerHeader({ className }: BannerHeaderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center bg-cover bg-center px-8 py-10 ${className ?? ''}`}
      style={{
        backgroundImage:
          'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(https://picsum.photos/seed/linewell-banner/600/200)',
      }}
    >
      <h1 className="text-2xl font-bold text-white">Contact Us</h1>
      <p className="mt-1 text-sm text-white/80">Feel free to drop us a line below!</p>
    </div>
  )
}
