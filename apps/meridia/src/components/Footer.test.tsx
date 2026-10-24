import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Unioncorp.')
  })

  it('renders all service links', () => {
    render(<Footer />)
    const services = [
      'Financial Planning',
      'Investments Management',
      'Business Loan',
      'Taxes Consulting',
      'Insurance Consulting',
      'Retirement Planning',
      'Risk Management',
      'Technology Consulting',
    ]
    for (const s of services) {
      expect(screen.getByText(s)).toBeInTheDocument()
    }
  })

  it('renders recent posts', () => {
    render(<Footer />)
    expect(screen.getByText('Incorporation is a big milestone for business')).toBeInTheDocument()
    expect(
      screen.getByText('Smart investment strategies for growing businesses'),
    ).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('San Francisco, California, USA')).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@unioncorp.com')).toBeInTheDocument()
  })

  it('renders Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('X')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    const { container } = render(<Footer className="extra" />)
    expect(container.firstElementChild).toHaveClass('extra')
  })
})
