import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('renders the newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeDefined()
    expect(screen.getByPlaceholderText('Enter Email')).toBeDefined()
  })

  it('shows error for invalid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByRole('alert')).toBeDefined()
  })

  it('shows success message for valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    await user.type(screen.getByPlaceholderText('Enter Email'), 'test@example.com')
    await user.click(screen.getByRole('button', { name: /subscribe/i }))
    expect(screen.getByText(/thanks for subscribing/i)).toBeDefined()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('X')).toBeDefined()
    expect(screen.getByLabelText('Dribbble')).toBeDefined()
    expect(screen.getByLabelText('Instagram')).toBeDefined()
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Top Products')).toBeDefined()
    expect(screen.getByText('Event Management')).toBeDefined()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeDefined()
  })
})
