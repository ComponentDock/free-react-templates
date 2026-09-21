import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { describe, it, expect } from 'vitest'

describe('Footer', () => {
  it('renders footer columns', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the copyright line with Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/Skyline Restaurant/)).toBeInTheDocument()
    const cdLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(cdLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(/Enter Email Address/i)).toBeInTheDocument()
  })

  it('validates email on newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText(/Enter Email Address/i), 'bad')
    await user.click(screen.getByRole('button', { name: /→/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
  })

  it('shows success after valid newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByPlaceholderText(/Enter Email Address/i), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /→/i }))

    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })
})
