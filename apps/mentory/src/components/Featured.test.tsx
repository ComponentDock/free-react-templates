import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Featured } from './Featured'

describe('Featured', () => {
  it('renders one large card with thumbnail, category, title, paragraph, icons and meta', () => {
    const { container } = render(<Featured />)
    expect(screen.getAllByRole('heading', { name: /Learning React Native/ })).toHaveLength(4)
    const large = container.querySelector('article img.w-full')
    expect(large).not.toBeNull()
    expect(screen.getAllByText('Tutorial')).toHaveLength(4)
    expect(screen.getByText('1hr 24m · Advanced · Jun 18, 2020')).toBeInTheDocument()
    const images = container.querySelectorAll('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(2)
  })

  it('stacks three small cards with 80px thumbnails', () => {
    const { container } = render(<Featured />)
    const articles = container.querySelectorAll('article')
    expect(articles).toHaveLength(4)
    const smallThumbs = container.querySelectorAll('img.h-20')
    expect(smallThumbs).toHaveLength(3)
    expect(screen.getAllByRole('heading', { name: 'Learning React Native' })).toHaveLength(4)
  })
})
