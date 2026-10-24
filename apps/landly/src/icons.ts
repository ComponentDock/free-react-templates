import { Bath, BedDouble, Maximize, type LucideIcon } from 'lucide-react'
import type { heroSpecs } from './data'

type SpecIconKey = (typeof heroSpecs)[number]['icon']

/** Listing spec icons (floor area, bedrooms, bathrooms). */
export const specIcons: Record<SpecIconKey, LucideIcon> = {
  area: Maximize,
  beds: BedDouble,
  baths: Bath,
}
