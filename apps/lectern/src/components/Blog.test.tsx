import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText(/latest news/i)).toBeInTheDocument()
  })

  it('renders all four blog posts', () => {
    render(<Blog />)
    expect(screen.getByText(/parents who try to be their children/i)).toBeInTheDocument()
    expect(screen.getByText(/graduations could be delayed/i)).toBeInTheDocument()
    expect(screen.getByText(/private schools adopt a ucas/i)).toBeInTheDocument()
    expect(screen.getByText(/cambridge digs in at the top/i)).toBeInTheDocument()
  })

  it('displays dates and authors', () => {
    render(<Blog />)
    expect(screen.getAllByText('Owen Wilson')).toHaveLength(4)
    expect(screen.getAllByText(/24 Mar 2018/)).toHaveLength(2)
  })

  it('has correct aria-label', () => {
    render(<Blog />)
    expect(screen.getByRole('region', { name: 'Blog' })).toBeInTheDocument()
  })
})
