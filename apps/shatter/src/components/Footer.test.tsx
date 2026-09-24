import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo and brand name', () => {
    render(<Footer />)
    expect(screen.getByText('SHATTER')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Footer />)
    expect(screen.getByText(/Your trusted source for breaking news/)).toBeInTheDocument()
  })

  it('renders quick links section 1', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Sitemaps')).toBeInTheDocument()
    expect(screen.getByText('Categories')).toBeInTheDocument()
    expect(screen.getByText('Archives')).toBeInTheDocument()
  })

  it('renders quick links section 2', () => {
    render(<Footer />)
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Use')).toBeInTheDocument()
    expect(screen.getByText('Help Center')).toBeInTheDocument()
  })

  it('renders most viewed news section', () => {
    render(<Footer />)
    expect(screen.getByText('Most Viewed News')).toBeInTheDocument()
    expect(screen.getByText('Scientists Discover New Species in Deep Ocean')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('has role contentinfo', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
