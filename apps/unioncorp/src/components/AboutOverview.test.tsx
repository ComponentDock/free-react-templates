import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AboutOverview } from './AboutOverview'

describe('AboutOverview', () => {
  it('renders section heading', () => {
    render(<AboutOverview />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
      'More than 40M+ Trusted Our Financial',
    )
  })

  it('renders all four feature cards', () => {
    render(<AboutOverview />)
    expect(screen.getByText('Professional Consultants')).toBeInTheDocument()
    expect(screen.getByText('Comprehensive Services')).toBeInTheDocument()
    expect(screen.getByText('A Culture that Delivers')).toBeInTheDocument()
    expect(screen.getByText('Industry Experience')).toBeInTheDocument()
  })

  it('renders Learn More button', () => {
    render(<AboutOverview />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<AboutOverview className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
