import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { featuredItems } from '../data'
import { FeaturedPromos } from './FeaturedPromos'

describe('FeaturedPromos', () => {
  it('renders two featured panels with SEE MORE buttons', () => {
    const { container } = render(<FeaturedPromos />)
    const buttons = screen.getAllByRole('link', { name: featuredItems[0].button })
    expect(buttons).toHaveLength(featuredItems.length)
    expect(container.querySelectorAll('img')).toHaveLength(featuredItems.length)
  })
})
