import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it } from 'vitest'
import { CookieBanner } from './CookieBanner'

describe('CookieBanner', () => {
  beforeEach(() => {
    window.localStorage.clear()
  })

  it('shows the consent dialog when no choice has been made', () => {
    render(<CookieBanner />)
    expect(screen.getByRole('region', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('hides the dialog and persists the choice when the user declines', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)
    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('aegis-cookie-consent')).toBe('declined')
  })

  it('hides the dialog and persists the choice when the user accepts', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('aegis-cookie-consent')).toBe('accepted')
  })

  it('stays hidden when a choice was already made', () => {
    window.localStorage.setItem('aegis-cookie-consent', 'accepted')
    render(<CookieBanner />)
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })
})
