import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the about, contact, and newsletter sections', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()
  })

  it('renders phone numbers', () => {
    render(<Footer />)
    expect(screen.getByText('012-6532-568-9746')).toBeInTheDocument()
    expect(screen.getByText('012-6532-569-9748')).toBeInTheDocument()
  })

  it('renders the Component Dock attribution link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('validates and accepts newsletter subscription', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Email address'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('Thanks for subscribing!')).toBeInTheDocument()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Email address'), 'bad-email')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })
})
