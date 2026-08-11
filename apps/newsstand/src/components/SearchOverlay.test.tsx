import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'
import { searchCloseLabel, searchPlaceholder, searchSubmitLabel } from '../data'

describe('SearchOverlay', () => {
  it('renders the search input with placeholder, submit and close controls', () => {
    render(<SearchOverlay onClose={() => {}} />)
    const input = screen.getByRole('searchbox', { name: searchPlaceholder })
    expect(input).toHaveAttribute('placeholder', searchPlaceholder)
    expect(input).toHaveClass('border-line', 'focus:border-brand')
    expect(screen.getByRole('button', { name: searchSubmitLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchCloseLabel })).toBeInTheDocument()
  })

  it('calls onClose when Escape is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay onClose={onClose} />)
    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('clears the query and closes on submit', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay onClose={onClose} />)
    const input = screen.getByRole('searchbox')
    await user.type(input, 'design')
    expect(input).toHaveValue('design')
    await user.click(screen.getByRole('button', { name: searchSubmitLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes with the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay onClose={onClose} />)
    await user.click(screen.getByRole('button', { name: searchCloseLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
