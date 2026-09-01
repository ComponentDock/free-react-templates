import { cn } from '@free-react-templates/ui'

export interface TestimonialCardProps {
  name: string
  text: string
  className?: string
}

export function TestimonialCard({ name, text, className }: TestimonialCardProps) {
  const seed = name.toLowerCase().replace(/\s+/g, '-')
  return (
    <div className={cn('flex flex-col items-center text-center px-4 py-6', className)}>
      <img
        src={`https://picsum.photos/seed/${seed}/80/80`}
        alt={name}
        className="w-20 h-20 rounded-full object-cover mb-4"
      />
      <h3 className="text-lg font-bold text-dark mb-2">{name}</h3>
      <p className="text-muted text-base leading-relaxed max-w-xs">{text}</p>
    </div>
  )
}
