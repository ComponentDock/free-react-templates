export interface PriceRow {
  name: string
  duration: string
  price: string
}

export interface AccordionPanel {
  id: string
  title: string
  rows: PriceRow[]
}

/** Shared rows for both panels (reference: identical lists). */
const PRICE_ROWS: PriceRow[] = [
  { name: 'Face Treatments', duration: '40 min.', price: '$10' },
  { name: 'Nail Treatments', duration: '30 min.', price: '$20' },
  { name: 'Medical Treatments', duration: '60 min.', price: '$10' },
  { name: 'Hair Treatments', duration: '30 min.', price: '$30' },
]

/** Accordion panels in reference order — Spa Therapies open by default. */
export const PANELS: AccordionPanel[] = [
  { id: 'spa-therapies', title: 'Spa Therapies', rows: PRICE_ROWS },
  { id: 'massage-therapies', title: 'Massage Therapies', rows: PRICE_ROWS },
]
