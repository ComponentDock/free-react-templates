import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the footer landmark', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders four link columns', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: /top products/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /quick links/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /features/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: /resources/i })).toBeInTheDocument()
  })

  it('renders the newsletter section', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 4, name: /newsletter/i })).toBeInTheDocument()
    expect(screen.getByPlaceholderText(/your email address/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument()
  })

  it('renders social media icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /dribbble/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /linkedin/i })).toBeInTheDocument()
  })

  it('renders the Component Dock link', () => {
    render(<Footer />)

    const componentDockLink = screen.getByRole('link', { name: /component dock/i })
    expect(componentDockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(componentDockLink).toHaveAttribute('target', '_blank')
    expect(componentDockLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders footer links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /managed website/i })).toBeInTheDocument()
    // Jobs appears in both Quick Links and Features columns
    const jobsLinks = screen.getAllByRole('link', { name: /jobs/i })
    expect(jobsLinks.length).toBeGreaterThanOrEqual(2)
    expect(screen.getByRole('link', { name: /guides/i })).toBeInTheDocument()
  })

  it('submits newsletter form without navigation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const emailInput = screen.getByPlaceholderText(/your email address/i)
    await user.type(emailInput, 'test@example.com')

    const subscribeButton = screen.getByRole('button', { name: /subscribe/i })
    await user.click(subscribeButton)

    // Form should not navigate (preventDefault)
    expect(emailInput).toHaveValue('test@example.com')
  })
})
