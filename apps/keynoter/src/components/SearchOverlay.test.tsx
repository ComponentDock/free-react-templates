import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('renders nothing while it is closed', () => {
    render(<SearchOverlay open={false} onClose={vi.fn()} />)
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('focuses the field when it opens', () => {
    render(<SearchOverlay open onClose={vi.fn()} />)
    expect(screen.getByLabelText('Search this page')).toHaveFocus()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Search')
  })

  it('answers an empty submit without asking for anything', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('status')).toHaveTextContent('Type a speaker, a session or a topic.')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('answers a real query and clears on close', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    const field = screen.getByLabelText('Search this page')
    await user.type(field, 'motion')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(screen.getByRole('status')).toHaveTextContent('No results for “motion”')

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    fireEvent.keyDown(document, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
