import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Features } from './Features'

describe('Features', () => {
  it('renders all 7 feature cards with icons, titles, and descriptions', () => {
    render(<Features />)

    const titles = [
      'Responsive',
      'Expertise',
      'Support',
      'Innovation',
      'Passion',
      'Analytics',
      'Design',
    ]

    for (const title of titles) {
      expect(screen.getByRole('heading', { name: title })).toBeInTheDocument()
    }

    expect(screen.getByText(/Websites that look great/)).toBeInTheDocument()
    expect(screen.getByText(/Our team brings years/)).toBeInTheDocument()
    expect(screen.getByText(/Dedicated support/)).toBeInTheDocument()
    expect(screen.getByText(/Cutting-edge technology/)).toBeInTheDocument()
    expect(screen.getByText(/We care deeply/)).toBeInTheDocument()
    expect(screen.getByText(/Data-driven insights/)).toBeInTheDocument()
    expect(screen.getByText(/Beautiful, intuitive interfaces/)).toBeInTheDocument()
  })

  it('has 7 feature card sections', () => {
    render(<Features />)
    // Each card has an uppercase heading h3
    const headings = screen.getAllByRole('heading', { level: 3 })
    expect(headings).toHaveLength(7)
  })
})
