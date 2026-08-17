import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Steps } from './Steps'

describe('Steps', () => {
  it('renders four step cards with titles, excerpts, icons, and circular arrow links', () => {
    render(<Steps />)
    const section = screen.getByRole('region', { name: 'Steps' })
    const list = within(section).getByRole('list')
    const items = within(list).getAllByRole('listitem')
    expect(items).toHaveLength(4)

    const titles = [
      'Easy to search',
      'Improve business insight',
      'Fast as lightning',
      'Grow business',
    ]
    for (const title of titles) {
      expect(within(list).getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    const moreLinks = within(list).getAllByRole('link', { name: /More about/ })
    expect(moreLinks).toHaveLength(4)
    expect(within(list).queryAllByRole('img')).toHaveLength(0) // icons are inline SVG, not imgs
    expect(list.querySelectorAll('svg').length).toBeGreaterThanOrEqual(4)
  })

  it('lays out white cards that overlap the section below with a hover border', () => {
    render(<Steps />)
    const cards = screen.getAllByTestId('step-card')
    expect(cards).toHaveLength(4)
    for (const card of cards) {
      expect(card.className).toContain('bg-white')
      expect(card.className).toContain('mb-[-42px]')
      expect(card.className).toContain('group')
    }
  })
})
