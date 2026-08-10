import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedSplit } from './FeaturedSplit'
import { featured } from '../data'

describe('FeaturedSplit', () => {
  it('renders the headline, excerpt, meta and dark read-more link', () => {
    render(<FeaturedSplit />)
    expect(screen.getByRole('heading', { name: featured.title })).toBeInTheDocument()
    expect(screen.getByText(featured.excerpt)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: featured.category })).toHaveClass('text-magenta')
    const readMore = screen.getByRole('link', { name: /Read More/ })
    expect(readMore).toHaveClass('text-ink')
  })
})
