import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'
import {
  BRAND,
  FOOTER_ADDRESS,
  FOOTER_EMAIL,
  FOOTER_PHONE,
  FOOTER_PRACTICE_LINKS,
  FOOTER_USEFUL_LINKS,
  NEWSLETTER_TEXT,
} from '../data'

describe('Footer', () => {
  it('renders the brand, contact block, link columns and newsletter line', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: BRAND })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_ADDRESS)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_PHONE)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: FOOTER_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${FOOTER_EMAIL}`,
    )

    expect(screen.getByRole('navigation', { name: 'Practice areas' })).toBeInTheDocument()
    for (const item of FOOTER_PRACTICE_LINKS) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }
    expect(screen.getByRole('navigation', { name: 'Useful links' })).toBeInTheDocument()
    for (const item of FOOTER_USEFUL_LINKS) {
      expect(screen.getByRole('link', { name: item })).toBeInTheDocument()
    }

    expect(screen.getByText(NEWSLETTER_TEXT)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('links to Component Dock in the copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('rejects an invalid email in the subscribe form', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    // role="alert" accessible names come from author, not text content.
    const alerts = screen.getAllByRole('alert')
    expect(alerts.some((alert) => alert.textContent === 'Enter a valid email address')).toBe(true)
    expect(screen.queryByRole('status')).not.toBeInTheDocument()
  })

  it('clears the subscribe error as soon as the user keeps typing', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'nope')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))
    expect(screen.getByText('Enter a valid email address')).toBeInTheDocument()

    await user.type(screen.getByLabelText('Email address'), '@example.com')
    expect(screen.queryByText('Enter a valid email address')).not.toBeInTheDocument()
  })

  it('swaps the subscribe form for a success message on a valid email', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'jane@example.com')
    await user.click(screen.getByRole('button', { name: 'Sign Up' }))

    expect(screen.getByRole('status')).toHaveTextContent('Thanks for subscribing!')
    expect(screen.queryByRole('button', { name: 'Sign Up' })).not.toBeInTheDocument()
  })
})
