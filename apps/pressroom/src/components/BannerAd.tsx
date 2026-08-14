export interface BannerAdProps {
  image: string
  alt?: string
}

export function BannerAd({ image, alt = 'Advertisement' }: BannerAdProps) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <img src={image} alt={alt} className="h-28 w-full object-cover" loading="lazy" />
    </div>
  )
}
