import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Services } from './Services'
import { services, servicesHeading, servicesHighlight } from '../data'

describe('Services', () => {
  it('shows the green subheading and the 40K+ heading with the highlight in green', () => {
    render(<Services />)
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(servicesHeading)
    expect(screen.getByText(servicesHighlight)).toHaveClass('text-brand')
  })

  it('renders five cards, each with a blob icon, title, and distinct blurb', () => {
    const { container } = render(<Services />)
    const icons = container.querySelectorAll('.services-icon svg')
    expect(icons.length).toBe(services.length)
    for (const service of services) {
      expect(screen.getByRole('heading', { name: service.title })).toBeInTheDocument()
    }
    const blurbs = services.map((service) => service.text)
    expect(new Set(blurbs).size).toBe(services.length)
    for (const blurb of blurbs) {
      expect(screen.getByText(blurb)).toBeInTheDocument()
    }
  })
})
