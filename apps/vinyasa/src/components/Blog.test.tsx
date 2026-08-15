import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog cards with meta rows', () => {
    const { container } = render(<Blog />)
    expect(screen.getByRole('heading', { name: 'Our Recent Blogs' })).toBeInTheDocument()
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(screen.getAllByText('13th Dec')).toHaveLength(1)
    expect(screen.getAllByText('15')).toHaveLength(1)
    expect(screen.getAllByText('02')).toHaveLength(1)
    expect(container.querySelectorAll('img')).toHaveLength(3)
  })
})
