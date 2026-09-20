import { Award } from 'lucide-react'
import { Badge } from '@free-react-templates/ui'

export interface AboutProps {
  className?: string
}

export function About({ className }: AboutProps) {
  return (
    <section id="about" className={`bg-white py-20 md:py-28 ${className ?? ''}`}>
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-2">
        {/* Image */}
        <div className="relative">
          <img
            src="https://picsum.photos/seed/convention-about/600/400"
            alt="About Colloquium"
            className="rounded-lg shadow-lg"
            loading="lazy"
          />
          <div className="absolute -bottom-6 -right-6 rounded-lg bg-[#ff2d9b] px-6 py-4 text-center shadow-lg">
            <span
              className="block text-3xl font-bold text-white"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              20
            </span>
            <span className="text-xs uppercase text-white/90">Years of Experience</span>
          </div>
        </div>

        {/* Text */}
        <div>
          <p
            className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#ff2d9b]"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Welcome to Colloquium
          </p>
          <h2
            className="mb-6 text-3xl font-bold text-[#222] md:text-4xl"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            We Make Your Event Memorable &amp; Successful
          </h2>
          <p className="mb-4 leading-relaxed text-[#666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p className="mb-6 leading-relaxed text-[#666]">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <Badge variant="success" className="bg-[#ff2d9b]/10 text-[#ff2d9b]">
            <Award size={14} className="mr-1" />
            20 Year of Experience
          </Badge>
        </div>
      </div>
    </section>
  )
}
