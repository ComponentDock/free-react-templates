import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogTips } from './BlogTips'

describe('BlogTips', () => {
  it('renders the heading, three blog cards with titles, images, links, and dates', () => {
    render(<BlogTips />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Tips and Tricks From Our Experts' }),
    ).toBeInTheDocument()

    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)

    const links = screen.getAllByRole('link', { name: 'Continue Reading' })
    expect(links).toHaveLength(3)
  })
})
