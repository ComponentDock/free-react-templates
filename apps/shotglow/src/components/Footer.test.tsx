import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders service links and contact info', () => {
    render(<Footer />)
    expect(screen.getByText('Our Service')).toBeInTheDocument()
    expect(screen.getByText('Car Accident')).toBeInTheDocument()
    expect(screen.getByText('Contact Info')).toBeInTheDocument()
    expect(screen.getByText(/4361 Morningview Lane/)).toBeInTheDocument()
  })

  it('renders newsletter form and social links', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Your Email Address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Subscribe' })).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram', 'Skype']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })

  it('renders the Instagram section heading', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeInTheDocument()
  })

  it('submits the newsletter form without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your Email Address')
    const submitBtn = screen.getByRole('button', { name: 'Subscribe' })
    await user.type(input, 'test@example.com')
    await user.click(submitBtn)
    // Form should not cause navigation (preventDefault)
    expect(input).toHaveValue('test@example.com')
  })
})
