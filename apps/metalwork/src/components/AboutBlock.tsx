import { ArrowRightCircle } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface AboutBlockProps {
  title: string
  text: string
  image: string
  /** Flip the layout: text on the left, image on the right. */
  reversed?: boolean
  /** Background tone: white (default) or the light surface. */
  tone?: 'white' | 'surface'
}

/** Alternating image/text about block (reference `.element-animate` +
 *  `block-41`): large photo with a scaling hover frame, 50px heading,
 *  20px paragraph, and an uppercase Read More link. */
export function AboutBlock({
  title,
  text,
  image,
  reversed = false,
  tone = 'white',
}: AboutBlockProps) {
  return (
    <section
      id={reversed ? undefined : 'about'}
      className={cn('py-[7rem]', tone === 'surface' ? 'bg-surface' : 'bg-white')}
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className={cn('lg:col-span-7', reversed && 'lg:order-2')}>
          <div className="group overflow-hidden">
            <img
              src={image}
              alt=""
              aria-hidden="true"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
        <div className={cn('lg:col-span-5', reversed && 'lg:order-1')}>
          <h2 className="font-heading text-3xl leading-[1.2] font-black text-black md:text-[50px]">
            {title}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">{text}</p>
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 pr-5 text-[0.9rem] font-bold tracking-[0.1em] text-primary-600 uppercase transition-all hover:pr-[30px]"
          >
            Read More
            <ArrowRightCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
