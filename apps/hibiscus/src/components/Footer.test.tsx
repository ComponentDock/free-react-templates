import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('HIBISCUS')).toBeInTheDocument()
  })

  it('renders phone number', () => {
    render(<Footer />)
    expect(screen.getByText('(123) 456-78-91096')).toBeInTheDocument()
  })

  it('renders email', () => {
    render(<Footer />)
    expect(screen.getByText('info@hibiscushotel.com')).toBeInTheDocument()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Booking' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Review' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
  })

  it('renders Services section', () => {
    render(<Footer />)
    expect(screen.getByText('Services')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Our Room' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Restaurants' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Payments' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Events' })).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitButton)
    // Form should not navigate (onSubmit prevents default)
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(`${year} Hibiscus Hotel`))).toBeInTheDocument()
  })
})
