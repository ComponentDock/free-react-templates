import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { followLinks, popularPosts, vote } from '../data'
import { PopularSection } from './PopularSection'

describe('PopularSection', () => {
  it('renders the section title and five overlay cards with sport tags', () => {
    render(<PopularSection />)
    expect(screen.getByRole('heading', { level: 3, name: 'Popular Post' })).toBeInTheDocument()
    expect(screen.getAllByRole('article')).toHaveLength(popularPosts.length)
    expect(screen.getAllByText('Football')).toHaveLength(2)
    expect(screen.getAllByText('Tennis')).toHaveLength(2)
    expect(screen.getAllByText('Sport')).toHaveLength(1)
    for (const post of popularPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the Follow Us rows with brand colors and fan counts', () => {
    render(<PopularSection />)
    expect(screen.getByRole('heading', { level: 3, name: 'Follow Us' })).toBeInTheDocument()
    for (const row of followLinks) {
      const link = screen.getByRole('link', { name: row.label })
      expect(link).toHaveStyle({ backgroundColor: row.bg })
      expect(screen.getByText(row.count)).toBeInTheDocument()
    }
  })

  it('renders the vote poll with controlled radios', async () => {
    const user = userEvent.setup()
    render(<PopularSection />)

    const group = screen.getByRole('radiogroup', { name: vote.question })
    expect(group).toBeInTheDocument()
    for (const option of vote.options) {
      expect(screen.getByRole('radio', { name: option })).not.toBeChecked()
    }

    const brazil = screen.getByRole('radio', { name: 'Brazil' })
    await user.click(brazil)
    expect(brazil).toBeChecked()
    expect(screen.getByRole('radio', { name: 'Germany' })).not.toBeChecked()
    expect(screen.getByText('Brazil').previousElementSibling).toHaveClass('bg-white')
  })
})
