import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Sidebar } from './Sidebar'
import {
  authorBio,
  authorName,
  instagramThumbs,
  latestPosts,
  newsletterHeading,
  newsletterLabel,
  newsletterSuccess,
  searchLabel,
  sidebarCategories,
  tags,
} from '../data'

describe('Sidebar', () => {
  it('renders the about-author card with image, name, bio and Read More link', () => {
    render(<Sidebar />)
    expect(screen.getByRole('img', { name: authorName })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: authorName })).toBeInTheDocument()
    expect(screen.getByText(authorBio)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
  })

  it('renders the search input with its label', () => {
    render(<Sidebar />)
    expect(screen.getByLabelText(searchLabel)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: searchLabel })).toBeInTheDocument()
  })

  it('subscribes to the newsletter and shows the success message', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    await user.type(screen.getByLabelText(newsletterLabel), 'reader@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent(newsletterSuccess)
    expect(screen.queryByLabelText(newsletterLabel)).not.toBeInTheDocument()
  })

  it('renders category tiles for every category', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Categories' })).toBeInTheDocument()
    for (const category of sidebarCategories) {
      expect(screen.getByRole('link', { name: new RegExp(category.name) })).toBeInTheDocument()
    }
  })

  it('renders the latest posts with thumbnails, titles and dates', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Latest Posts' })).toBeInTheDocument()
    for (const post of latestPosts) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
      expect(screen.getByText(post.date)).toBeInTheDocument()
    }
  })

  it('renders the advertisement block with a Discover button', () => {
    render(<Sidebar />)
    expect(screen.getByRole('img', { name: 'Advertisement' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Discover' })).toBeInTheDocument()
  })

  it('renders the instagram thumbnails and follow link', () => {
    render(<Sidebar />)
    expect(screen.getByRole('heading', { name: 'Instagram' })).toBeInTheDocument()
    for (const thumb of instagramThumbs) {
      expect(screen.getByRole('link', { name: thumb.alt })).toBeInTheDocument()
    }
    expect(screen.getByText(/Follow me/)).toBeInTheDocument()
  })

  it('renders all tags as pill links', () => {
    render(<Sidebar />)
    const tagsSection = screen.getByRole('heading', { name: 'Tags' }).closest('section')!
    for (const tag of tags) {
      expect(within(tagsSection).getByRole('link', { name: tag })).toBeInTheDocument()
    }
  })
})
