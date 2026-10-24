import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('shows the heading and three blog posts with titles and read-more links', () => {
    render(<Blog />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Latest news from our blog' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 3, name: /the best diet for senior dogs/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /how to introduce a new kitten/i }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: /keeping cats entertained indoors/i }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More' })).toHaveLength(3)
  })
})
