import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { CookieStrip } from './CookieStrip'

describe('CookieStrip', () => {
  it('is a dialog with both choices available', () => {
    render(<CookieStrip />)

    const dialog = screen.getByRole('dialog', { name: 'Cookie notice' })
    expect(dialog).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Decline' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accept All' })).toBeInTheDocument()
  })

  it('removes itself from the document when declined', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    await user.click(screen.getByRole('button', { name: 'Decline' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('removes itself from the document when accepted', async () => {
    const user = userEvent.setup()
    render(<CookieStrip />)

    await user.click(screen.getByRole('button', { name: 'Accept All' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })
})
