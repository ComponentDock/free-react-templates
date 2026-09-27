import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer sections', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Instagram Feed')).toBeInTheDocument()
    expect(screen.getByText('Follow Us')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByLabelText(/email for newsletter/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders Component Dock link in footer bottom', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Dribbble')).toBeInTheDocument()
  })

  it('handles newsletter form submission', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText(/email for newsletter/i)
    await user.type(input, 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(input).toHaveValue('test@example.com')
  })
})
