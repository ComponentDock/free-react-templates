import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageTopRecipes } from './PageTopRecipes'
import { heroDate, pageTopLarge, pageTopSmallLeft, pageTopSmallRight } from '../data'

describe('PageTopRecipes', () => {
  it('renders the large featured recipe with an overlapping caption box', () => {
    const { container } = render(<PageTopRecipes />)
    expect(screen.getByRole('heading', { level: 3, name: pageTopLarge.title })).toBeInTheDocument()
    expect(screen.getByText(heroDate)).toBeInTheDocument()

    const caption = container.querySelector('[data-caption-box]')
    expect(caption).not.toBeNull()
    expect(caption).toHaveClass('bg-paper')
    expect(caption).toHaveClass('-mt-14')
  })

  it('renders two small posts on each side with centered titles', () => {
    const { container } = render(<PageTopRecipes />)
    const columns = container.querySelectorAll('[data-card-column]')
    expect(columns).toHaveLength(3)

    const left = columns[0]!
    const right = columns[2]!
    expect(left.querySelectorAll('img')).toHaveLength(pageTopSmallLeft.length)
    expect(right.querySelectorAll('img')).toHaveLength(pageTopSmallRight.length)

    for (const post of [...pageTopSmallLeft, ...pageTopSmallRight]) {
      expect(screen.getByRole('heading', { level: 4, name: post.title })).toBeInTheDocument()
    }
  })

  it('renders seeded placeholder images with a pink hover overlay', () => {
    const { container } = render(<PageTopRecipes />)
    const srcs = Array.from(container.querySelectorAll('img')).map((i) => i.getAttribute('src'))
    expect(srcs.every((s) => s && s.includes('picsum.photos/seed/umami-'))).toBe(true)
    const overlays = container.querySelectorAll('[data-hover-overlay]')
    expect(overlays.length).toBeGreaterThanOrEqual(5)
    for (const overlay of overlays) {
      expect(overlay).toHaveClass('bg-brand/60')
    }
  })
})
