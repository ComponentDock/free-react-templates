import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { BlogPosts } from './BlogPosts'

const track = () => {
  const el = document.querySelector('[data-posts-track]') as HTMLElement
  return el.style.transform
}

describe('BlogPosts', () => {
  it('renders the heading and all five post cards with images, titles, and Read More links', () => {
    render(<BlogPosts />)
    expect(screen.getByRole('heading', { name: 'Blog Posts' })).toBeInTheDocument()

    const titles = [
      'Five quiet islands to reset your mind',
      'Packing smart for a month abroad',
      'A morning at the floating market',
      'Where to eat like a local after dark',
      'Slow travel: one bay, three weeks',
    ]
    titles.forEach((title) => {
      const card = screen.getByLabelText(`Post: ${title}`)
      expect(within(card).getByRole('heading', { name: title })).toBeInTheDocument()
      expect(within(card).getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#blog')
      expect(within(card).getByRole('img', { name: title })).toHaveAttribute(
        'src',
        expect.stringContaining('concierge-post'),
      )
    })
  })

  it('advances three cards with next and wraps to the start', () => {
    render(<BlogPosts />)
    expect(track()).toBe('translateX(0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next posts' }))
    expect(track()).toBe('translateX(-60%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next posts' }))
    expect(track()).toBe('translateX(0%)')
  })

  it('moves back with previous and wraps to the last page', () => {
    render(<BlogPosts />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous posts' }))
    expect(track()).toBe('translateX(-40%)')

    fireEvent.click(screen.getByRole('button', { name: 'Previous posts' }))
    expect(track()).toBe('translateX(0%)')
  })
})
