import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer columns with links', () => {
    render(<Footer />)

    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('New Products')).toBeInTheDocument()
    expect(screen.getByText('Support')).toBeInTheDocument()
  })

  it('renders footer link items', () => {
    render(<Footer />)

    expect(screen.getAllByText('Home').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Business Loan').length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)

    const componentDockLink = screen.getByRole('link', { name: /component dock/i })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons', () => {
    render(<Footer />)

    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('has a back-to-top button', () => {
    render(<Footer />)

    const backToTop = screen.getByRole('link', { name: /back to top/i })
    expect(backToTop).toHaveAttribute('href', '#home')
  })

  it('renders tagline text', () => {
    render(<Footer />)

    expect(screen.getByText(/Providing trusted financial solutions/i)).toBeInTheDocument()
  })

  it('has logo link to home', () => {
    render(<Footer />)

    const logoLink = screen.getByRole('link', { name: /loanforge/i })
    expect(logoLink).toHaveAttribute('href', '#home')
  })
})
