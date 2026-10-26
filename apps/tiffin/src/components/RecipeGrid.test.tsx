import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RECIPES } from '../data/recipes'
import { RecipeGrid } from './RecipeGrid'

describe('RecipeGrid', () => {
  it('lays three cards on an auto-fit grid with a 26 px column gutter and 96 px rows', () => {
    const { container } = render(<RecipeGrid recipes={RECIPES} />)

    const grid = container.firstElementChild!
    expect(grid.className).toContain('grid')
    expect(grid.className).toContain('grid-cols-[repeat(auto-fit,minmax(min(100%,280px),1fr))]')
    expect(grid.className).toContain('gap-x-[26px]')
    expect(grid.className).toContain('gap-y-24')
    expect(grid.className).not.toMatch(/(sm|md|lg|xl):/)
    expect(grid.children).toHaveLength(3)
  })

  it('keeps the menu order and the eager / lazy split', () => {
    render(<RecipeGrid recipes={RECIPES} />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => card.id)).toEqual(['margherita', 'farfalle', 'miso-salmon'])
    expect(cards[0]!.querySelector('img')!).toHaveAttribute('fetchpriority', 'high')
    expect(cards[1]!.querySelector('img')!).toHaveAttribute('fetchpriority', 'high')
    expect(cards[2]!.querySelector('img')!).toHaveAttribute('loading', 'lazy')
  })

  it('renders only the cards it is given', () => {
    render(<RecipeGrid recipes={[RECIPES[1]!]} />)

    expect(screen.getAllByRole('article')).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 2 }).textContent).toBe(
      'Lemony Farfalle with Rocket and Tomatoes',
    )
  })
})
