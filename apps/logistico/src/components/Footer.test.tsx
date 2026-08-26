import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(/Logistico/)
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Work/i })).toBeInTheDocument()
  })

  it('renders Solution section', () => {
    render(<Footer />)
    expect(screen.getByText('Solution')).toBeInTheDocument()
    expect(screen.getByText('Air Freight')).toBeInTheDocument()
    expect(screen.getByText('Ocean Freight')).toBeInTheDocument()
  })

  it('renders Support section', () => {
    render(<Footer />)
    expect(screen.getByText('Support')).toBeInTheDocument()
    expect(screen.getByText('FAQ')).toBeInTheDocument()
    expect(screen.getByText('Submit Ticket')).toBeInTheDocument()
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/Email for newsletter/i)).toBeInTheDocument()
  })

  it('renders Component Dock credit link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('prevents newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /Subscribe/i }))
  })
})
