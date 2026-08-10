import { bannerImage } from '../data'

export function Slider() {
  return (
    <div
      role="img"
      aria-label="Decorative banner"
      className="h-[300px] w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${bannerImage.src})` }}
    />
  )
}
