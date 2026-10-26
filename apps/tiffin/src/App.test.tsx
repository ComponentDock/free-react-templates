import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'
import { RECIPES } from './data/recipes'

describe('App', () => {
  it('renders one content-height stage holding head, grid and footer', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)

    const main = mains[0]!
    expect(main.className).toContain('mx-auto')
    expect(main.className).toContain('max-w-[1172px]')
    expect(main.className).toContain('px-4')
    expect(main.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(main.className).toContain('text-ink')
    expect(main.className).not.toContain('min-h')

    expect([...main.children].map((child) => child.tagName)).toEqual(['HEADER', 'DIV', 'FOOTER'])
  })

  it('walks one h1 over three h2 dish titles', () => {
    render(<App />)

    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Weeknight dinners, sorted')
    expect(screen.getAllByRole('heading', { level: 2 }).map((h2) => h2.textContent)).toEqual([
      'Sheet-Pan Margherita with Crispy Basil',
      'Lemony Farfalle with Rocket and Tomatoes',
      'Miso Salmon Bowl with Quick Pickles',
    ])
    expect(screen.getAllByRole('article')).toHaveLength(3)
  })

  it('ships three dish links plus the Component Dock line, and no dead hash', () => {
    render(<App />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(4)
    expect(links.map((link) => link.textContent)).toEqual([
      'Sheet-Pan Margherita with Crispy Basil',
      'Lemony Farfalle with Rocket and Tomatoes',
      'Miso Salmon Bowl with Quick Pickles',
      'Component Dock',
    ])
    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)
    expect(links[3]).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('is static by design — no buttons, forms, status regions or filters', () => {
    render(<App />)

    expect(document.querySelectorAll('button, input, select, textarea')).toHaveLength(0)
    expect(document.querySelectorAll('form')).toHaveLength(0)
    expect(document.querySelectorAll('[role="status"], [aria-live]')).toHaveLength(0)
  })

  it('gives every photograph alt text and a deterministic seed', () => {
    render(<App />)

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images.map((image) => image.getAttribute('src'))).toEqual([
      'https://picsum.photos/seed/tiffin-1/700/520',
      'https://picsum.photos/seed/tiffin-2/700/520',
      'https://picsum.photos/seed/tiffin-3/700/520',
    ])
    for (const image of images) {
      expect(image.getAttribute('alt')).toBeTruthy()
    }
  })

  it('paints each card with its own tint', () => {
    render(<App />)

    const cards = screen.getAllByRole('article')
    expect(cards.map((card) => card.getAttribute('style'))).toEqual([
      '--tint: var(--color-tint-peach);',
      '--tint: var(--color-tint-sage);',
      '--tint: var(--color-tint-butter);',
    ])
  })

  it('spreads the six filled dots 2 / 1 / 3 across the row', () => {
    render(<App />)

    const cards = screen.getAllByRole('article')
    const filled = cards.map(
      (card) => [...card.querySelectorAll('i')].filter((dot) => dot.className.includes('bg-accent'))
        .length,
    )
    expect(filled).toEqual([2, 1, 3])
    for (const card of cards) {
      expect(card.querySelectorAll('i')).toHaveLength(3)
    }
  })

  it('keeps the three course lines and three tag pairs', () => {
    render(<App />)

    for (const recipe of RECIPES) {
      expect(screen.getByText(recipe.course)).toBeInTheDocument()
      for (const tag of recipe.tags) {
        expect(screen.getAllByText(tag).length).toBeGreaterThan(0)
      }
    }
    expect(screen.getAllByRole('list', { name: 'Tags' })).toHaveLength(3)
    expect(within(screen.getByRole('contentinfo')).getByText(/Component Dock/)).toBeInTheDocument()
  })
})
