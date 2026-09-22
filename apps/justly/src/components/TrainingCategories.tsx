import { ButtonLink } from '@free-react-templates/ui'

const categories = [
  {
    title: 'Personal Training',
    description:
      'One-on-one coaching sessions tailored to your goals, fitness level, and schedule for maximum results.',
    image: 'https://picsum.photos/seed/justly-personal/600/400',
    variant: 'outline' as const,
  },
  {
    title: 'Group Training',
    description:
      'High-energy group classes that combine strength, cardio, and flexibility in a motivating environment.',
    image: 'https://picsum.photos/seed/justly-group/600/400',
    variant: 'solid' as const,
  },
]

export function TrainingCategories() {
  return (
    <section className="bg-surface py-20" data-testid="training-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((cat) => (
            <div key={cat.title} className="relative group overflow-hidden">
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center p-6">
                <h3 className="font-heading text-3xl text-white uppercase mb-4">{cat.title}</h3>
                <p className="text-text-muted text-sm max-w-sm mb-6">{cat.description}</p>
                <ButtonLink
                  href="#courses"
                  className={
                    cat.variant === 'outline'
                      ? 'border-2 border-brand text-brand px-6 py-2 font-heading text-xs uppercase tracking-[0.2em] hover:bg-brand hover:text-white transition-colors'
                      : 'bg-brand text-white px-6 py-2 font-heading text-xs uppercase tracking-[0.2em] hover:bg-brand-dark transition-colors'
                  }
                >
                  View Courses
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
