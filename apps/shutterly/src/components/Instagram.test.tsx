import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Instagram } from './Instagram'

describe('Instagram', () => {
  it('renders six square photo tiles with a hover overlay', () => {
    const { container } = render(<Instagram />)

    const strip = screen.getByRole('region', { name: /instagram/i })
    const images = within(strip).getAllByRole('img')
    expect(images).toHaveLength(6)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('shutterly-insta-1'))
    expect(images[5]).toHaveAttribute('src', expect.stringContaining('shutterly-insta-6'))

    // Every tile carries a decorative Instagram icon overlay
    const overlays = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(overlays).toHaveLength(6)
  })
})
