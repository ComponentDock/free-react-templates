import { Star } from 'lucide-react'

interface CourseCardProps {
  imageSeed: string
  price: string
  title: string
  instructor: string
  rating: string
}

export function CourseCard({ imageSeed, price, title, instructor, rating }: CourseCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
      <img
        src={`https://picsum.photos/seed/${imageSeed}/400/250`}
        alt={title}
        className="h-48 w-full object-cover"
        width={400}
        height={250}
      />
      <div className="flex flex-col gap-2 p-4">
        <span className="inline-block w-fit rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold text-primary-500">
          {price}
        </span>
        <h3 className="font-display text-base font-semibold text-heading">{title}</h3>
        <p className="text-sm text-body">{instructor}</p>
        <div className="flex items-center gap-1 text-sm text-body">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" aria-hidden="true" />
          <span>{rating}</span>
        </div>
      </div>
    </div>
  )
}
