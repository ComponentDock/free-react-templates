import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SERVICES } from '../data'
import { Services } from './Services'

describe('Services', () => {
  it('renders three service cards with indigo icons, headings and blurbs', () => {
    const { container } = render(<Services />)
    expect(screen.getByRole('region', { name: 'Services' })).toBeInTheDocument()
    for (const service of SERVICES) {
      expect(screen.getByRole('heading', { level: 3, name: service.title })).toBeInTheDocument()
      expect(screen.getByText(service.blurb)).toBeInTheDocument()
    }
    const icons = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(icons).toHaveLength(3)
    for (const icon of Array.from(icons)) {
      // SVG className is an SVGAnimatedString — assert via the attribute.
      expect(icon.getAttribute('class')).toContain('text-brand')
    }
  })
})
