export type Tint = 'peach' | 'sage' | 'butter'

/** The three-step difficulty scale the dots encode. */
export type Level = 1 | 2 | 3

export interface RecipeImage {
  readonly src: string
  readonly alt: string
}

export interface Recipe {
  readonly id: string
  readonly course: string
  readonly title: string
  readonly href: string
  readonly blurb: string
  readonly time: string
  readonly level: Level
  readonly levelLabel: string
  readonly kcal: string
  readonly tags: readonly string[]
  readonly tint: Tint
  readonly image: RecipeImage
}

/** The repository's standing attribution line. */
export const COMPONENT_DOCK_URL = 'https://www.componentdock.com/'

/**
 * One custom property drives both the band and the pills, so a card can never
 * paint its header in one colour and its tags in another. The values point at
 * the `@theme` tokens rather than repeating the hex.
 */
export const TINT_VARS: Record<Tint, string> = {
  peach: 'var(--color-tint-peach)',
  sage: 'var(--color-tint-sage)',
  butter: 'var(--color-tint-butter)',
}

/** The level word is data, not a lookup table — it ships next to its number. */
export const RECIPES: readonly Recipe[] = [
  {
    id: 'margherita',
    course: 'Main · Italian',
    title: 'Sheet-Pan Margherita with Crispy Basil',
    href: '/recipes/sheet-pan-margherita',
    blurb: 'A no-knead dough that rises while you shop, baked hot on the lowest rack.',
    time: '45 min',
    level: 2,
    levelLabel: 'Medium',
    kcal: '610 kcal',
    tags: ['Vegetarian', 'Serves 4'],
    tint: 'peach',
    image: {
      src: 'https://picsum.photos/seed/tiffin-1/700/520',
      alt: 'Thin-crust pizza with tomato, basil and melted cheese on a wooden board',
    },
  },
  {
    id: 'farfalle',
    course: 'Lunch · Mediterranean',
    title: 'Lemony Farfalle with Rocket and Tomatoes',
    href: '/recipes/lemony-farfalle',
    blurb: 'Dress it warm so the pasta drinks up the lemon, then pack the rest for tomorrow.',
    time: '20 min',
    level: 1,
    levelLabel: 'Easy',
    kcal: '480 kcal',
    tags: ['Vegan option', 'Meal prep'],
    tint: 'sage',
    image: {
      src: 'https://picsum.photos/seed/tiffin-2/700/520',
      alt: 'Farfalle pasta salad with cherry tomatoes and rocket in a white bowl',
    },
  },
  {
    id: 'miso-salmon',
    course: 'Dinner · Bowls',
    title: 'Miso Salmon Bowl with Quick Pickles',
    href: '/recipes/miso-salmon-bowl',
    blurb: 'Glaze, grill, slice. The pickles take ten minutes and keep for a week in the fridge.',
    time: '35 min',
    level: 3,
    levelLabel: 'Involved',
    kcal: '540 kcal',
    tags: ['High protein', 'Gluten free'],
    tint: 'butter',
    image: {
      src: 'https://picsum.photos/seed/tiffin-3/700/520',
      alt: 'Grain bowl with salmon, avocado, egg and corn',
    },
  },
]
