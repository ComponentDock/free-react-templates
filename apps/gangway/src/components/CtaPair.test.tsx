import { render, screen } from '@testing-library/react'
import { CTA_PRIMARY, CTA_SECONDARY } from '../lib/site'
import { CtaPair } from './CtaPair'

const secondary = () => screen.getByRole('link', { name: CTA_SECONDARY.label })
const primary = () => screen.getByRole('link', { name: CTA_PRIMARY.label })

describe('CtaPair — the bar’s two boarding calls', () => {
  it('renders exactly the pair, in the design’s order, at real destinations', () => {
    render(<CtaPair />)

    const pair = screen.getByTestId('cta-pair')

    expect(Array.from(pair.querySelectorAll('a')).map((link) => link.getAttribute('href'))).toEqual([
      CTA_SECONDARY.href,
      CTA_PRIMARY.href,
    ])
    expect(screen.getAllByRole('link')).toHaveLength(2)
  })

  it('draws the outline half with a 2px white border and a white inversion on hover', () => {
    render(<CtaPair />)

    const link = secondary()

    expect(link.className).toContain('border-2')
    expect(link.className).toContain('border-white')
    expect(link.className).toContain('bg-transparent')
    expect(link.className).toContain('text-white')
    expect(link.className).toContain('hover:bg-white')
    expect(link.className).toContain('hover:text-black')
    expect(link.className).toContain('rounded-btn')
    expect(link.className).toContain('px-3')
    expect(link.className).toContain('py-1.5')
    expect(link.className).toContain('leading-6')
  })

  it('draws the filled half in the brand green, one border pixel thinner, lifting on hover', () => {
    render(<CtaPair />)

    const link = primary()

    expect(link.className).toContain('bg-brand')
    expect(link.className).toContain('border-brand')
    expect(link.className).not.toContain('border-2')
    expect(link.className).toContain('hover:bg-brand-hover')
    expect(link.className).toContain('hover:border-brand-hover')
    expect(link.className).toContain('rounded-btn')
  })

  it('hides both halves below 992px, where the drawer’s rows carry them instead', () => {
    render(<CtaPair />)

    for (const link of [secondary(), primary()]) {
      expect(link.className).toContain('hidden')
      expect(link.className).toContain('lg:inline-flex')
    }
  })

  it('leads each half with an 8px-gap icon that is hidden from assistive tech', () => {
    render(<CtaPair />)

    for (const link of [secondary(), primary()]) {
      const icon = link.querySelector('svg')

      expect(icon).not.toBeNull()
      expect(icon).toHaveAttribute('aria-hidden', 'true')
    }
  })
})
