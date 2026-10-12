import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Features } from './Features'
import { FEATURES, FEATURES_LABEL } from '../lib/site'
import { tokens } from '../test/match-media'

const GLYPH_KEYS = ['ring', 'venue', 'honeymoon', 'invitation', 'tasting', 'planner']

describe('Features', () => {
  it('lays six white cards out in the design two columns', () => {
    const { container } = render(<Features />)

    const section = screen.getByRole('region', { name: FEATURES_LABEL })
    const cards = [...container.querySelectorAll('article')]

    expect(tokens(section)).toEqual(expect.arrayContaining(['py-[100px]']))
    expect(tokens(container.querySelector('.grid') as Element)).toEqual(
      expect.arrayContaining(['grid-cols-1', 'md:grid-cols-2', 'md:gap-x-[30px]']),
    )
    expect(cards).toHaveLength(6)
    expect(cards.map((card) => card.querySelector('h3')?.textContent)).toEqual(
      FEATURES.map((feature) => feature.title),
    )
    expect(cards.every((card) => tokens(card).includes('p-[30px]'))).toBe(true)
    expect(cards.every((card) => tokens(card).includes('bg-white'))).toBe(true)
  })

  it('keeps the design card copy rather than its misspellings', () => {
    expect(FEATURES[3]?.title).toBe('Invitation')
    expect(FEATURES[4]?.title).toBe('Red Wine Tasting')
    expect(FEATURES.map((feature) => feature.body).every((body) => body.length > 0)).toBe(true)
  })

  it('stands each glyph on its own mint disc, clear of the heading that names it', () => {
    render(<Features />)

    for (const key of GLYPH_KEYS) {
      const disc = screen.getByTestId(`feature-disc-${key}`)

      expect(disc).toHaveAttribute('aria-hidden', 'true')
      expect(tokens(disc.querySelector('span') as Element)).toEqual(
        expect.arrayContaining(['bg-brand', 'h-[70px]', 'w-[70px]', 'rounded-full']),
      )

      const glyph = disc.querySelector('svg') as SVGElement

      expect(glyph.getAttribute('aria-hidden')).toBe('true')
      expect(tokens(glyph)).toEqual(expect.arrayContaining(['h-[48px]', 'w-[48px]', 'lg:h-[72px]', 'text-ink']))
    }
  })
})
