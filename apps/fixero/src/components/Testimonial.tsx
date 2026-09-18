export interface TestimonialProps {
  quote: string
  name: string
  role: string
  avatar: string
}

export function Testimonial({ quote, name, role, avatar }: TestimonialProps) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-sm dark:bg-gray-800">
      <blockquote className="mb-4 text-gray-600 italic dark:text-gray-300">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3">
        <img
          src={avatar}
          alt={name}
          className="h-12 w-12 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <span className="block text-sm font-bold text-ink dark:text-white">{name}</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">{role}</span>
        </div>
      </div>
    </div>
  )
}
