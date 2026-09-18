import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

const accordionItems = [
  {
    title: 'Provident alias',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae ut provident alias! Odio debitis error ipsum molestiae voluptas accusantium quibusdam animi.',
  },
  {
    title: 'Debitis ad similique tempore',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat voluptate animi hic quasi sequi odio, vitae dolorum soluta sapiente debitis ad similique tempore, aliquam quae nam deserunt dicta ullam perspiciatis minima.',
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum et dolorum libero consequuntur facere molestias beatae quod labore quidem ad quasi eius pariatur quae nam quo soluta optio dicta.',
  },
  {
    title: 'Modi natus suscipit',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos quos incidunt, perspiciatis, ad saepe, magnam error adipisci vitae ut provident alias! Odio debitis error ipsum molestiae voluptas accusantium quibusdam animi.',
  },
]

const images = [
  { seed: 'talentflow-about-1', alt: 'Office collaboration' },
  { seed: 'talentflow-about-2', alt: 'Team meeting' },
  { seed: 'talentflow-about-3', alt: 'Strategy session' },
]

export function About() {
  const [activeImg, setActiveImg] = useState(0)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="about" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left — image carousel */}
          <div>
            <h2 className="mb-8 text-3xl font-bold">Our Agency</h2>
            <div className="relative overflow-hidden rounded-sm">
              <img
                src={`https://picsum.photos/seed/${images[activeImg]!.seed}/700/450`}
                alt={images[activeImg]!.alt}
                className="h-[350px] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-0 flex gap-2 px-4">
                {images.map((img, i) => (
                  <button
                    key={img.seed}
                    type="button"
                    onClick={() => setActiveImg(i)}
                    aria-label={`Show image ${i + 1}`}
                    className={cn(
                      'h-2.5 w-2.5 rounded-full transition-colors',
                      i === activeImg ? 'bg-primary-500' : 'bg-white/60 hover:bg-white',
                    )}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right — accordion */}
          <div>
            <h2 className="mb-8 text-3xl font-bold">Why Us?</h2>
            <div className="space-y-0">
              {accordionItems.map((item, i) => (
                <div key={item.title} className="border-b border-gray-200">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    aria-expanded={openIndex === i}
                    className="flex w-full items-center justify-between py-4 text-left"
                  >
                    <span
                      className={cn(
                        'text-base font-medium transition-colors',
                        openIndex === i ? 'text-primary-500' : 'text-black',
                      )}
                    >
                      {item.title}
                    </span>
                    <ChevronDown
                      className={cn(
                        'h-5 w-5 text-gray-400 transition-transform',
                        openIndex === i && 'rotate-180',
                      )}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="pb-4 pl-8 text-sm text-gray-500">{item.content}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
