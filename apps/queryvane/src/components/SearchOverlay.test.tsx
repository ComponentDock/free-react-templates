import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('renders nothing when closed', () => {
    render(<SearchOverlay isOpen={false} onClose={() => {}} />)
    expect(screen.queryByPlaceholderText('Search...')).not.toBeInTheDocument()
  })

  it('renders the search input and button when open', () => {
    render(<SearchOverlay isOpen={true} onClose={() => {}} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Search' })).toBeInTheDocument()
  })

  it('renders the close button when open', () => {
    render(<SearchOverlay isOpen={true} onClose={() => {}} />)
    expect(screen.getByRole('button', { name: 'Close search' })).toBeInTheDocument()
  })

  it('calls onClose when the close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledOnce()
  })

  it('allows typing in the search input', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={() => {}} />)

    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'hello')
    expect(input).toHaveValue('hello')
  })

  it('submits the form and clears the input', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={() => {}} />)

    const input = screen.getByPlaceholderText('Search...')
    await user.type(input, 'test query')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(input).toHaveValue('')
  })

  it('does not clear input on empty submit', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={() => {}} />)

    const input = screen.getByPlaceholderText('Search...')
    await user.click(screen.getByRole('button', { name: 'Search' }))
    expect(input).toHaveValue('')
  })
})
