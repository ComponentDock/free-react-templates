import { useState } from 'react'
import { Minus, Plus } from 'lucide-react'
import { ACCORDION_ITEMS } from '../data'
import { cn } from '@free-react-templates/ui'

/* Why Choose Us — three-item accordion. The open item gets the brand navy
   background with white bold text and a minus glyph; closed items show a
   plus glyph. Clicking the open item collapses it. */
export function WhyChooseUs() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div>
      <span className="text-[11px] font-bold uppercase tracking-[.1rem] text-label">Why Us</span>
      <h2 className="mt-3 font-display text-3xl font-bold text-black">Why Choose Us</h2>

      <div className="mt-10">
        {ACCORDION_ITEMS.map((item, index) => {
          const open = openIndex === index
          return (
            <div key={item.title} className="border-b border-black/10">
              <h3>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? null : index)}
                  className={cn(
                    'flex w-full items-center gap-4 px-4 py-4 text-left text-sm font-bold text-black transition-colors hover:bg-footer',
                    open && 'bg-brand font-bold text-white hover:bg-brand',
                  )}
                >
                  <span className="w-4 shrink-0" aria-hidden="true">
                    {open ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </span>
                  {item.title}
                </button>
              </h3>
              {open && (
                <p className="px-4 pb-4 pl-12 text-sm leading-relaxed text-muted">{item.body}</p>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
