import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BigPosts } from './BigPosts'

describe('BigPosts', () => {
  it('renders two big post rows with tag, title, meta, excerpt and a Read More button', () => {
    render(<BigPosts />)

    expect(screen.getByText('Friend eggs with ham')).toBeInTheDocument()
    expect(screen.getByText('Steak with boiled vegetables')).toBeInTheDocument()
    expect(screen.getAllByText('Read More')).toHaveLength(2)
    expect(screen.getAllByRole('img')).toHaveLength(2)
    expect(screen.getAllByText(/Lorem ipsum/)).toHaveLength(2)
  })

  it('mirrors the second row so the image sits on the opposite side', () => {
    const { container } = render(<BigPosts />)

    const rows = container.querySelectorAll('[data-testid="big-post-row"]')
    expect(rows).toHaveLength(2)
    expect(rows[0]).not.toHaveClass('md:flex-row-reverse')
    expect(rows[1]).toHaveClass('md:flex-row-reverse')
  })
})
