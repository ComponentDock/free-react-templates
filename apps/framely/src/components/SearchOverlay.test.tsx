import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('renders nothing when closed', () => {
    render(<SearchOverlay open={false} onClose={() => {}} />)
    expect(screen.queryByPlaceholderText('Search here.....')).not.toBeInTheDocument()
  })

  it('shows the input and a close control when open', () => {
    render(<SearchOverlay open onClose={() => {}} />)
    expect(screen.getByPlaceholderText('Search here.....')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /close search/i })).toBeInTheDocument()
  })

  it('accepts typed text', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay open onClose={() => {}} />)
    const input = screen.getByPlaceholderText('Search here.....')
    await user.type(input, 'wedding')
    expect(input).toHaveValue('wedding')
  })

  it('submits the form without navigation', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay open onClose={() => {}} />)
    const input = screen.getByPlaceholderText('Search here.....')
    await user.type(input, 'wedding{Enter}')
    expect(screen.getByRole('search')).toBeInTheDocument()
  })

  it('calls onClose from the close control', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose with the Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
