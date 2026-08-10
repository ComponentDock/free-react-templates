import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionTitle } from './SectionTitle'
import { PostMeta } from './PostMeta'
import { BrandIcon } from './BrandIcon'
import { trendingPosts } from '../data'

describe('SectionTitle', () => {
  it('renders the heading with the reference underline', () => {
    render(<SectionTitle>Trending</SectionTitle>)

    const heading = screen.getByRole('heading', { level: 2, name: 'Trending' })
    expect(heading).toHaveClass('border-b', 'border-ink', 'inline-block')
  })
})

describe('PostMeta', () => {
  it('renders author, category, date and read time', () => {
    render(<PostMeta post={trendingPosts[0]!} />)

    expect(screen.getByRole('link', { name: trendingPosts[0]!.author })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: trendingPosts[0]!.category })).toBeInTheDocument()
    expect(screen.getByText(trendingPosts[0]!.date)).toBeInTheDocument()
    expect(screen.getByText(trendingPosts[0]!.readTime)).toBeInTheDocument()
  })

  it('renders a decorative star icon', () => {
    const { container } = render(<PostMeta post={trendingPosts[0]!} />)

    expect(container.querySelector('svg')).toHaveAttribute('aria-hidden', 'true')
  })
})

describe('BrandIcon', () => {
  it('renders an inline SVG for each brand', () => {
    const { container } = render(
      <>
        <BrandIcon name="facebook" />
        <BrandIcon name="twitter" className="h-3 w-3" />
        <BrandIcon name="instagram" className="h-4 w-4" />
      </>,
    )

    const icons = container.querySelectorAll('svg')
    expect(icons).toHaveLength(3)
    expect(icons[0]).toHaveAttribute('aria-hidden', 'true')
    expect(icons[0]!.getAttribute('class')).toContain('h-5')
    expect(icons[1]!.getAttribute('class')).toContain('h-3')
    expect(icons[2]!.getAttribute('class')).toContain('h-4')
    expect(icons[0]!.querySelector('path')).toHaveAttribute('d')
  })
})
