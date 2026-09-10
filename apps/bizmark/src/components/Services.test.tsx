import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Services } from './Services'

describe('Services', () => {
  it('renders section headline', () => {
    render(<Services />)
    expect(
      screen.getByRole('heading', { level: 2, name: /we provide best services/i }),
    ).toBeInTheDocument()
  })

  it('renders two service cards', () => {
    render(<Services />)
    expect(screen.getByText('Business Opportunity')).toBeInTheDocument()
    expect(screen.getByText('Commercial Approach')).toBeInTheDocument()
  })

  it('renders Load More button', () => {
    render(<Services />)
    expect(screen.getByRole('link', { name: /load more/i })).toBeInTheDocument()
  })

  it('renders Learn More links on each card', () => {
    render(<Services />)
    const learnMoreLinks = screen.getAllByText('Learn More')
    expect(learnMoreLinks.length).toBeGreaterThanOrEqual(2)
  })

  it('has gray background section', () => {
    const { container } = render(<Services />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-section-bg')
  })
})
