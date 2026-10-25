import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieStrip } from './CookieStrip'

describe('CookieStrip', () => {
  it('dismisses with Decline', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    expect(screen.getByRole('dialog', { name: 'Cookie notice' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Decline' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('dismisses with Accept All', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
