import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { App } from './App'

const articles = () => screen.getAllByRole('article')

describe('App', () => {
  it('renders one band: a single main landmark holding the head and the grid', () => {
    render(<App />)

    const mains = screen.getAllByRole('main')
    expect(mains).toHaveLength(1)
    expect(mains[0]).toHaveAttribute('id', 'journal')
    expect(mains[0]).toHaveClass('mx-auto', 'w-full', 'max-w-[1212px]', 'px-4')
    expect(mains[0]!.className).toContain('py-[clamp(32px,6vw,72px)]')
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
    expect(articles()).toHaveLength(3)
  })

  it('paints the warm paper ground and adds no second band', () => {
    const { container } = render(<App />)

    expect(container.firstElementChild).toHaveClass(
      'min-h-screen',
      'bg-paper',
      'font-sans',
      'text-ink',
    )
    expect(screen.queryByRole('navigation')).toBeNull()
    expect(screen.queryByRole('banner')).not.toBeNull()
    expect(screen.queryAllByRole('section')).toHaveLength(0)
  })

  it('keeps the heading outline h1 → h2 → h2 → h2 with no skipped level', () => {
    render(<App />)

    expect(screen.getAllByRole('heading').map((node) => node.tagName)).toEqual([
      'H1',
      'H2',
      'H2',
      'H2',
    ])
    expect(screen.queryByRole('heading', { level: 3 })).toBeNull()
  })

  it('carries the three articles verbatim, in order', () => {
    render(<App />)

    const cards = articles()
    expect(cards.map((card) => card.id)).toEqual(['post-1', 'post-2', 'post-3'])
    expect(cards.map((card) => within(card).getByRole('heading', { level: 2 }).textContent)).toEqual([
      'The two-hour morning: how we plan deep work around meetings',
      'Container queries in production: what changed after six months',
      'What a balcony garden taught me about shipping small',
    ])
    expect(cards.map((card) => within(card).getByText(/min read$/).textContent)).toEqual([
      '6 min read',
      '9 min read',
      '4 min read',
    ])
    expect(within(cards[0]!).getByText('Productivity')).toBeInTheDocument()
    expect(within(cards[1]!).getByText('Development')).toBeInTheDocument()
    expect(within(cards[2]!).getByText('Life outside work')).toBeInTheDocument()
  })

  it('points every anchor at a real fragment or the Component Dock, never at "#"', () => {
    render(<App />)

    const anchors = Array.from(document.querySelectorAll('a[href]'))
    expect(anchors).toHaveLength(5)

    for (const anchor of anchors) {
      const href = anchor.getAttribute('href')
      expect(href).toBeTruthy()
      expect(href).not.toBe('#')
    }

    expect(anchors.map((anchor) => anchor.getAttribute('href'))).toEqual([
      '#journal',
      '#post-1',
      '#post-2',
      '#post-3',
      'https://www.componentdock.com/',
    ])
  })

  it('credits Component Dock in the one-line footer', () => {
    render(<App />)

    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')

    const footer = link.closest('footer')!
    expect(footer).toHaveTextContent('More templates at Component Dock')
    expect(footer).toHaveClass('text-xs', 'text-muted')
    expect(footer.children).toHaveLength(1)
  })

  it('names every photograph with a description of the scene', () => {
    render(<App />)

    expect(screen.getAllByRole('img').map((image) => image.getAttribute('alt'))).toEqual([
      'Laptop, notebook and coffee cup on a wooden desk',
      'Laptop showing code next to a small plant',
      'Garden trowel and fresh soil on a dark surface',
    ])
  })
})
