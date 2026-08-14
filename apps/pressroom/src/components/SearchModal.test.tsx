import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchModal } from './SearchModal'

describe('SearchModal', () => {
  it('renders nothing when closed', () => {
    render(<SearchModal open={false} onClose={() => {}} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders the search form with placeholder when open', () => {
    render(<SearchModal open onClose={() => {}} />)
    expect(screen.getByRole('dialog', { name: 'Search' })).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Searching key.....')).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: 'Search query' })).toBeInTheDocument()
  })

  it('closes when the close button is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SearchModal open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when Escape is pressed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SearchModal open onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes when the backdrop is clicked', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SearchModal open onClose={onClose} />)
    const dialog = screen.getByRole('dialog', { name: 'Search' })
    await user.click(dialog)
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not close when clicking inside the panel', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SearchModal open onClose={onClose} />)
    await user.click(screen.getByRole('searchbox', { name: 'Search query' }))
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not navigate away when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<SearchModal open onClose={() => {}} />)
    const input = screen.getByRole('searchbox', { name: 'Search query' })
    await user.type(input, 'economy{Enter}')
    expect(input).toHaveValue('economy')
  })

  it('does not attach a keydown listener while closed', async () => {
    const onClose = vi.fn()
    const user = userEvent.setup()
    render(<SearchModal open={false} onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
  })
})
