import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Wavecrest')).toBeInTheDocument()
    expect(screen.getByText('123 Ocean Drive, Malibu, CA 90265')).toBeInTheDocument()
    expect(screen.getByText('+1 (310) 555-0199')).toBeInTheDocument()
    expect(screen.getByText('info@wavecrest.com')).toBeInTheDocument()
  })

  it('renders the Book Now button', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /book now/i })).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('displays copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright.*${year}`))).toBeInTheDocument()
  })
})
