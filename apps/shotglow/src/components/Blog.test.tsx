import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the blog heading and three blog posts', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { name: /Latest Story/i })).toBeInTheDocument()
    expect(screen.getByText(/Mad Whales Gathering Open Can't/)).toBeInTheDocument()
    expect(screen.getByText(/Creepeth Grass Brought Over Man/)).toBeInTheDocument()
    expect(screen.getByText(/Mad Whales Gathering Open Evening/)).toBeInTheDocument()
  })

  it('renders author and date for each post', () => {
    render(<Blog />)
    const authorMentions = screen.getAllByText('Michal')
    expect(authorMentions.length).toBeGreaterThanOrEqual(3)
  })
})
