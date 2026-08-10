import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PostCard } from './PostCard'
import { featuredCenter, featuredLarge, featuredStacked } from '../data'

describe('PostCard', () => {
  it('renders category, title and the date/author meta line', () => {
    render(<PostCard post={featuredLarge} imageSize={[760, 520]} />)
    expect(screen.getByRole('link', { name: featuredLarge.category })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: featuredLarge.title })).toBeInTheDocument()
    expect(screen.getByText(`${featuredLarge.meta} · ${featuredLarge.author}`)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: featuredLarge.title })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })

  it('centers the details for the center variant', () => {
    const { container } = render(<PostCard post={featuredCenter} variant="center" />)
    expect(container.firstElementChild).toHaveClass('text-center')
  })

  it('renders a horizontal layout for the horizontal variant', () => {
    const { container } = render(<PostCard post={featuredStacked[0]!} variant="horizontal" />)
    expect(container.firstElementChild?.className).toContain('sm:flex-row')
  })
})
