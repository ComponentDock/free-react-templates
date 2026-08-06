import { Card } from '@free-react-templates/ui'

const variants = [
  { title: '#1 Home (Image)', seed: 'appdeck-1' },
  { title: '#2 Home (Slider)', seed: 'appdeck-2' },
  { title: '#3 Home (Video)', seed: 'appdeck-3' },
  { title: '#4 Blog', seed: 'appdeck-4' },
  { title: '#5 Blog Details', seed: 'appdeck-5' },
] as const

export function Showcase() {
  return (
    <section
      id="showcase"
      aria-label="Showcase"
      className="bg-white py-16 sm:py-24 dark:bg-gray-950"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-wide text-primary-500 sm:text-3xl">
            3 Home Page | and other layout's
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-600 dark:text-gray-400">
            Every layout you need to launch a stunning app landing page — pick the home style that
            fits your product and go live.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {variants.map((variant) => (
            <Card key={variant.title} className="overflow-hidden p-0">
              <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={`https://picsum.photos/seed/${variant.seed}/640/480`}
                  alt={`${variant.title} layout preview`}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="inline-block border-2 border-primary-500 px-6 py-2 text-sm font-bold uppercase tracking-wide text-primary-500 transition-colors hover:bg-primary-500 hover:text-white">
                  {variant.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
