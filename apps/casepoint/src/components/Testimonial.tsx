import { cn } from '@free-react-templates/ui'

interface TestimonialProps {
  className?: string
}

export function Testimonial({ className }: TestimonialProps) {
  return (
    <section
      className={cn('py-20 bg-cover bg-center', className)}
      style={{ backgroundImage: 'url(https://picsum.photos/seed/casepoint-testimonial/1920/800)' }}
    >
      <div className="absolute inset-0 bg-brand-darker/80" />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="67"
          height="49"
          viewBox="0 0 67 49"
          className="mx-auto mb-8"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            fill="rgb(255, 255, 255)"
            d="M57.053,48.208 L42.790,48.208 L52.299,29.240 L38.036,29.240 L38.036,0.790 L66.562,0.790 L66.562,29.240 L57.053,48.208 ZM4.755,48.208 L14.263,29.240 L0.000,29.240 L0.000,0.790 L28.527,0.790 L28.527,29.240 L19.018,48.208 L4.755,48.208 Z"
          />
        </svg>
        <p className="text-white text-lg leading-relaxed mb-10">
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis por incididunt ut labore et dolore mas.
        </p>
        <div className="flex items-center justify-center gap-4">
          <img
            src="https://picsum.photos/seed/casepoint-founder/80/80"
            alt="Oliva Jems"
            className="w-16 h-16 rounded-full object-cover"
            loading="lazy"
          />
          <div className="text-left">
            <span className="text-white font-heading font-semibold block">Oliva Jems</span>
            <span className="text-white/70 text-sm">Chief Lawyer</span>
          </div>
        </div>
      </div>
    </section>
  )
}
