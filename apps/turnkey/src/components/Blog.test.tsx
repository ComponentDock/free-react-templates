import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/latest blog posts/i)).toBeInTheDocument()
  })

  it('renders blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('Portable Fashion for Women')).toBeInTheDocument()
    expect(screen.getAllByText('Summer Ware Are Coming')).toHaveLength(2)
  })

  it('renders blog metadata', () => {
    render(<Blog />)
    expect(screen.getAllByText('13th Dec')).toHaveLength(3)
    expect(screen.getAllByText('15')).toHaveLength(3)
    expect(screen.getAllByText('2')).toHaveLength(3)
  })
})
