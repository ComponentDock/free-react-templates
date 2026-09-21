import { useState, useCallback } from 'react'
import { AccordionItem } from './AccordionItem'

const ACCORDION_ITEMS = [
  {
    tag: 'people',
    title: '69 Flavio Burg Suite',
    authorName: 'Arthur Rose',
    authorAvatar: 'https://picsum.photos/seed/pana-author-1/80/80',
    image: 'https://picsum.photos/seed/pana-hero-1/1920/1080',
  },
  {
    tag: 'people',
    title: 'Golden Hour Portrait',
    authorName: 'Sarah Chen',
    authorAvatar: 'https://picsum.photos/seed/pana-author-2/80/80',
    image: 'https://picsum.photos/seed/pana-hero-2/1920/1080',
  },
  {
    tag: 'people',
    title: 'Urban Street Stories',
    authorName: 'Marcus Webb',
    authorAvatar: 'https://picsum.photos/seed/pana-author-3/80/80',
    image: 'https://picsum.photos/seed/pana-hero-3/1920/1080',
  },
  {
    tag: 'people',
    title: 'Coastal Morning Light',
    authorName: 'Elena Voronova',
    authorAvatar: 'https://picsum.photos/seed/pana-author-4/80/80',
    image: 'https://picsum.photos/seed/pana-hero-4/1920/1080',
  },
  {
    tag: 'people',
    title: 'Studio Session Collection',
    authorName: 'James Thornton',
    authorAvatar: 'https://picsum.photos/seed/pana-author-5/80/80',
    image: 'https://picsum.photos/seed/pana-hero-5/1920/1080',
  },
] as const

export function HeroAccordion() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  const handleToggle = useCallback((index: number) => {
    setExpandedIndex((prev) => (prev === index ? -1 : index))
  }, [])

  return (
    <section className="min-h-screen bg-surface-dark">
      <div className="mx-auto max-w-7xl px-4 py-8 lg:px-8">
        <div className="flex flex-col gap-2 md:flex-row">
          {ACCORDION_ITEMS.map((item, index) => (
            <div
              key={item.title}
              className={`flex-1 transition-all duration-500 ${
                expandedIndex === index ? 'md:flex-[3]' : 'md:flex-[1]'
              }`}
            >
              <AccordionItem
                tag={item.tag}
                title={item.title}
                authorName={item.authorName}
                authorAvatar={item.authorAvatar}
                image={item.image}
                isExpanded={expandedIndex === index}
                onToggle={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
