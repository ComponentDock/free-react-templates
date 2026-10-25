import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { CookieStrip } from '../components/CookieStrip'

describe('CookieStrip', () => {
  it('renders nothing while it is closed', () => {
    render(<CookieStrip open={false} onDismiss={() => {}} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('is a labelled dialog that both controls dismiss', async () => {
    const user = userEvent.setup()
    const onDismiss = vi.fn()
    render(<CookieStrip open onDismiss={onDismiss} />)

    expect(screen.getByRole('dialog', { name: 'Cookie notice' })).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: 'Decline' }))
    await user.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(onDismiss).toHaveBeenCalledTimes(2)
  })
})
