/**
 * Model roster and search-filter logic for the Catwalk template.
 *
 * Display stats (age, height in cm, measurements, shoe size, eye color)
 * mirror the original ColorLib "Topmodel" model cards. The search
 * attributes (height in feet, bust/waist/hips in the units used by the
 * original search bar) power the client-side model filter.
 */

export interface Model {
  name: string
  image: string
  age: number
  height: number
  bust: number
  waist: number
  hips: number
  shoes: number
  eyes: string
  search: {
    height: string
    bust: string
    waist: string
    hips: string
    eyes: string
  }
}

export interface ModelFilters {
  height: string
  bust: string
  waist: string
  hips: string
  eyes: string
}

export const EMPTY_FILTERS: ModelFilters = {
  height: '',
  bust: '',
  waist: '',
  hips: '',
  eyes: '',
}

export const MODELS: Model[] = [
  {
    name: 'Patricia Becket',
    image: 'https://picsum.photos/seed/catwalk-model-1/600/800',
    age: 21,
    height: 175,
    bust: 90,
    waist: 65,
    hips: 90,
    shoes: 39,
    eyes: 'Blue',
    search: { height: '5.9', bust: '90cm', waist: '65', hips: '90', eyes: 'Blue' },
  },
  {
    name: 'Emily Stewart',
    image: 'https://picsum.photos/seed/catwalk-model-2/600/800',
    age: 22,
    height: 172,
    bust: 85,
    waist: 70,
    hips: 95,
    shoes: 40,
    eyes: 'Green',
    search: { height: '5.8', bust: '85cm', waist: '70', hips: '95', eyes: 'Green' },
  },
  {
    name: 'Sofia Scott',
    image: 'https://picsum.photos/seed/catwalk-model-3/600/800',
    age: 20,
    height: 168,
    bust: 95,
    waist: 75,
    hips: 100,
    shoes: 38,
    eyes: 'Brown',
    search: { height: '5.7', bust: '95cm', waist: '75', hips: '100', eyes: 'Brown' },
  },
  {
    name: 'Chloe Johnson',
    image: 'https://picsum.photos/seed/catwalk-model-4/600/800',
    age: 23,
    height: 176,
    bust: 90,
    waist: 70,
    hips: 95,
    shoes: 39,
    eyes: 'Gray',
    search: { height: '5.9', bust: '90cm', waist: '70', hips: '95', eyes: 'Gray' },
  },
  {
    name: 'Victoria Henderson',
    image: 'https://picsum.photos/seed/catwalk-model-5/600/800',
    age: 24,
    height: 180,
    bust: 100,
    waist: 80,
    hips: 105,
    shoes: 40,
    eyes: 'Amber',
    search: { height: '6', bust: '100cm', waist: '80', hips: '105', eyes: 'Amber' },
  },
  {
    name: 'Ella Turner',
    image: 'https://picsum.photos/seed/catwalk-model-6/600/800',
    age: 19,
    height: 165,
    bust: 85,
    waist: 65,
    hips: 90,
    shoes: 38,
    eyes: 'Black',
    search: { height: '5.6', bust: '85cm', waist: '65', hips: '90', eyes: 'Black' },
  },
]

/** True when every non-empty filter matches the model's search attributes. */
export function matchesFilters(model: Model, filters: ModelFilters): boolean {
  return (
    (filters.height === '' || model.search.height === filters.height) &&
    (filters.bust === '' || model.search.bust === filters.bust) &&
    (filters.waist === '' || model.search.waist === filters.waist) &&
    (filters.hips === '' || model.search.hips === filters.hips) &&
    (filters.eyes === '' || model.search.eyes === filters.eyes)
  )
}
