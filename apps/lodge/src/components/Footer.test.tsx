import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Lodge logo', () => {
    render(<Footer />)
    expect(screen.getAllByText('Lodge').length).toBeGreaterThanOrEqual(1)
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeDefined()
    expect(screen.getByText('About Us')).toBeDefined()
    expect(screen.getByText('Rooms')).toBeDefined()
  })

  it('renders newsletter section', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeDefined()
    expect(screen.getByPlaceholderText('Your email')).toBeDefined()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeDefined()
  })

  it('allows typing in the email input', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your email')
    await user.type(input, 'test@example.com')
    expect((input as HTMLInputElement).value).toBe('test@example.com')
  })

  it('submits the newsletter form', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByPlaceholderText('Your email')
    await user.type(input, 'test@example.com')
    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
    // Form should not throw
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toBeDefined()
    expect(link.getAttribute('href')).toBe('https://www.componentdock.com/')
  })

  it('renders copyright', () => {
    render(<Footer />)
    expect(screen.getByText(/All rights reserved/)).toBeDefined()
  })

  it('renders address and contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/1525 Boring Lane/)).toBeDefined()
  })

  it('renders phone and email links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /phone/i })).toBeDefined()
    expect(screen.getByRole('link', { name: /email/i })).toBeDefined()
  })
})
