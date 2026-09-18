import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading', () => {
    render(<Blog />)
    expect(screen.getByText(/recent/i)).toBeInTheDocument()
  })

  it('renders three blog posts', () => {
    render(<Blog />)
    const links = screen.getAllByText(/finance and legal/i)
    expect(links).toHaveLength(3)
  })

  it('renders Read More links', () => {
    render(<Blog />)
    const readMore = screen.getAllByText('Read More')
    expect(readMore).toHaveLength(3)
  })
})
