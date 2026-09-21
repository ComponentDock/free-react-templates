import { Mail, MapPin, Phone } from 'lucide-react'

const trainers = [
  {
    name: 'Lori Kennedy',
    role: 'Yoga Trainer',
    image: 'https://picsum.photos/seed/aurae-trainer1/400/500',
    certificate: 'Yoga & Therapy Certificate of Uttarakhand University',
  },
  {
    name: 'Rebecca James',
    role: 'Yoga Trainer',
    image: 'https://picsum.photos/seed/aurae-trainer2/400/500',
    certificate: 'Advanced Ashtanga Certification, Rishikesh',
  },
  {
    name: 'Jennifer Lambert',
    role: 'Meditation Guide',
    image: 'https://picsum.photos/seed/aurae-trainer3/400/500',
    certificate: 'Mindfulness Master, International Yoga Federation',
  },
] as const

export function Trainers() {
  return (
    <section id="trainers" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Our Trainers</h2>
          <p className="mx-auto mt-4 max-w-2xl text-body">
            Meet our certified yoga professionals dedicated to guiding your wellness journey
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer) => (
            <div key={trainer.name} className="group overflow-hidden rounded-lg">
              <div className="relative h-80 overflow-hidden">
                <img
                  src={trainer.image}
                  alt={`${trainer.name}, ${trainer.role}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-end bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <h3 className="font-display text-xl font-bold">{trainer.name}</h3>
                  <span className="mt-1 text-sm text-white/80">{trainer.role}</span>
                  <p className="mt-2 text-xs text-white/60">{trainer.certificate}</p>
                  <div className="mt-3 flex gap-3">
                    <a
                      href="#home"
                      aria-label="Email trainer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#home"
                      aria-label="Call trainer"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      <Phone className="h-4 w-4" aria-hidden="true" />
                    </a>
                    <a
                      href="#home"
                      aria-label="Location"
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/30 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
                    >
                      <MapPin className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
