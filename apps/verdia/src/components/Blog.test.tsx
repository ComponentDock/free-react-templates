import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Recent Blogs')
  })

  it('renders blog post cards', () => {
    render(<Blog />)
    expect(screen.getByText('Portable Fashion for Women')).toBeInTheDocument()
    expect(screen.getByText('Summer Wear Is Coming')).toBeInTheDocument()
    expect(screen.getByText('Health Tips for the Family')).toBeInTheDocument()
  })

  it('renders post metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText('Mark Wiens').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('13th Dec').length).toBeGreaterThanOrEqual(1)
  })
})
