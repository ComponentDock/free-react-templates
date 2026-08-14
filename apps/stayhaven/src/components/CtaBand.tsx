import { useState } from 'react'
import { Button } from '@free-react-templates/ui'
import { CTA_IMAGE } from '../data'
import { ReservationModal } from './ReservationModal'

/* CTA band (source: section.section.bg-image.overlay — full-width
   background-image band "A Best Place To Stay. Reserve Now!" with an outline
   "Reserve Now" button that opens the reservation modal). */
export function CtaBand() {
  const [open, setOpen] = useState(false)

  return (
    <section
      className="relative bg-cover bg-center py-24"
      style={{ backgroundImage: `url('${CTA_IMAGE}')` }}
    >
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 px-4 text-center md:flex-row md:text-left">
        <h2 className="font-display text-3xl font-bold text-white md:text-4xl">
          A Best Place To Stay. Reserve Now!
        </h2>
        <Button
          onClick={() => setOpen(true)}
          className="h-auto rounded-full border-2 border-white bg-transparent px-10 py-3 text-white hover:bg-white hover:text-ink"
        >
          Reserve Now
        </Button>
      </div>
      <ReservationModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}
