import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CausesSection } from './CausesSection'
import { CAUSES } from '../data'

describe('CausesSection', () => {
  it('renders the heading and three cause cards with stats and CTAs', () => {
    render(<CausesSection />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Major Causes' })).toBeInTheDocument()

    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)

    for (const cause of CAUSES) {
      expect(screen.getAllByText(cause.title)).toHaveLength(3)
    }

    /* Progress bars: 76% green fills. */
    const bars = screen.getAllByRole('progressbar', { name: 'Funding progress' })
    expect(bars).toHaveLength(3)
    for (const bar of bars) {
      expect(bar).toHaveAttribute('aria-valuenow', '76')
      expect(bar).toHaveStyle({ width: '76%' })
    }

    /* Stats row per card. */
    expect(screen.getAllByText('76% Funded')).toHaveLength(3)
    expect(screen.getAllByText('$7,689 Pledged')).toHaveLength(3)
    expect(screen.getAllByText('29 Days Remaining')).toHaveLength(3)

    /* CTAs. */
    expect(screen.getAllByRole('link', { name: 'View Details' })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: 'Donate Here' })).toHaveLength(3)
  })

  it('renders a photo per cause', () => {
    render(<CausesSection />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
    expect(images[0]).toHaveAttribute('src', CAUSES[0].image)
  })
})
