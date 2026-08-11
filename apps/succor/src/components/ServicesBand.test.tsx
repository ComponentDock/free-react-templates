import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesBand } from './ServicesBand'

describe('ServicesBand', () => {
  it('renders four service cards with headings and blurbs', () => {
    render(<ServicesBand />)

    expect(screen.getByRole('heading', { name: 'Help & Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Adoption' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Volunteering' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Education' })).toBeInTheDocument()
  })

  it('shows the 203 Fake St address as the Help & Support blurb', () => {
    render(<ServicesBand />)

    expect(
      screen.getByText('203 Fake St. Mountain View, San Francisco, California, USA'),
    ).toBeInTheDocument()
  })

  it('marks the Volunteering card as active with a brand background on desktop', () => {
    render(<ServicesBand />)

    const activeCard = screen.getByRole('heading', { name: 'Volunteering' }).closest('div')
    expect(activeCard?.className).toMatch(/lg:bg-brand/)
  })

  it('renders a 60px lucide icon above each heading', () => {
    const { container } = render(<ServicesBand />)
    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(4)
    for (const icon of icons) {
      expect(icon.getAttribute('class')).toMatch(/h-\[60px\]/)
      expect(icon.getAttribute('class')).toMatch(/text-black\/20/)
    }
  })
})
