import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CaseStudies } from './CaseStudies'

describe('CaseStudies', () => {
  it('renders section heading', () => {
    render(<CaseStudies />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'We Take Every Case Studies Very Seriously',
    )
  })

  it('renders 4 case study links', () => {
    render(<CaseStudies />)
    const links = screen.getAllByText('Business Finance Consulting')
    expect(links).toHaveLength(4)
  })

  it('applies custom className', () => {
    const { container } = render(<CaseStudies className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
