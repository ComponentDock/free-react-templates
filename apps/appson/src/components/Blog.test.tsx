import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the heading and three posts with read-more links', () => {
    render(<Blog />)

    expect(screen.getByRole('heading', { level: 2, name: 'Our Latest Blog' })).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 3, name: 'Work For Success' })).toHaveLength(3)
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)

    for (let index = 1; index <= 3; index += 1) {
      expect(screen.getByRole('img', { name: `Appson blog post ${index}` })).toBeInTheDocument()
    }
  })
})
