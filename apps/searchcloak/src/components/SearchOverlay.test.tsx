import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchOverlay } from './SearchOverlay'

describe('SearchOverlay', () => {
  it('is hidden by default', () => {
    render(<SearchOverlay isOpen={false} onClose={vi.fn()} />)
    const input = screen.getByRole('textbox', { name: 'Search', hidden: true })
    expect(input.closest('[aria-hidden="true"]')).toBeInTheDocument()
  })

  it('is visible when isOpen is true', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const overlay = screen.getByRole('textbox', { name: 'Search' })
    expect(overlay).toBeVisible()
  })

  it('shows placeholder text', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    expect(screen.getByPlaceholderText('Type keyword and hit enter...')).toBeInTheDocument()
  })

  it('calls onClose when close button is clicked', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)

    await user.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose when Escape key is pressed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('does not call onClose on Escape when closed', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={false} onClose={onClose} />)

    await user.keyboard('{Escape}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('does not call onClose on non-Escape key', async () => {
    const user = userEvent.setup()
    const onClose = vi.fn()
    render(<SearchOverlay isOpen={true} onClose={onClose} />)

    await user.keyboard('{Enter}')
    expect(onClose).not.toHaveBeenCalled()
  })

  it('input has no border and transparent background', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const input = screen.getByRole('textbox', { name: 'Search' })
    expect(input.className).toContain('border-none')
    expect(input.className).toContain('bg-transparent')
  })

  it('input is 50px tall', () => {
    render(<SearchOverlay isOpen={true} onClose={vi.fn()} />)
    const input = screen.getByRole('textbox', { name: 'Search' })
    expect(input.className).toContain('h-[50px]')
  })
})
