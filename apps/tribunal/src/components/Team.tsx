import { cn } from '@free-react-templates/ui'

interface Attorney {
  name: string
  role: string
  image: string
}

const attorneys: Attorney[] = [
  {
    name: 'Myla Smith',
    role: 'Counsel',
    image: 'https://picsum.photos/seed/tribunal-atty1/400/500',
  },
  {
    name: 'Aldin Powell',
    role: 'Head of International Practice',
    image: 'https://picsum.photos/seed/tribunal-atty2/400/500',
  },
  {
    name: 'Clarice Clark',
    role: 'Managing Partner, Attorney',
    image: 'https://picsum.photos/seed/tribunal-atty3/400/500',
  },
]

interface TeamProps {
  className?: string
}

export function Team({ className }: TeamProps) {
  return (
    <section className={cn('bg-bg-light py-20', className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-heading">Our Attorneys</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {attorneys.map((a) => (
            <div key={a.name} className="text-center">
              <div className="mb-4">
                <span className="text-lg font-bold text-text-heading block">{a.name}</span>
                <span className="text-text-muted text-sm">{a.role}</span>
              </div>
              <img src={a.image} alt={a.name} className="w-full h-80 object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
