import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer link sections', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeInTheDocument()
    expect(screen.getByText('Quick Links')).toBeInTheDocument()
    expect(screen.getByText('Features')).toBeInTheDocument()
    expect(screen.getByText('Resources')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText(/your email address/i)).toBeInTheDocument()
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText(/your email address/i)
    await user.type(input, 'test@example.com')
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitButton)
    expect(screen.getByRole('status')).toHaveTextContent(/thanks for subscribing/i)
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
    expect(screen.getByLabelText('Behance')).toBeInTheDocument()
  })

  it('does not subscribe with empty email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submitButton = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitButton)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    expect(screen.getByText(/Feast\. All rights reserved/)).toBeInTheDocument()
  })
})
