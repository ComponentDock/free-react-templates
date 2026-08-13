import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the About Us column, Features links, socials, and Component Dock credit', () => {
    render(<Footer />)

    for (const heading of ['About Us', 'Features', 'Subscribe to Newsletter']) {
      expect(screen.getByRole('heading', { level: 3, name: heading })).toBeInTheDocument()
    }

    for (const label of [
      'About Us',
      'Press Releases',
      'Testimonials',
      'Terms of Service',
      'Privacy',
      'Contact Us',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    for (const label of ['Twitter', 'Facebook', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('shows a status message after subscribing to the newsletter', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    expect(screen.queryByRole('status')).not.toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), 'ada@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(/Thanks for subscribing/i)
  })
})
