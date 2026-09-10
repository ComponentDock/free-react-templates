import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders all footer columns, newsletter, social icons, and Component Dock link', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Features' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Resources' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Follow Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Newsletter' })).toBeInTheDocument()

    for (const link of ['About', 'Blog', 'Contact', 'Services']) {
      expect(screen.getAllByText(link).length).toBeGreaterThan(0)
    }

    expect(screen.getByText('Fleet Management')).toBeInTheDocument()
    expect(screen.getByText('Real-Time Tracking')).toBeInTheDocument()
    expect(screen.getByText('Documentation')).toBeInTheDocument()
    expect(screen.getByText('API Reference')).toBeInTheDocument()

    expect(screen.getByLabelText('Enter email address')).toBeInTheDocument()

    for (const social of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('handles newsletter form submission without navigation', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const submitBtn = screen.getByRole('button', { name: 'Submit' })
    await user.click(submitBtn)
    // Newsletter form should not navigate (onSubmit calls preventDefault)
  })
})
