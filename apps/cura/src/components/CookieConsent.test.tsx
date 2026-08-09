import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { CookieConsent } from './CookieConsent'

describe('CookieConsent', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('shows the banner when no consent choice is stored', () => {
    render(<CookieConsent />)
    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
  })

  it('dismisses and persists the choice when the user accepts', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('cura-cookie-consent')).toBe('accepted')
  })

  it('dismisses and persists the choice when the user declines', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('cura-cookie-consent')).toBe('declined')
  })

  it('does not render when a consent choice was already stored', () => {
    window.localStorage.setItem('cura-cookie-consent', 'accepted')
    render(<CookieConsent />)
    expect(screen.queryByRole('dialog', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })
})
