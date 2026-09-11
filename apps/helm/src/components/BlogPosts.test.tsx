import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogPosts } from './BlogPosts'

describe('BlogPosts', () => {
  it('renders four blog post cards', () => {
    render(<BlogPosts />)

    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
  })

  it('renders post titles and dates', () => {
    render(<BlogPosts />)

    expect(screen.getAllByText('4 latest technology for future generation').length).toBe(4)
    expect(screen.getAllByText('July 17, 2019').length).toBe(4)
  })

  it('renders Read More links for each post', () => {
    render(<BlogPosts />)

    const readMoreLinks = screen.getAllByRole('link', { name: 'Read More' })
    expect(readMoreLinks.length).toBe(4)
  })
})
