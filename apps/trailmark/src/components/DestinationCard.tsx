export interface DestinationCardProps {
  name: string
  price: string
  seed: string
}

export function DestinationCard({ name, price, seed }: DestinationCardProps) {
  return (
    <a href="#home" className="group relative block aspect-4/5 overflow-hidden bg-navy">
      <img
        src={`https://picsum.photos/seed/${seed}/600/700`}
        alt={`${name} destination`}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute bottom-7 left-7 z-10 block text-white">
        <span className="block text-sm">{price}</span>
        <span className="block text-xl">{name}</span>
      </span>
    </a>
  )
}
