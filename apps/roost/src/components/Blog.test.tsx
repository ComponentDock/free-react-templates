import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the section heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Blog')
  })

  it('renders 3 blog post cards with Read More links', () => {
    render(<Blog />)
    const readMoreLinks = screen.getAllByText('Read More')
    expect(readMoreLinks.length).toBe(3)
  })
})
