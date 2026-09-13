import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BlogSection } from './BlogSection'

describe('BlogSection', () => {
  it('renders the blog section heading', () => {
    render(<BlogSection />)
    expect(screen.getByRole('heading', { name: 'From The Blog' })).toBeInTheDocument()
  })

  it('renders three blog cards', () => {
    render(<BlogSection />)
    const articles = screen.getAllByRole('article')
    expect(articles).toHaveLength(3)
  })

  it('shows category tag "fashion" on each card', () => {
    render(<BlogSection />)
    const fashionTags = screen.getAllByText('fashion')
    expect(fashionTags).toHaveLength(3)
  })

  it('shows blog post titles', () => {
    render(<BlogSection />)
    expect(screen.getByText('Summer Fashion Trends 2024')).toBeInTheDocument()
    expect(screen.getByText('How to Style Your Wardrobe')).toBeInTheDocument()
    expect(screen.getByText('Accessorizing Like a Pro')).toBeInTheDocument()
  })

  it('shows excerpts', () => {
    render(<BlogSection />)
    expect(screen.getByText(/Discover the hottest fashion trends/)).toBeInTheDocument()
  })

  it('shows dates', () => {
    render(<BlogSection />)
    expect(screen.getByText('21.09.2024')).toBeInTheDocument()
    expect(screen.getByText('18.09.2024')).toBeInTheDocument()
    expect(screen.getByText('15.09.2024')).toBeInTheDocument()
  })

  it('shows blog images', () => {
    render(<BlogSection />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(3)
  })
})
