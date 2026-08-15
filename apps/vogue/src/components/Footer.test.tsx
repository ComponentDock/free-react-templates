import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerColumns, socialLinks } from '../data'

describe('Footer', () => {
  it('shows a success state when the newsletter form is submitted', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const input = screen.getByLabelText('Email address')
    expect(input).toHaveAttribute('placeholder', 'Your email address')
    await user.type(input, 'hello@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe to our newsletter' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
  })

  it('does not show the success state before submission', () => {
    render(<Footer />)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('renders the four link columns with their headings and links', () => {
    render(<Footer />)
    expect(footerColumns).toHaveLength(4)
    for (const column of footerColumns) {
      expect(screen.getByRole('heading', { level: 4, name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThan(0)
      }
    }
  })

  it('renders six social links with icon and uppercase label', () => {
    render(<Footer />)
    expect(socialLinks).toHaveLength(6)
    for (const name of socialLinks) {
      const link = screen.getByRole('link', { name })
      expect(link).toBeInTheDocument()
      expect(link.querySelector('svg')).not.toBeNull()
    }
  })

  it('renders the copyright bar with the Component Dock credit link', () => {
    render(<Footer />)
    expect(screen.getByText('© 2026 Vogue. All rights reserved.')).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/Made with/)).toBeInTheDocument()
  })
})
