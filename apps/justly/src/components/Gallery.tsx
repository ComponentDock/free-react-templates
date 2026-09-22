import { Plus } from 'lucide-react'

const items = [
  { title: 'Muscle Building', image: 'https://picsum.photos/seed/justly-gal1/600/400' },
  { title: 'Cardio Training', image: 'https://picsum.photos/seed/justly-gal2/600/400' },
  { title: 'Flexibility', image: 'https://picsum.photos/seed/justly-gal3/600/400' },
  { title: 'Cross Training', image: 'https://picsum.photos/seed/justly-gal4/600/400' },
  { title: 'HIIT Workouts', image: 'https://picsum.photos/seed/justly-gal5/600/400' },
  { title: 'Nutrition Plans', image: 'https://picsum.photos/seed/justly-gal6/600/400' },
]

export function Gallery() {
  return (
    <section id="gallery" className="bg-surface py-20" data-testid="gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.title} className="relative group overflow-hidden cursor-pointer">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-brand/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center">
                <h3 className="font-heading text-white text-lg uppercase mb-2">{item.title}</h3>
                <Plus className="w-6 h-6 text-white" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
