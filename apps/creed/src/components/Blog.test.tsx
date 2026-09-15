import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Latest News')
  })

  it('shows all three blog posts', () => {
    render(<Blog />)
    expect(screen.getByText('New Community Rules')).toBeInTheDocument()
    expect(screen.getByText('A Perfect Afternoon at Church')).toBeInTheDocument()
    expect(screen.getByText('Bible Studies for Kids')).toBeInTheDocument()
  })

  it('has read more links for each post', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More →')
    expect(readMoreLinks).toHaveLength(3)
  })
})
