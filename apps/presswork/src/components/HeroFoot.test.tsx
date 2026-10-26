import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { HeroFoot } from './HeroFoot'
import { COMPONENT_DOCK_URL, CTA, INTRO, SERVICES } from '../data/site'

describe('HeroFoot', () => {
  it('opens with the intro paragraph, availability sentence included', () => {
    const { container } = render(<HeroFoot />)
    const intro = container.querySelector('.pw-intro')

    expect(intro?.textContent).toBe(INTRO)
    expect(intro).toHaveTextContent('Booking projects for spring 2027')
  })

  it('renders the three services in order with hidden numerals', () => {
    render(<HeroFoot />)
    const items = within(screen.getByRole('list')).getAllByRole('listitem')

    expect(items).toHaveLength(3)
    expect(items.map((item) => item.textContent)).toEqual([
      '01Identity systems',
      '02Websites & products',
      '03Editorial & packaging',
    ])
    for (const item of items) {
      expect(item.querySelector('.pw-num')).toHaveAttribute('aria-hidden', 'true')
    }
    expect(SERVICES).toHaveLength(3)
  })

  it('points the pill at a real destination and names it with the label only', () => {
    render(<HeroFoot />)
    const cta = screen.getByRole('link', { name: CTA.label })

    expect(cta).toHaveAttribute('href', COMPONENT_DOCK_URL)
    expect(cta).toHaveClass('pw-cta')
    expect(cta.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})
