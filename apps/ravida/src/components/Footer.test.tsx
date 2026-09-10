import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders brand name and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Ravida')).toBeInTheDocument()
    expect(screen.getByText('+880 253 356 263')).toBeInTheDocument()
    expect(screen.getByText('ravida@contact.com')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Menu')).toBeInTheDocument()
    expect(screen.getByText('Reservation')).toBeInTheDocument()
  })

  it('renders newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const email = screen.getByRole('textbox', { name: /email address/i })
    expect(email).toBeInTheDocument()
    const submit = screen.getByRole('button', { name: /subscribe/i })
    expect(submit).toBeInTheDocument()
    await user.type(email, 'test@example.com')
    await user.click(submit)
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders copyright line', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })
})
