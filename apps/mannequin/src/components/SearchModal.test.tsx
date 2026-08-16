import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchModal } from './SearchModal'

describe('SearchModal', () => {
  it('renders a labeled search input', () => {
    render(<SearchModal onClose={vi.fn()} />)
    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })

  it('closes on Escape, overlay click and the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchModal onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(3)
  })

  it('ignores non-Escape keys', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchModal onClose={onClose} />)

    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
