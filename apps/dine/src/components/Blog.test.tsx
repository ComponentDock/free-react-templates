import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders 2 blog posts with titles', () => {
    render(<Blog />)
    const posts = screen.getAllByRole('article')
    expect(posts).toHaveLength(2)
  })
})
