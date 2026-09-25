import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders heading', () => {
    render(<Blog />)
    expect(screen.getByText('Our Blog')).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const posts = screen.getAllByText('Why Lead Generation is Key for Business Growth')
    expect(posts).toHaveLength(3)
  })

  it('renders dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('January 29, 2019')
    expect(dates).toHaveLength(3)
  })

  it('renders News & Update subheading', () => {
    render(<Blog />)
    expect(screen.getByText('News & Update')).toBeInTheDocument()
  })
})
