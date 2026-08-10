import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LatestArticles } from './LatestArticles'
import { latestArticles } from '../data'

describe('LatestArticles', () => {
  it('renders the first page of cards with an enabled Load More button', () => {
    render(<LatestArticles />)
    expect(screen.getByRole('heading', { name: 'Latest Articles' })).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(8)
    const loadMore = screen.getByRole('button', { name: 'Load More' })
    expect(loadMore).toBeEnabled()
  })

  it('appends more cards on Load More and disables the button when exhausted', async () => {
    const user = userEvent.setup()
    render(<LatestArticles />)
    const loadMore = screen.getByRole('button', { name: 'Load More' })
    await user.click(loadMore)
    expect(screen.getAllByRole('link')).toHaveLength(latestArticles.length)
    expect(loadMore).toBeDisabled()
  })

  it('filters the grid by tag and resets the page size', async () => {
    const user = userEvent.setup()
    render(<LatestArticles />)
    await user.click(screen.getByRole('button', { name: 'Load More' }))
    expect(screen.getAllByRole('link')).toHaveLength(latestArticles.length)

    await user.click(screen.getByRole('button', { name: 'vogue' }))
    const vogueCount = latestArticles.filter((a) => a.category === 'vogue').length
    expect(screen.getAllByRole('link')).toHaveLength(vogueCount)
    expect(screen.getByRole('button', { name: 'Load More' })).toBeDisabled()
  })

  it('shows an empty state for a tag with no articles', async () => {
    const user = userEvent.setup()
    render(<LatestArticles />)
    await user.click(screen.getByRole('button', { name: 'more' }))
    await user.click(screen.getByRole('button', { name: 'sport' }))
    expect(screen.getByText('No articles found in this category.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Load More' })).toBeDisabled()
  })
})
