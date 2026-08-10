import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Sidebar } from './Sidebar'
import {
  categories,
  categoriesHeading,
  emailLabel,
  feedsHeading,
  popularFeeds,
  sidebarSearchLabel,
  subscribeLabel,
} from '../data'

describe('Sidebar', () => {
  it('renders the search form with an input and submit button', () => {
    render(<Sidebar />)

    expect(screen.getByRole('search')).toBeInTheDocument()
    expect(screen.getByRole('searchbox', { name: sidebarSearchLabel })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Submit search' })).toBeInTheDocument()
  })

  it('renders the Categories widget with all category links', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: categoriesHeading })).toBeInTheDocument()
    for (const category of categories) {
      expect(screen.getByRole('link', { name: category })).toBeInTheDocument()
    }
  })

  it('renders the Popular Feeds widget with three feed items', () => {
    render(<Sidebar />)

    expect(screen.getByRole('heading', { name: feedsHeading })).toBeInTheDocument()
    for (const feed of popularFeeds) {
      expect(screen.getByRole('heading', { level: 4, name: feed.title })).toBeInTheDocument()
      expect(screen.getByText(feed.date)).toBeInTheDocument()
    }
  })

  it('renders the Subscribe widget and submits the email', async () => {
    const user = userEvent.setup()
    render(<Sidebar />)

    const input = screen.getByRole('textbox', { name: emailLabel })
    await user.type(input, 'reader@example.com')
    expect(input).toHaveValue('reader@example.com')
    expect(screen.getByRole('button', { name: subscribeLabel })).toBeInTheDocument()
  })
})
