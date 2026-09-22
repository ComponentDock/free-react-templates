import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('displays the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Regalia')).toBeInTheDocument()
  })

  it('displays quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Accommodation')).toBeInTheDocument()
    expect(screen.getByText('Dining & Bar')).toBeInTheDocument()
  })

  it('displays recent posts', () => {
    render(<Footer />)
    expect(screen.getByText('Top 10 Hidden Gems in the City')).toBeInTheDocument()
  })

  it('displays contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Luxury Avenue, Resort City')).toBeInTheDocument()
    expect(screen.getByText('+1 234 567 890')).toBeInTheDocument()
    expect(screen.getByText('info@regalia.com')).toBeInTheDocument()
  })

  it('has Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('displays copyright year', () => {
    render(<Footer />)
    expect(screen.getByText(new RegExp(String(new Date().getFullYear())))).toBeInTheDocument()
  })

  it('has social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
  })
})
