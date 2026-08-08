import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { CookieConsent } from './CookieConsent'

describe('CookieConsent', () => {
  it('renders the consent dialog with both actions', () => {
    render(<CookieConsent />)

    const region = screen.getByRole('region', { name: 'Cookie consent' })
    expect(region).toHaveTextContent(/We use cookies to enhance your experience/)
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('dismisses the dialog when Decline is clicked', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)

    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).toBeNull()
  })

  it('dismisses the dialog when Accept All is clicked', async () => {
    const user = userEvent.setup()
    render(<CookieConsent />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByRole('region', { name: 'Cookie consent' })).toBeNull()
  })
})
