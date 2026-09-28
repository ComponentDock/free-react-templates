import { CheckCircle } from 'lucide-react'

const FEATURES = [
  'Fresh, locally sourced ingredients',
  'Prepared by award-winning chefs',
  'Seasonal menu changes',
  'Organic and sustainable produce',
]

export function Ingredients() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col items-center gap-12 lg:flex-row">
          <div className="lg:w-1/2">
            <div
              className="h-80 rounded-lg bg-cover bg-center"
              style={{
                backgroundImage: 'url(https://picsum.photos/seed/zing-ingredients/800/600)',
              }}
            />
          </div>
          <div className="lg:w-1/2">
            <h2
              className="mb-6 text-3xl font-bold text-brand-dark"
              style={{ fontFamily: 'var(--font-dancing)' }}
            >
              Perfect Ingredients
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-muted-text">
              Far far away, behind the word mountains, far from the countries Vokalia and
              Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right
              at the coast of the Semantics, a large language ocean.
            </p>
            <ul className="mb-8 space-y-3">
              {FEATURES.map((feat) => (
                <li key={feat} className="flex items-center gap-2 text-sm text-brand-dark">
                  <CheckCircle size={16} className="text-brand-red" />
                  {feat}
                </li>
              ))}
            </ul>
            <a
              href="#"
              className="inline-block rounded bg-brand-red px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
