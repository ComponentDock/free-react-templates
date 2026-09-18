import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesGrid } from './ServicesGrid'

describe('ServicesGrid', () => {
  it('renders all six service cards', () => {
    render(<ServicesGrid />)

    const titles = [
      'General Constructing',
      'Building Modeling',
      'Design Build',
      'Construction Services',
      'Pre-Construction Design',
      'Construction Management',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('renders an icon for each service', () => {
    const { container } = render(<ServicesGrid />)

    // Each service has an SVG icon (aria-hidden)
    const svgs = container.querySelectorAll('svg[aria-hidden="true"]')
    expect(svgs.length).toBe(6)
  })

  it('renders descriptions for each service', () => {
    render(<ServicesGrid />)

    const descriptions = screen.getAllByText(/Bookmarksgrove/)
    expect(descriptions.length).toBe(6)
  })
})
