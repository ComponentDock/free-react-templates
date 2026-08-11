import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeaturedGrey } from './FeaturedGrey'
import { featuredHeading, featuredLarge, postImage } from '../data'

describe('FeaturedGrey', () => {
  it('renders the grey band with hairlines, centered heading and two large cards', () => {
    const { container } = render(<FeaturedGrey />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('bg-grey', 'border-y', 'border-line')
    expect(screen.getByRole('heading', { level: 2, name: featuredHeading })).toHaveClass(
      'text-center',
    )
    for (const post of featuredLarge) {
      expect(screen.getByRole('link', { name: post.title })).toBeInTheDocument()
    }
    expect(screen.getByRole('img', { name: featuredLarge[0]!.title })).toHaveAttribute(
      'src',
      postImage(featuredLarge[0]!, 1200, 675),
    )
  })
})
