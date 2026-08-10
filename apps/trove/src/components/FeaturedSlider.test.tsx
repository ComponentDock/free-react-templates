import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { FeaturedSlider } from './FeaturedSlider'
import { featuredPosts } from '../data'

describe('FeaturedSlider', () => {
  it('renders a slide per featured post with title, author, date and excerpt', () => {
    render(<FeaturedSlider />)
    const section = screen.getByRole('region', { name: 'Featured posts' })
    const articles = within(section).getAllByRole('article')
    expect(articles).toHaveLength(featuredPosts.length)
    expect(within(section).getByRole('link', { name: /2nd Gen Smoke Alarm/ })).toBeInTheDocument()
    expect(screen.getAllByText('Marvel Maison')).toHaveLength(featuredPosts.length)
    expect(screen.getAllByText('13th Oct, 2018').length).toBeGreaterThan(0)
    expect(screen.getByText(/first telescope/)).toBeInTheDocument()
  })
})
