import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { CookieConsent } from './CookieConsent'

const COOKIE_KEY = 'seacliff-cookie-consent'

beforeEach(() => {
  window.localStorage.clear()
})

describe('CookieConsent', () => {
  it('shows the banner with Decline and Accept All by default', () => {
    render(<CookieConsent />)

    expect(screen.getByRole('dialog', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('hides the banner and persists the choice on Accept All', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(window.localStorage.getItem(COOKIE_KEY)).toBe('accepted')
  })

  it('hides the banner and persists the choice on Decline', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)

    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(window.localStorage.getItem(COOKIE_KEY)).toBe('declined')
  })

  it('does not show the banner once a choice was persisted', () => {
    window.localStorage.setItem(COOKIE_KEY, 'accepted')
    render(<CookieConsent />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
