import { ArrowRight } from 'lucide-react'
import { hoursClosing, hoursCtaLabel, hoursOpening, hoursTitle } from '../data'
import { cn } from '@free-react-templates/ui'

interface HoursBarProps {
  /** 'top' overlaps the hero bottom (skew -12deg, left); 'bottom' sits at
   *  the right edge between contact and footer (skew +12deg). */
  variant?: 'top' | 'bottom'
}

export function HoursBar({ variant = 'top' }: HoursBarProps) {
  return (
    <div
      className={cn(
        'relative z-10',
        variant === 'top'
          ? '-mt-20 max-w-[700px] px-4 sm:px-8'
          : 'mx-auto w-[90%] max-w-7xl md:w-1/2 md:max-w-none md:px-8',
      )}
    >
      <div className={cn('relative', variant === 'bottom' && 'md:ml-auto md:max-w-[700px]')}>
        {/* Skewed red panel behind straight content (top: -12deg origin
            bottom-left; bottom: +12deg origin bottom-right). */}
        <span
          aria-hidden="true"
          className={cn(
            'absolute inset-0 bg-brand',
            variant === 'top'
              ? 'origin-bottom-left [transform:skew(-12deg)]'
              : 'origin-bottom-right [transform:skew(12deg)]',
          )}
        />
        <div className="relative flex flex-col items-start gap-4 p-10 text-white sm:flex-row sm:items-center">
          <div className="sm:mr-4">
            <strong className="block text-xl font-bold uppercase">{hoursTitle}</strong>
            <p className="mt-1 text-sm">
              {hoursOpening} &mdash; {hoursClosing}
            </p>
          </div>
          <div className="sm:ml-auto">
            <a
              href="#contact-section"
              className="inline-flex items-center gap-2 bg-accent px-5 py-3 text-xs font-black uppercase tracking-wider text-white transition-opacity hover:opacity-90"
            >
              <span>{hoursCtaLabel}</span>
              <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
