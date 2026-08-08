import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieBanner } from './CookieBanner'

describe('CookieBanner', () => {
  it('shows the banner with Accept All and Decline buttons', () => {
    render(<CookieBanner />)

    expect(screen.getByText(/We use cookies/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
  })

  it('hides the banner when Accept All is clicked', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByText(/We use cookies/i)).not.toBeInTheDocument()
  })

  it('hides the banner when Decline is clicked', async () => {
    const user = userEvent.setup()
    render(<CookieBanner />)

    await user.click(screen.getByRole('button', { name: 'Decline' }))
    expect(screen.queryByText(/We use cookies/i)).not.toBeInTheDocument()
  })

  it('shows the banner again on a fresh mount after being dismissed', async () => {
    const user = userEvent.setup()
    const { unmount } = render(<CookieBanner />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))
    expect(screen.queryByText(/We use cookies/i)).not.toBeInTheDocument()

    unmount()
    render(<CookieBanner />)
    expect(screen.getByText(/We use cookies/i)).toBeInTheDocument()
  })
})
