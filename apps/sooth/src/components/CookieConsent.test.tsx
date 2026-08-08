import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, beforeEach } from 'vitest'
import { CookieConsent } from './CookieConsent'

describe('CookieConsent', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('shows the dialog when no choice has been stored', () => {
    render(<CookieConsent />)
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('persists the choice and hides after Accept All', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(window.localStorage.getItem('sooth-cookie-consent')).toBe('accepted')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('persists the choice and hides after Decline', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(window.localStorage.getItem('sooth-cookie-consent')).toBe('declined')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('does not render when a choice was already stored', () => {
    window.localStorage.setItem('sooth-cookie-consent', 'accepted')
    render(<CookieConsent />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
