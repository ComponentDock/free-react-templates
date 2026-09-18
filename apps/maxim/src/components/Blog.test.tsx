import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByText('Recent Posts')).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(screen.getByText('There live the Blind Texts')).toBeInTheDocument()
    expect(screen.getByText('A Small River Named Duden')).toBeInTheDocument()
    expect(screen.getByText('The Far World of Grammar')).toBeInTheDocument()
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('May 3, 2020')
    expect(dates.length).toBe(3)
  })

  it('renders blog post excerpts', () => {
    render(<Blog />)
    const matches = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(matches.length).toBeGreaterThanOrEqual(1)
  })
})
