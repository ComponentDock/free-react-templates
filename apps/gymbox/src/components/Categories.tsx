import { ButtonLink } from '@free-react-templates/ui'

const categories = [
  {
    title: 'For Girls',
    description:
      'Transform your body and confidence with our specialized training programs designed for women. Build strength, flexibility, and endurance in a supportive environment.',
    image: 'gymbox-girls',
  },
  {
    title: 'For Boys',
    description:
      'Push your limits with intense workout routines crafted for men. Build muscle, increase stamina, and achieve your fitness goals with expert guidance.',
    image: 'gymbox-boys',
  },
] as const

export function Categories() {
  return (
    <section aria-label="Training categories" className="grid grid-cols-1 md:grid-cols-2">
      {categories.map((cat) => (
        <div key={cat.title} className="group relative h-80 overflow-hidden md:h-96">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(https://picsum.photos/seed/${cat.image}/960/600)` }}
            aria-hidden="true"
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
          {/* Content */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">{cat.title}</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-200">{cat.description}</p>
            <ButtonLink
              href="#contact"
              className="boxed-btn3 mt-6 inline-flex px-8 py-2 text-lg text-white"
            >
              Join Now
            </ButtonLink>
          </div>
        </div>
      ))}
    </section>
  )
}
