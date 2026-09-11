import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand logo', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /ember/i })).toBeInTheDocument()
  })

  it('renders the navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /important links/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument()
  })

  it('renders the contact information', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
    expect(screen.getByText(/\+2 36 265 8060/i)).toBeInTheDocument()
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByLabelText(/your email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('shows validation error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('submits successfully with a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByLabelText(/your email address/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thanks for subscribing/i)).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
