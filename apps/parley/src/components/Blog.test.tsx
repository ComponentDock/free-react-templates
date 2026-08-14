import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import userEvent from '@testing-library/user-event'
import { Blog } from './Blog'
import { blog } from '../data'

describe('Blog', () => {
  it('renders the subheading, heading and intro paragraph', () => {
    render(<Blog />)
    expect(screen.getByText(blog.subheading)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: blog.heading })).toBeInTheDocument()
    expect(screen.getByText(blog.intro)).toBeInTheDocument()
  })

  it('renders three blog cards with date badges, meta and Read More links', async () => {
    render(<Blog />)
    const cards = screen.getAllByRole('article')
    expect(cards).toHaveLength(3)
    expect(screen.getAllByText('Finance And Legal Working Streams Occur Throughout')).toHaveLength(
      3,
    )
    expect(screen.getAllByText('15')).toHaveLength(3)
    expect(screen.getAllByText('Oct.')).toHaveLength(3)
    expect(screen.getAllByText('2019')).toHaveLength(3)
    expect(screen.getAllByText('Admin · 3')).toHaveLength(3)
    const readMore = screen.getAllByRole('link', { name: 'Read More' })[0]!
    expect(readMore).toHaveAttribute('href', '#blog')
    readMore.addEventListener('click', (event) => event.preventDefault(), { once: true })
    await userEvent.click(readMore)
  })
})
