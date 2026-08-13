import { ArrowRightCircle } from 'lucide-react'
import { splitBlock } from '../data'

/** Split block (reference `.section.element-animate` + `block-41`): large
 *  heading "Create, Enhance and Sustain", two 20px paragraphs, an uppercase
 *  Read More link with an arrow, and the photo on the opposite side. */
export function SplitBlock() {
  return (
    <section id="about" className="bg-white py-[7rem]">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <h2 className="font-heading text-3xl leading-[1.2] font-black text-black md:text-[50px]">
            {splitBlock.title}
          </h2>
          {splitBlock.paragraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-lg leading-relaxed text-gray-500 md:text-xl">
              {paragraph}
            </p>
          ))}
          <a
            href="#about"
            className="mt-8 inline-flex items-center gap-2 pr-5 text-[0.9rem] font-bold tracking-[0.1em] text-primary-600 uppercase transition-all hover:pr-[30px]"
          >
            Read More
            <ArrowRightCircle className="h-5 w-5" aria-hidden="true" />
          </a>
        </div>
        <div className="lg:col-span-7">
          <div className="group overflow-hidden">
            <img
              src={splitBlock.image}
              alt=""
              aria-hidden="true"
              className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
