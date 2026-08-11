import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { HeroGrid } from './HeroGrid'
import { defaultMeta, featuredTag, heroCards, playLabel } from '../data'

describe('HeroGrid', () => {
  it('renders the featured card with play overlay, tag and post meta', () => {
    render(<HeroGrid />)
    const section = screen.getByRole('region', { name: 'Featured videos' })
    const featured = heroCards[0]!
    expect(within(section).getByRole('heading', { name: featured.title })).toBeInTheDocument()
    expect(
      within(section).getByRole('link', { name: playLabel(featured.title) }),
    ).toBeInTheDocument()
    expect(within(section).getAllByText(featuredTag).length).toBeGreaterThan(0)
    expect(within(section).getByText(defaultMeta.author)).toBeInTheDocument()
    expect(within(section).getByText(defaultMeta.date)).toBeInTheDocument()
    expect(within(section).getAllByText(defaultMeta.comments).length).toBeGreaterThan(0)
    expect(within(section).getAllByText(defaultMeta.likes).length).toBeGreaterThan(0)
  })

  it('renders the three smaller split cards with play overlays', () => {
    render(<HeroGrid />)
    const section = screen.getByRole('region', { name: 'Featured videos' })
    for (const card of heroCards.slice(1)) {
      expect(within(section).getByRole('heading', { name: card.title })).toBeInTheDocument()
      expect(within(section).getByRole('link', { name: playLabel(card.title) })).toBeInTheDocument()
    }
  })

  it('uses the light hero background', () => {
    const { container } = render(<HeroGrid />)
    expect(container.firstElementChild).toHaveClass('bg-mist')
  })
})
