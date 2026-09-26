interface TestimonialCardProps {
  quote: string
  avatar: string
  name: string
  role: string
}

export function TestimonialCard({ quote, avatar, name, role }: TestimonialCardProps) {
  return (
    <div className="flex flex-col items-center px-8 py-10 text-center">
      <p className="mb-8 leading-relaxed text-white/80 italic">"{quote}"</p>
      <img src={avatar} alt={name} className="mb-4 h-16 w-16 rounded-full object-cover" />
      <h4 className="text-lg font-bold text-white">{name}</h4>
      <p className="text-sm text-white/60">{role}</p>
    </div>
  )
}
