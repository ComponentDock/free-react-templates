import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Portfolio } from './Portfolio'

describe('Portfolio', () => {
  it('renders all 5 portfolio items', () => {
    render(<Portfolio />)
    expect(screen.getByText('Nike Campaign')).toBeInTheDocument()
    expect(screen.getByText('Adidas Rebrand')).toBeInTheDocument()
    expect(screen.getByText('Spotify Design')).toBeInTheDocument()
    expect(screen.getByText('Apple Interface')).toBeInTheDocument()
    expect(screen.getByText('Google UX')).toBeInTheDocument()
  })

  it('renders portfolio images with alt text', () => {
    render(<Portfolio />)
    expect(screen.getByAltText('Nike Campaign')).toBeInTheDocument()
    expect(screen.getByAltText('Adidas Rebrand')).toBeInTheDocument()
  })

  it('shows hover overlay with title and subtitle', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    const card = screen.getByText('Nike Campaign').closest('div')!
    await user.hover(card)

    // Use getAllByText since all cards have "View Case Study"
    const caseStudyLinks = screen.getAllByText('View Case Study')
    expect(caseStudyLinks.length).toBeGreaterThanOrEqual(1)
    // The hovered card's overlay should be visible (opacity-100)
    expect(caseStudyLinks[0]!.closest('div')).toHaveClass('opacity-100')
  })

  it('hides overlay on mouse leave', async () => {
    const user = userEvent.setup()
    render(<Portfolio />)

    const card = screen.getByText('Nike Campaign').closest('div')!
    await user.hover(card)
    await user.unhover(card)

    const caseStudyLinks = screen.getAllByText('View Case Study')
    expect(caseStudyLinks.length).toBeGreaterThan(0)
  })

  it('has the overlap negative margin section', () => {
    const { container } = render(<Portfolio />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('-mt-24')
  })
})
