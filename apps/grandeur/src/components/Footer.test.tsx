import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    // Year is rendered via JS — check for the surrounding text
    expect(screen.getByText(/Made with/)).toBeDefined()
    expect(screen.getByText(/Component Dock/)).toBeDefined()
  })

  it('renders About section', () => {
    render(<Footer />)
    expect(screen.getByText('About Grandeur')).toBeDefined()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeDefined()
    expect(screen.getByText('Sitemaps')).toBeDefined()
    expect(screen.getByText('Privacy Policy')).toBeDefined()
  })

  it('renders Newsletter section with email input', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeDefined()
    expect(screen.getByLabelText('Newsletter email')).toBeDefined()
  })

  it('renders Instagram section', () => {
    render(<Footer />)
    expect(screen.getByText('Instagram')).toBeDefined()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeDefined()
    expect(screen.getByLabelText('Twitter')).toBeDefined()
    expect(screen.getByLabelText('Dribbble')).toBeDefined()
  })

  it('submits newsletter form without errors', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const emailInput = screen.getByLabelText('Newsletter email')
    await user.type(emailInput, 'test@example.com')
    const submitBtn = screen.getByLabelText('Subscribe')
    await user.click(submitBtn)
    // No error thrown
  })
})
