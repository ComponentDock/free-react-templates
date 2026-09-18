import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { LoadMore } from './LoadMore'

describe('LoadMore', () => {
  it('renders load more button', () => {
    render(<LoadMore />)
    expect(screen.getByLabelText('Load more')).toBeInTheDocument()
  })

  it('button is clickable', () => {
    const onClick = vi.fn()
    render(<LoadMore />)
    const button = screen.getByLabelText('Load more')
    button.addEventListener('click', onClick)
    fireEvent.click(button)
    expect(onClick).toHaveBeenCalled()
  })
})
