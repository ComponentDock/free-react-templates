import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('does not render when closed', () => {
    render(<SearchOverlay isOpen={false} onClose={vi.fn()} />)
    expect(screen.queryByPlaceholderText('Type your keyword...')).not.toBeInTheDocument()
  })

  it('renders when open', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
  })

  it('renders search input and close button', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type your keyword...')).toBeInTheDocument()
    expect(screen.getByLabelText('Close search')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)
    await user.click(screen.getByLabelText('Close search'))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('allows typing in search input', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const input = screen.getByPlaceholderText('Type your keyword...')
    await user.type(input, 'chair')
    expect(input).toHaveValue('chair')
  })

  it('submits search form without error', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const input = screen.getByPlaceholderText('Type your keyword...')
    await user.type(input, 'chair')
    await user.click(screen.getByLabelText('Search'))
    // Form submission should not throw (preventDefault called)
    expect(input).toHaveValue('chair')
  })
})
