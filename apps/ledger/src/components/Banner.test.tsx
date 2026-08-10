import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Banner } from './Banner'
import { bannerPosts } from '../data'

describe('Banner', () => {
  it('renders both banner blocks with cover images and white cards', () => {
    render(<Banner />)
    for (const post of bannerPosts) {
      const block = screen.getByRole('img', { name: post.title })
      expect(block.style.backgroundImage).toContain(
        `picsum.photos/seed/${post.seed}/${post.width}/${post.height}`,
      )
    }
    expect(screen.getAllByText('Creative & Design')).toHaveLength(2)
    expect(screen.getAllByText(/^All said replenish/)).toHaveLength(1)
    expect(screen.getAllByText(/^Behold given land/)).toHaveLength(1)
    expect(screen.getAllByText('By Michal / March 30, 2019')).toHaveLength(2)
  })

  it('sizes the first block 36% and the second 63.5% on desktop', () => {
    render(<Banner />)
    const [first, second] = screen.getAllByRole('img')
    expect(first?.className).toContain('lg:w-[36%]')
    expect(second?.className).toContain('lg:w-[63.5%]')
  })
})
