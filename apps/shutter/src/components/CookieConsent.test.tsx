import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieConsent } from './CookieConsent'

describe('CookieConsent', () => {
  it('renders the cookie banner with Decline and Accept All buttons', () => {
    render(<CookieConsent />)
    expect(screen.getByRole('region', { name: 'Cookie consent' })).toBeInTheDocument()
    expect(screen.getByText(/we use cookies to enhance your experience/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('dismisses the banner when the user declines', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })

  it('dismisses the banner when the user accepts', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)
    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).not.toBeInTheDocument()
  })
})
