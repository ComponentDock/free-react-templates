import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { SearchOverlay } from './SearchOverlay'
import { SEARCH_CLOSE_LABEL, SEARCH_FORM_LABEL, SEARCH_TITLE } from '../lib/site'

describe('SearchOverlay', () => {
  it('mounts nothing until the magnifier asks for it', () => {
    render(<SearchOverlay open={false} onClose={vi.fn()} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(screen.queryByRole('search')).not.toBeInTheDocument()
  })

  it('opens with the field focused and hands the page back on Escape', () => {
    const onClose = vi.fn()
    const { rerender } = render(<SearchOverlay open onClose={onClose} />)

    expect(screen.getByRole('dialog', { name: SEARCH_TITLE })).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: SEARCH_TITLE })).toBe(document.activeElement)

    fireEvent.keyDown(document, { key: 'a' })

    expect(onClose).not.toHaveBeenCalled()

    fireEvent.keyDown(document, { key: 'Escape' })

    expect(onClose).toHaveBeenCalledTimes(1)

    rerender(<SearchOverlay open={false} onClose={onClose} />)

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('closes from its own control and posts nothing', () => {
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)

    expect(fireEvent.submit(screen.getByRole('search', { name: SEARCH_FORM_LABEL }))).toBe(false)

    fireEvent.click(screen.getByRole('button', { name: SEARCH_CLOSE_LABEL }))

    expect(onClose).toHaveBeenCalledTimes(1)
  })
})
