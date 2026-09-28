import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders restaurant name and description', () => {
    render(<Footer />)
    expect(screen.getByText('Seared Restaurant')).toBeInTheDocument()
    expect(screen.getByText(/Experience the art of fine dining/)).toBeInTheDocument()
  })

  it('renders service hours', () => {
    render(<Footer />)
    expect(screen.getByText('Service Hours')).toBeInTheDocument()
    expect(screen.getByText(/11:30 AM — 3:00 PM/)).toBeInTheDocument()
    expect(screen.getByText(/5:00 PM — 11:00 PM/)).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Help & Support')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with year', () => {
    render(<Footer />)
    expect(screen.getByText(/Seared Restaurant\. Made with/)).toBeInTheDocument()
  })

  it('newsletter form prevents default submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email for newsletter')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.type(input, 'test@example.com')
    await user.click(submitBtn)
    expect(input).toHaveValue('test@example.com')
  })
})
