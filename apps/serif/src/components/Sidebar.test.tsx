import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  categories,
  categoryTitle,
  emailPlaceholder,
  newsletterTagline,
  newsletterTitle,
  popularPostTitle,
  popularPosts,
  subscribeLabel,
  subscribeSuccess,
  tags,
  tagsTitle,
} from '../data'

describe('Sidebar', () => {
  it('renders the newsletter widget with an input and SUBSCRIBE button', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: newsletterTitle })).toBeInTheDocument()
    expect(screen.getByText(newsletterTagline)).toBeInTheDocument()
    expect(screen.getByPlaceholderText(emailPlaceholder)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })

  it('shows a success message instead of the form after subscribing', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    await user.type(screen.getByPlaceholderText(emailPlaceholder), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: subscribeLabel }))

    expect(screen.getByText(subscribeSuccess)).toBeInTheDocument()
    expect(screen.queryByPlaceholderText(emailPlaceholder)).not.toBeInTheDocument()
  })

  it('renders the category widget with five entries and post counts', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: categoryTitle })).toBeInTheDocument()
    for (const category of categories) {
      expect(screen.getByText(category.name)).toBeInTheDocument()
      expect(screen.getByText(`(${category.count})`)).toBeInTheDocument()
    }
  })

  it('renders the popular post widget with thumbnails, titles and meta', () => {
    const { container } = render(<Sidebar />)

    expect(screen.getByRole('heading', { name: popularPostTitle })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(popularPosts.length)
    for (const post of popularPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
    expect(screen.getAllByText(/Admin \| Dec 15/)).toHaveLength(popularPosts.length)
  })

  it('renders the tag cloud with all pills', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: tagsTitle })).toBeInTheDocument()
    for (const tag of tags) {
      expect(screen.getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
