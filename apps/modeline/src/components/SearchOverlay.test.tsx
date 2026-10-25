import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('focuses a transparent underlined field over black', () => {
    render(<SearchOverlay onClose={vi.fn()} />)

    const field = screen.getByRole('searchbox')
    expect(field).toHaveFocus()
    expect(field).toHaveAttribute('placeholder', 'Search')
    expect(field).toHaveClass('bg-transparent', 'text-[20px]')
    expect(screen.getByRole('dialog', { name: 'Search Modeline' })).toHaveClass(
      'fixed',
      'inset-0',
      'bg-black',
    )
  })

  it('traps Tab between the field and the close disc', async () => {
    const user = userEvent.setup()
    render(<SearchOverlay onClose={vi.fn()} />)

    await user.keyboard('{Tab}')
    expect(screen.getByRole('button', { name: 'Close search' })).toHaveFocus()

    await user.keyboard('{Tab}')
    expect(screen.getByRole('searchbox')).toHaveFocus()
  })

  it('closes on the disc, on Escape and on a backdrop click', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    const { rerender } = render(<SearchOverlay onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(1)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(2)

    await user.click(screen.getByRole('dialog'))
    expect(onClose).toHaveBeenCalledTimes(3)

    rerender(<SearchOverlay onClose={onClose} />)
  })

  it('keeps the panel open when the field itself is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay onClose={onClose} />)

    await user.type(screen.getByRole('searchbox'), 'linen')

    expect(screen.getByRole('searchbox')).toHaveValue('linen')
    expect(onClose).not.toHaveBeenCalled()
  })
})
