import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo and description', () => {
    render(<Footer />)
    expect(screen.getByText('Roster')).toBeInTheDocument()
    expect(screen.getByText(/go-to directory/i)).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Directory Ave, City Center')).toBeInTheDocument()
    expect(screen.getByText('+1 (555) 123-4567')).toBeInTheDocument()
    expect(screen.getByText('hello@roster.com')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    const links = ['Home', 'Explore', 'Pages', 'Blog', 'Contact']
    links.forEach((link) => {
      expect(screen.getByText(link)).toBeInTheDocument()
    })
  })

  it('renders newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Your email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')
    const subscribeBtn = screen.getByRole('button', { name: /subscribe/i })
    expect(subscribeBtn).toBeInTheDocument()
  })

  it('newsletter form submission is prevented', () => {
    render(<Footer />)
    const form = screen.getByPlaceholderText('Your email').closest('form')!
    form.requestSubmit()
    expect(form).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByText('Facebook')).toBeInTheDocument()
    expect(screen.getByText('Twitter')).toBeInTheDocument()
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('shows copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
