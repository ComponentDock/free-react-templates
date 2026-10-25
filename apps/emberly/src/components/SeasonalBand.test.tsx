import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { SeasonalBand } from './SeasonalBand'
import { SEASONAL } from '../content'

describe('SeasonalBand', () => {
  it('renders the one warm box: ember rule, ember ground, ember CTA', () => {
    const { container } = render(<SeasonalBand />)
    const box = container.querySelector('#seasonal [data-animate] > div')

    expect(box).toHaveClass('border-l-4', 'border-heat-400', 'bg-heat-50', 'rounded-2xl')
    expect(screen.getByText(SEASONAL.eyebrow)).toHaveClass('text-heat-700')
    expect(screen.getByRole('heading', { name: SEASONAL.heading })).toHaveClass(
      'text-xl',
      'font-medium',
    )
    expect(screen.getByText(SEASONAL.body)).toHaveClass('font-light', 'text-ink-600')
    expect(screen.getByText(SEASONAL.footnote)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: SEASONAL.cta })).toHaveClass(
      'bg-heat-600',
      'hover:bg-heat-700',
    )
  })

  it('is a 48 px band rather than a .section', () => {
    const { container } = render(<SeasonalBand />)
    const band = container.querySelector('#seasonal')
    expect(band).toHaveClass('py-12')
    expect(band).not.toHaveClass('section')
  })
})
