import { useEffect, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Guest {
  name: string
  photo: string
  quote: string
}

const AUTOPLAY_MS = 4000

const GUESTS: Guest[] = [
  {
    name: 'Megan Smith',
    photo: 'https://picsum.photos/seed/wavecast-g1/400/400',
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
  },
  {
    name: 'Brooke Cagle',
    photo: 'https://picsum.photos/seed/wavecast-g2/400/400',
    quote:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.',
  },
  {
    name: 'Philip Martin',
    photo: 'https://picsum.photos/seed/wavecast-g3/400/400',
    quote:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    name: 'Steven Ericson',
    photo: 'https://picsum.photos/seed/wavecast-g4/400/400',
    quote:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est.',
  },
  {
    name: 'Nathan Dumlao',
    photo: 'https://picsum.photos/seed/wavecast-g5/400/400',
    quote:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
  },
  {
    name: 'Brook Smith',
    photo: 'https://picsum.photos/seed/wavecast-g6/400/400',
    quote:
      'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.',
  },
]

export function FeaturedGuests() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((current) => (current + 1) % GUESTS.length),
      AUTOPLAY_MS,
    )
    return () => clearInterval(timer)
  }, [])

  const showPrevious = () => setIndex((current) => (current - 1 + GUESTS.length) % GUESTS.length)
  const showNext = () => setIndex((current) => (current + 1) % GUESTS.length)

  return (
    <section
      aria-label="Featured guests"
      aria-live="polite"
      className="bg-soft py-20"
      role="region"
    >
      <h2 className="text-center text-3xl font-bold text-dark">Featured Guests</h2>
      <div className="relative mx-auto mt-10 max-w-3xl px-4">
        <div className="overflow-hidden">
          <div
            data-testid="guest-track"
            className="flex transition-transform duration-500"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {GUESTS.map((guest) => (
              <div key={guest.name} className="w-full shrink-0 px-4">
                <div className="bg-white p-6 text-center shadow-md md:p-10">
                  <img
                    src={guest.photo}
                    alt={guest.name}
                    className="mx-auto h-32 w-32 rounded-full object-cover md:h-40 md:w-40"
                  />
                  <h3 className="mt-5 text-xl font-light text-dark">{guest.name}</h3>
                  <p className="mt-3 text-ink">{guest.quote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex justify-center gap-4">
          <button
            type="button"
            aria-label="Previous guest"
            onClick={showPrevious}
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-primary-600 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next guest"
            onClick={showNext}
            className="flex h-10 w-10 items-center justify-center rounded-full text-black transition-colors hover:bg-primary-600 hover:text-white"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  )
}
