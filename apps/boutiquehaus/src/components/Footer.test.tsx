import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders footer columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: /About Us/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Newsletter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Instagram Feed/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Follow Us/i })).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('validates email on newsletter submit', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const submit = screen.getByRole('button', { name: /→/i })
    await user.click(submit)
    expect(screen.getByRole('alert')).toBeInTheDocument()
  })

  it('subscribes with valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Enter Email'), 'test@example.com')
    const submit = screen.getByRole('button', { name: /→/i })
    await user.click(submit)
    expect(screen.getByText(/Thanks for subscribing/i)).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /Facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Dribbble/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Behance/i })).toBeInTheDocument()
  })
})
