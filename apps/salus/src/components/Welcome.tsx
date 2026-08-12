import { Check } from 'lucide-react'
import { welcomePoints } from '../data'

export function Welcome() {
  return (
    <section aria-label="Welcome" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-4 lg:grid-cols-2">
        <div className="relative">
          <img
            src="https://picsum.photos/id/64/800/600"
            alt="A smiling woman enjoying a healthy, peaceful moment outdoors"
            className="w-3/5 rounded"
          />
          <img
            src="https://picsum.photos/id/996/420/520"
            alt="A calm woman relaxing in the sunlight"
            className="absolute right-0 bottom-0 w-2/5 rounded border-8 border-white shadow-xl"
          />
        </div>
        <div>
          <h2 className="relative pb-4 text-lg font-normal text-ink">
            Welcome to Salus
            <span className="absolute bottom-0 left-0 h-0.5 w-[50px] bg-sky" aria-hidden="true" />
          </h2>
          <h3 className="mt-5 text-4xl font-medium text-ink">Best Care For Your Good Health</h3>
          <p className="mt-6 text-base leading-7 text-body">
            Esteem spirit temper too say adieus who direct esteem. It esteems luckily or picture
            placing drawing. Apartments frequently or motionless on reasonable projecting
            expression.
          </p>
          <ul className="mt-8 space-y-3">
            {welcomePoints.map((point) => (
              <li key={point} className="flex items-center gap-3 text-body">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-tint text-brand">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <a
            href="#departments"
            className="mt-9 inline-block rounded border border-sky px-6 py-2.5 text-[15px] text-sky transition-colors hover:bg-sky hover:text-white"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  )
}
