import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LatestBlogs } from './LatestBlogs'

describe('LatestBlogs', () => {
  it('renders the heading', () => {
    render(<LatestBlogs />)
    expect(screen.getByRole('heading', { name: /latest blogs/i })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<LatestBlogs />)
    const cards = screen.getAllByText(/here are the trends/i)
    expect(cards).toHaveLength(3)
  })

  it('renders read more links', () => {
    render(<LatestBlogs />)
    const readMoreLinks = screen.getAllByText('Read more')
    expect(readMoreLinks).toHaveLength(3)
  })

  it('renders author and date info', () => {
    render(<LatestBlogs />)
    const dates = screen.getAllByText(/by admin \| dec 01, 2024/i)
    expect(dates).toHaveLength(3)
  })
})
