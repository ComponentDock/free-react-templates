import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders the section title', () => {
    render(<Portfolio />)
    expect(screen.getByText('Selected Work')).toBeInTheDocument()
  })

  it('renders all four portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Luminary Studios')).toBeInTheDocument()
    expect(screen.getByText('Horizon Media')).toBeInTheDocument()
    expect(screen.getByText('Apex Ventures')).toBeInTheDocument()
    expect(screen.getByText('Prism Collective')).toBeInTheDocument()
  })

  it('each portfolio item has a hover overlay with category text', () => {
    render(<Portfolio />)
    const businessItems = screen.getAllByText('Business')
    expect(businessItems.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('portfolio items are links', () => {
    render(<Portfolio />)
    const links = screen.getAllByRole('link')
    const portfolioLinks = links.filter(
      (l) =>
        l.textContent?.includes('Luminary Studios') || l.textContent?.includes('Horizon Media'),
    )
    expect(portfolioLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('renders section with correct id', () => {
    render(<Portfolio />)
    const section = screen.getByText('Selected Work').closest('section')
    expect(section).not.toBeNull()
    expect(section!.getAttribute('id')).toBe('projects')
  })
})
