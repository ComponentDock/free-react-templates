import { ArrowRight } from 'lucide-react'
import { cn } from '@free-react-templates/ui'

interface CTABannerProps {
  className?: string
}

export function CTABanner({ className }: CTABannerProps) {
  return (
    <section id="donate" className={cn('py-16 md:py-20 bg-brand text-white', className)}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Want To Work With Us?</h2>
        <p className="font-body text-xl text-white/90 mb-8">
          Join our team of dedicated volunteers and make a real difference today
        </p>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 bg-white text-brand px-8 py-3 rounded-[5px] font-heading font-medium hover:bg-heading hover:text-white transition-colors"
        >
          Get Involved
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </section>
  )
}
