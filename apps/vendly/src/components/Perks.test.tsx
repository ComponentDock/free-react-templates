import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Perks } from './Perks'
import { PERKS } from '../data'

describe('Perks', () => {
  it('renders three perk columns with headings, blurbs and icons', () => {
    const { container } = render(<Perks />)

    for (const perk of PERKS) {
      const heading = screen.getByRole('heading', { level: 2, name: perk.heading })
      expect(heading).toHaveClass('uppercase', 'text-ink')
      /* All three blurbs are identical placeholder copy — expect at least one. */
      expect(screen.getAllByText(perk.blurb).length).toBeGreaterThanOrEqual(1)
    }

    /* Each column has a brand-tinted icon (lucide renders an <svg>). */
    const icons = container.querySelectorAll('svg')
    expect(icons.length).toBe(PERKS.length)
    for (const icon of icons) {
      expect(icon).toHaveClass('text-brand')
    }

    /* The strip has the #edf0f5 bottom border. */
    expect(container.querySelector('section')).toHaveClass('border-line')
  })
})
