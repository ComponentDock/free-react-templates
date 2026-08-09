import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it } from 'vitest'
import { CookieBanner } from './CookieBanner'

afterEach(() => {
  window.localStorage.clear()
})

describe('CookieBanner', () => {
  it('is visible when no consent choice is stored', () => {
    render(<CookieBanner />)
    expect(screen.getByRole('region', { name: 'Cookie consent' })).toBeInTheDocument()
  })

  it('hides and persists when Accept All is pressed', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('moda-cookie-consent')).toBe('accepted')
  })

  it('hides and persists when Decline is pressed', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)
    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
    expect(window.localStorage.getItem('moda-cookie-consent')).toBe('declined')
  })

  it('stays hidden when a consent choice is already stored', () => {
    window.localStorage.setItem('moda-cookie-consent', 'accepted')
    render(<CookieBanner />)
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })
})
