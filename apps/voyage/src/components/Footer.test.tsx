import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Voyage heading', () => {
    render(<Footer />)
    expect(screen.getByText(/About Voyage/)).toBeInTheDocument()
  })

  it('renders Connect section with social links', () => {
    render(<Footer />)
    expect(screen.getByText('Connect')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /x/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /youtube/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /tiktok/i })).toBeInTheDocument()
  })

  it('renders Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    // "About us" and "Services" appear in both Links and Company — use getAllByText
    const aboutLinks = screen.getAllByText('About us')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(2)
    const serviceLinks = screen.getAllByText('Services')
    expect(serviceLinks.length).toBeGreaterThanOrEqual(2)
    expect(screen.getAllByText('News').length).toBeGreaterThanOrEqual(2)
  })

  it('renders Company section', () => {
    render(<Footer />)
    expect(screen.getByText('Company')).toBeInTheDocument()
  })

  it('renders Contact details', () => {
    render(<Footer />)
    // "Contact" heading is unique; use getAllByText for the heading
    const contactHeadings = screen.getAllByText('Contact')
    expect(contactHeadings.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText(/43 Raymouth Rd/)).toBeInTheDocument()
    expect(screen.getByText('+1(123)-456-7890')).toBeInTheDocument()
    expect(screen.getByText('info@mydomain.com')).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/ })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}.*Voyage Travel`))).toBeInTheDocument()
  })

  it('renders email as mailto link', () => {
    render(<Footer />)
    const emailLink = screen.getByRole('link', { name: /info@mydomain\.com/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@mydomain.com')
  })

  it('renders phone numbers as tel links', () => {
    render(<Footer />)
    const phoneLinks = screen.getAllByRole('link', { name: /\+1\(123\)-456-78/ })
    expect(phoneLinks).toHaveLength(2)
    expect(phoneLinks[0]).toHaveAttribute('href', 'tel:+11234567890')
    expect(phoneLinks[1]).toHaveAttribute('href', 'tel:+11234567891')
  })
})
