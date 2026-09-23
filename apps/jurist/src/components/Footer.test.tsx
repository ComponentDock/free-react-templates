import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the About Jurist heading', () => {
    render(<Footer />)
    expect(screen.getByText('About Jurist')).toBeDefined()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    expect(screen.getByText('Home')).toBeDefined()
    expect(screen.getByText('Practice Area')).toBeDefined()
    expect(screen.getByText('About Us')).toBeDefined()
    expect(screen.getByText('Privacy Policy')).toBeDefined()
  })

  it('renders the Subscribe form', () => {
    render(<Footer />)
    expect(screen.getByPlaceholderText('Enter your email')).toBeDefined()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeDefined()
  })

  it('accepts email input and submits', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByPlaceholderText('Enter your email')
    await user.type(emailInput, 'test@example.com')
    expect(emailInput).toHaveValue('test@example.com')

    const submitBtn = screen.getByRole('button', { name: /subscribe/i })
    await user.click(submitBtn)
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders Follow Us section with social icons', () => {
    render(<Footer />)
    expect(screen.getByText('Follow Us')).toBeDefined()
  })
})
