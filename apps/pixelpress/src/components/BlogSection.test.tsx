import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BlogSection } from './BlogSection'
import { blogCards, blogFilters, blogTitle, categoryLinks, trendingItems } from '../data'

describe('BlogSection', () => {
  it('renders the title, filters and article cards', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: blogTitle })).toBeInTheDocument()
    for (const filter of blogFilters) {
      expect(screen.getByRole('button', { name: filter })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(blogCards.length)
    expect(screen.getAllByRole('link', { name: /Read More/ })).toHaveLength(blogCards.length)
  })

  it('marks the first filter as active and switches on click', async () => {
    const user = userEvent.setup()
    render(<BlogSection />)
    const racing = screen.getByRole('button', { name: 'Racing' })
    const shooters = screen.getByRole('button', { name: 'Shooters' })
    expect(racing).toHaveClass('after:bg-magenta')
    expect(shooters).not.toHaveClass('after:bg-magenta')
    await user.click(shooters)
    expect(shooters).toHaveClass('after:bg-magenta')
    expect(racing).not.toHaveClass('after:bg-magenta')
  })

  it('renders the Trending widget with four items', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'Trending' })).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 5 })).toHaveLength(trendingItems.length)
  })

  it('renders the categories widget with all links', () => {
    render(<BlogSection />)
    const categoriesWidget = screen.getByRole('heading', { name: 'categories' }).closest('div')!
    for (const link of categoryLinks) {
      expect(within(categoriesWidget).getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
