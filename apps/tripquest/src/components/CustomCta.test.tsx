import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CustomCta } from './CustomCta'

describe('CustomCta', () => {
  it('renders the split band with the stacked headline, blurb and yellow action', () => {
    const { container } = render(<CustomCta />)

    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading.textContent).toContain('Did not find your Package?')
    expect(heading.textContent).toContain("We'll make it for you")

    const cta = screen.getByRole('link', { name: 'Request Custom Price' })
    expect(cta).toHaveAttribute('href', '#contact')
    expect(cta.className).toContain('border-brand')

    const image = container.querySelector('img')
    expect(image).toHaveAttribute('src', 'https://picsum.photos/seed/tripquest-cta/960/760')
    expect(image).toHaveAttribute('alt', 'Travellers planning a custom route')
  })
})
