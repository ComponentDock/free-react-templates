import { describe, expect, it, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  beforeEach(() => {
    render(<TopBar />)
  })

  it('renders the phone number', () => {
    expect(screen.getByText('+953 012 3654 896')).toBeInTheDocument()
  })

  it('renders the email address', () => {
    expect(screen.getByText('support@medlink.com')).toBeInTheDocument()
  })

  it('renders the BOOK APPOINTMENT button', () => {
    expect(screen.getByRole('link', { name: /book appointment/i })).toBeInTheDocument()
  })

  it('has a phone link with tel: href', () => {
    const phoneLink = screen.getByText('+953 012 3654 896').closest('a')
    expect(phoneLink).toHaveAttribute('href', expect.stringContaining('tel:'))
  })

  it('has an email link with mailto: href', () => {
    const emailLink = screen.getByText('support@medlink.com').closest('a')
    expect(emailLink).toHaveAttribute('href', 'mailto:support@medlink.com')
  })

  it('links BOOK APPOINTMENT to #appointment', () => {
    const cta = screen.getByRole('link', { name: /book appointment/i })
    expect(cta).toHaveAttribute('href', '#appointment')
  })
})
