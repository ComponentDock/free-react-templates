import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, fireEvent, render, screen } from '@testing-library/react'
import {
  BLOG_AUTHOR_NAME,
  BLOG_AUTHOR_ROLE,
  BLOG_HEADING,
  BLOG_POSTS,
  BLOG_POST_DATE,
  CAROUSEL_INTERVAL_MS,
} from '../data'
import { BlogCarousel } from './BlogCarousel'

afterEach(() => {
  vi.useRealTimers()
  cleanup()
})

describe('BlogCarousel', () => {
  it('renders the indigo band heading, lead and the first page of posts', () => {
    render(<BlogCarousel />)
    expect(screen.getByRole('region', { name: 'Blog updates' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: BLOG_HEADING })).toBeInTheDocument()
    expect(screen.getByText(BLOG_POSTS[0].title)).toBeInTheDocument()
    expect(screen.getByText(BLOG_POSTS[1].title)).toBeInTheDocument()
    expect(screen.getByText(BLOG_POSTS[2].title)).toBeInTheDocument()
    expect(screen.queryByText(BLOG_POSTS[3].title)).not.toBeInTheDocument()
  })

  it('shows date, author and role copy on every visible card', () => {
    const { container } = render(<BlogCarousel />)
    expect(screen.getAllByText(BLOG_POST_DATE)).toHaveLength(3)
    expect(screen.getAllByText(`by ${BLOG_AUTHOR_NAME}`)).toHaveLength(3)
    expect(screen.getAllByText(BLOG_AUTHOR_ROLE)).toHaveLength(3)
    const images = container.querySelectorAll('img')
    expect(images).toHaveLength(6) // 3 thumbs + 3 avatars
  })

  it('navigates pages with next, prev (wrapping) and dots', () => {
    render(<BlogCarousel />)
    const dots = screen.getAllByRole('button', { name: /Go to page/ })
    expect(dots).toHaveLength(4)

    fireEvent.click(screen.getByRole('button', { name: 'Next posts' }))
    expect(screen.getByText(BLOG_POSTS[3].title)).toBeInTheDocument()
    expect(screen.queryByText(BLOG_POSTS[0].title)).not.toBeInTheDocument()
    expect(dots[1]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous posts' }))
    expect(screen.getByText(BLOG_POSTS[0].title)).toBeInTheDocument()
    expect(dots[0]).toHaveAttribute('aria-current', 'true')

    // Prev from page 0 wraps to the last page.
    fireEvent.click(screen.getByRole('button', { name: 'Previous posts' }))
    expect(screen.getByText(BLOG_POSTS[9].title)).toBeInTheDocument()
    expect(dots[3]).toHaveAttribute('aria-current', 'true')

    // Next from the last page wraps back to page 0.
    fireEvent.click(screen.getByRole('button', { name: 'Next posts' }))
    expect(screen.getByText(BLOG_POSTS[0].title)).toBeInTheDocument()

    // A dot click jumps straight to that page.
    fireEvent.click(screen.getAllByRole('button', { name: /Go to page/ })[2] as HTMLElement)
    expect(screen.getByText(BLOG_POSTS[6].title)).toBeInTheDocument()
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances every interval and wraps, and clears the timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<BlogCarousel />)
    expect(screen.getByText(BLOG_POSTS[0].title)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(CAROUSEL_INTERVAL_MS)
    })
    expect(screen.getByText(BLOG_POSTS[3].title)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(CAROUSEL_INTERVAL_MS * 3)
    })
    expect(screen.getByText(BLOG_POSTS[0].title)).toBeInTheDocument()
    expect(vi.getTimerCount()).toBe(1)

    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
