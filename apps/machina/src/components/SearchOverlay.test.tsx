import { describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { SearchOverlay } from './SearchOverlay'
import { SEARCH_PLACEHOLDER } from '../data'

describe('SearchOverlay', () => {
  it('renders nothing when closed', () => {
    const { container } = render(<SearchOverlay open={false} onClose={vi.fn()} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('focuses the input and shows the placeholder', () => {
    render(<SearchOverlay open onClose={vi.fn()} />)
    expect(screen.getByRole('searchbox')).toHaveFocus()
    expect(screen.getByPlaceholderText(SEARCH_PLACEHOLDER)).toBeInTheDocument()
  })

  it('closes on Escape', () => {
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('ignores other keys', () => {
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    fireEvent.keyDown(window, { key: 'a' })
    expect(onClose).not.toHaveBeenCalled()
  })

  it('closes via the close button', () => {
    const onClose = vi.fn()
    render(<SearchOverlay open onClose={onClose} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close search' }))
    expect(onClose).toHaveBeenCalledTimes(1)
  })

  it('stays open when the search form is submitted', () => {
    render(<SearchOverlay open onClose={vi.fn()} />)
    fireEvent.submit(screen.getByRole('search'))
    expect(screen.getByRole('searchbox')).toBeInTheDocument()
  })
})
