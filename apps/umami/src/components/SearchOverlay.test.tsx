import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'
import { closeSearchLabel, searchLabel, searchPlaceholder } from '../data'

describe('SearchOverlay', () => {
  it('renders nothing when closed', () => {
    render(<SearchOverlay open={false} onClose={() => {}} />)
    expect(screen.queryByPlaceholderText(searchPlaceholder)).not.toBeInTheDocument()
  })

  it('renders the input and close control when open', () => {
    render(<SearchOverlay open onClose={() => {}} />)
    expect(screen.getByLabelText(searchLabel)).toHaveAttribute('placeholder', searchPlaceholder)
    expect(screen.getByRole('button', { name: closeSearchLabel })).toBeInTheDocument()
  })

  it('focuses the input when opened and closes on Escape', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { rerender } = render(<SearchOverlay open={false} onClose={onClose} />)

    rerender(<SearchOverlay open onClose={onClose} />)
    expect(screen.getByRole('searchbox')).toHaveFocus()

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose from the close button', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: closeSearchLabel }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('keeps the overlay open when the form is submitted', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay open onClose={() => {}} />)

    const input = screen.getByRole('searchbox')
    await user.type(input, 'risotto{Enter}')
    expect(input).toHaveValue('risotto')
    expect(screen.getByPlaceholderText(searchPlaceholder)).toBeInTheDocument()
  })
})
