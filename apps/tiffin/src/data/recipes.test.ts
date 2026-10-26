import { describe, expect, it } from 'vitest'
import { COMPONENT_DOCK_URL, RECIPES, TINT_VARS } from './recipes'

describe('recipes data', () => {
  it('ships exactly three dishes in menu order', () => {
    expect(RECIPES).toHaveLength(3)
    expect(RECIPES.map((recipe) => recipe.id)).toEqual(['margherita', 'farfalle', 'miso-salmon'])
  })

  it('carries the middle dot separator in every course line', () => {
    expect(RECIPES.map((recipe) => recipe.course)).toEqual([
      'Main · Italian',
      'Lunch · Mediterranean',
      'Dinner · Bowls',
    ])
    for (const recipe of RECIPES) {
      expect(recipe.course).toContain('\u00B7')
    }
  })

  it('points every dish at its own real route, never a dead hash', () => {
    expect(RECIPES.map((recipe) => recipe.href)).toEqual([
      '/recipes/sheet-pan-margherita',
      '/recipes/lemony-farfalle',
      '/recipes/miso-salmon-bowl',
    ])
    for (const recipe of RECIPES) {
      expect(recipe.href.startsWith('/recipes/')).toBe(true)
      expect(recipe.href).not.toBe('#')
    }
  })

  it('pins the copy a cook reads on the card', () => {
    const first = RECIPES[0]!
    expect(first.title).toBe('Sheet-Pan Margherita with Crispy Basil')
    expect(first.blurb).toBe(
      'A no-knead dough that rises while you shop, baked hot on the lowest rack.',
    )
    expect(first.time).toBe('45 min')
    expect(first.kcal).toBe('610 kcal')
    expect(first.tags).toEqual(['Vegetarian', 'Serves 4'])

    expect(RECIPES[1]!.time).toBe('20 min')
    expect(RECIPES[1]!.kcal).toBe('480 kcal')
    expect(RECIPES[1]!.tags).toEqual(['Vegan option', 'Meal prep'])

    expect(RECIPES[2]!.time).toBe('35 min')
    expect(RECIPES[2]!.kcal).toBe('540 kcal')
    expect(RECIPES[2]!.tags).toEqual(['High protein', 'Gluten free'])
  })

  it('orders the difficulty 2 / 1 / 3 with a word beside each number', () => {
    expect(RECIPES.map((recipe) => recipe.level)).toEqual([2, 1, 3])
    expect(RECIPES.map((recipe) => recipe.levelLabel)).toEqual(['Medium', 'Easy', 'Involved'])
  })

  it('gives each card a tint that exists in the theme', () => {
    expect(RECIPES.map((recipe) => recipe.tint)).toEqual(['peach', 'sage', 'butter'])
    for (const recipe of RECIPES) {
      expect(TINT_VARS[recipe.tint]).toMatch(/^var\(--color-tint-(peach|sage|butter)\)$/)
    }
  })

  it('loads a deterministic placeholder photograph per dish, always with alt text', () => {
    expect(RECIPES.map((recipe) => recipe.image.src)).toEqual([
      'https://picsum.photos/seed/tiffin-1/700/520',
      'https://picsum.photos/seed/tiffin-2/700/520',
      'https://picsum.photos/seed/tiffin-3/700/520',
    ])
    for (const recipe of RECIPES) {
      expect(recipe.image.alt.length).toBeGreaterThan(0)
    }
    expect(RECIPES[0]!.image.alt).toBe(
      'Thin-crust pizza with tomato, basil and melted cheese on a wooden board',
    )
  })

  it('carries the standing attribution line', () => {
    expect(COMPONENT_DOCK_URL).toBe('https://www.componentdock.com/')
  })
})
