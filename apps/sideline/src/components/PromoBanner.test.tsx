import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { PromoBanner } from './PromoBanner'

describe('PromoBanner', () => {
  it('renders the yellow-overlay promo with the matchup text', () => {
    render(<PromoBanner />)
    expect(screen.getByRole('heading', { name: /Harbor Hawks vs Founders FC/ })).toBeInTheDocument()
    expect(screen.getByText('Premier League — Round 10')).toBeInTheDocument()
    expect(screen.getByText('10 September — 7:30 AM')).toBeInTheDocument()
  })

  it('applies the yellow overlay and fixed parallax background', () => {
    const { container } = render(<PromoBanner />)
    const banner = container.firstElementChild as HTMLElement
    expect(banner).toHaveClass('bg-fixed')
    expect(banner.style.backgroundImage).toContain('picsum.photos/seed/sideline-promo')
    const overlay = banner.querySelector('[aria-hidden="true"]')!
    expect(overlay).toHaveClass('bg-[rgba(238,198,10,0.9)]')
  })
})
