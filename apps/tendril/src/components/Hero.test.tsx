import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import {
  FACTS,
  HABITS,
  HEADLINE,
  LEDE,
  STORES,
  STREAK_NOTE,
  TOAST,
  VISUAL_LABEL,
  WEEK,
} from '../data/site'
import { Hero } from './Hero'

describe('Hero', () => {
  it('labels the region by the headline it contains', () => {
    render(<Hero />)

    const section = screen.getByRole('region')
    const heading = screen.getByRole('heading', { level: 1 })

    expect(section.getAttribute('aria-labelledby')).toBe(heading.id)
  })

  it('opens the copy column with the score chip, five hidden stars and the count', () => {
    render(<Hero />)
    const rating = document.querySelector('.td-rating') as HTMLElement

    expect(within(rating).getByText('4.9')).toHaveClass('td-score')
    expect(within(rating).getByText('★★★★★')).toHaveAttribute('aria-hidden', 'true')
    expect(within(rating).getByText('from 38,000 ratings')).toBeInTheDocument()
  })

  it('renders the headline as a text line plus one block span, in that order', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    const nodes = Array.from(heading.childNodes)
    const spans = nodes.filter((node) => node.nodeName === 'SPAN')

    expect(heading.textContent).toBe(`${HEADLINE.lead} ${HEADLINE.accent}`)
    // Line one is a bare text node, line two is the only element child.
    expect(nodes[0]?.nodeType).toBe(Node.TEXT_NODE)
    expect(spans).toHaveLength(1)
    expect(spans[0]?.textContent).toBe(HEADLINE.accent)
  })

  it('keeps the lede as one paragraph and the streak claim available to assistive tech', () => {
    render(<Hero />)

    expect(screen.getByText(LEDE)).toHaveClass('td-sub')
    expect(screen.getByText(STREAK_NOTE)).toHaveClass('td-sr')
    expect(screen.getByText(TOAST)).toHaveAttribute('aria-hidden', 'true')
  })

  it('renders two store buttons, each with two label lines and a hidden icon', () => {
    render(<Hero />)
    const stores = document.querySelectorAll('.td-store')

    expect(stores).toHaveLength(STORES.length)
    STORES.forEach((store, index) => {
      const link = stores[index] as HTMLElement
      expect(link).toHaveAttribute('href', store.href)
      expect(link.querySelector('.td-store-top')?.textContent).toBe(store.top)
      expect(link.querySelector('.td-store-name')?.textContent).toBe(store.name)
      expect(link.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
    })
  })

  it('lists the three facts in order, each with its emphasis in ink', () => {
    render(<Hero />)
    const items = Array.from(document.querySelectorAll('.td-facts li'))

    expect(items).toHaveLength(FACTS.length)
    FACTS.forEach((fact, index) => {
      const item = items[index] as HTMLElement
      expect(item.querySelector('strong')?.textContent).toBe(fact.strong)
      expect(item.textContent).toBe(`${fact.strong}${fact.rest}`)
    })
  })

  it('names the product shot for assistive tech and draws the toast', () => {
    render(<Hero />)

    const visual = screen.getByRole('img', { name: VISUAL_LABEL })
    expect(visual).toHaveClass('td-visual')
    expect(within(visual).getByText(TOAST)).toHaveClass('td-toast')
  })

  it('draws five day cells with exactly one marked today', () => {
    render(<Hero />)

    const cells = document.querySelectorAll('.td-days > span')
    expect(cells).toHaveLength(5)
    expect(document.querySelectorAll('.td-days .is-today')).toHaveLength(1)
    expect(cells[2]?.textContent).toBe('We23')
  })

  it('draws five habit rows with exactly three done', () => {
    render(<Hero />)

    const rows = Array.from(document.querySelectorAll('.td-habits li'))
    expect(rows).toHaveLength(HABITS.length)
    expect(document.querySelectorAll('.td-habits .is-done')).toHaveLength(3)
    expect(rows[0]?.textContent).toBe('Drink 2 L of water')
    expect(rows[3]?.className).toBe('')
    expect(rows[0]?.querySelector('.td-box')).toHaveAttribute('aria-hidden', 'true')
  })

  it('draws seven week bars carrying their own height fraction', () => {
    render(<Hero />)

    const bars = Array.from(document.querySelectorAll('.td-week span'))
    expect(bars).toHaveLength(WEEK.length)
    expect(bars.map((bar) => (bar as HTMLElement).style.getPropertyValue('--v'))).toEqual([
      ...WEEK,
    ])
  })

  it('shows the streak summary on the back phone', () => {
    render(<Hero />)

    expect(document.querySelector('.td-streak')?.textContent).toBe('42')
    expect(document.querySelector('.td-s-label')?.textContent).toBe('This week')
    expect(document.querySelector('.td-s-sub')?.textContent).toBe('day streak')
    expect(document.querySelectorAll('.td-week-days span')).toHaveLength(7)
  })

  it('carries the ring progress as a custom property', () => {
    render(<Hero />)

    const ring = document.querySelector('.td-ring') as HTMLElement
    expect(ring.style.getPropertyValue('--p')).toBe('71%')
    expect(ring.textContent).toContain('5/7')
  })
})
