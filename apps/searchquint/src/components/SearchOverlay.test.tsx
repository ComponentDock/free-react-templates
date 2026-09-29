import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi } from 'vitest'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('renders search input with placeholder', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders Search submit button', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /^Search$/ })).toBeInTheDocument()
  })

  it('renders close button', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByRole('button', { name: /close search/i })).toBeInTheDocument()
  })

  it('calls onClose when close button clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: /close search/i }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('renders form with search input and submit button', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const form = screen.getByRole('form', { name: /search/i })
    expect(form).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /^Search$/ })).toBeInTheDocument()
  })

  it('prevents default form submission', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const submitBtn = screen.getByRole('button', { name: /^Search$/ })
    await user.click(submitBtn)
  })
})
