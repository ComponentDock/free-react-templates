import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import { brandName, componentDockUrl, footerEmail, footerPhone } from '../data'

describe('Footer', () => {
  it('shows the address column with phone and email (phone as plain text)', () => {
    render(<Footer />)

    expect(screen.getByText('Phone')).toBeInTheDocument()
    expect(screen.getByText(footerPhone)).toBeInTheDocument()
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footerEmail })).toHaveAttribute(
      'href',
      `mailto:${footerEmail}`,
    )
    // No tel: links anywhere in the footer.
    expect(document.body.querySelector('a[href^="tel:"]')).toBeNull()
  })

  it('shows the brand and four social icon links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: brandName })).toBeInTheDocument()
    for (const social of ['Facebook', 'Twitter', 'Instagram', 'Dribbble']) {
      expect(screen.getByRole('link', { name: social })).toHaveAttribute(
        'href',
        expect.stringContaining('http'),
      )
    }
  })

  it('subscribes to the newsletter and shows the success state', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    const input = screen.getByLabelText('Email address')
    await user.type(input, 'dj@example.com')
    await user.click(screen.getByRole('button', { name: 'Send email' }))

    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
    expect(screen.getByRole('status')).toHaveTextContent(/thanks for subscribing/i)
  })

  it('renders the copyright bar linking Component Dock (no ColorLib credit)', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', componentDockUrl)
    expect(credit).toHaveAttribute('target', '_blank')
  })
})
