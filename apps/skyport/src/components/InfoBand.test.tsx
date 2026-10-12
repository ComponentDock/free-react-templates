import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBand } from './InfoBand'

describe('InfoBand', () => {
  it('renders white copy over the own cover image and its 50% overlay', () => {
    const { container } = render(<InfoBand />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveClass('text-white')
    const cover = container.querySelector('img')
    expect(cover).toHaveAttribute('src', 'https://picsum.photos/seed/skyport-band/1920/900')
    expect(cover).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('.bg-overlay')).toHaveAttribute('aria-hidden', 'true')
  })

  it('anchors the band image to the right with the section rhythm', () => {
    const { container } = render(<InfoBand />)

    expect(container.querySelector('section')).toHaveClass('bg-right', 'bg-cover', 'py-[120px]')
  })

  it('closes with a white pill support CTA', () => {
    render(<InfoBand />)

    const cta = screen.getByRole('link', { name: 'Get Customer Support' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta).toHaveClass('bg-surface', 'text-ink', 'rounded-[25px]')
  })
})
