import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryTiles } from './CategoryTiles'

describe('CategoryTiles', () => {
  it('shows three category tiles with uppercase labels and shop links', () => {
    render(<CategoryTiles />)

    expect(screen.getByRole('link', { name: 'Clothing' })).toHaveAttribute('href', '#clothing')
    expect(screen.getByRole('link', { name: 'Shoes' })).toHaveAttribute('href', '#shoes')
    expect(screen.getByRole('link', { name: 'Accessories' })).toHaveAttribute(
      'href',
      '#accessories',
    )
  })

  it('renders three photo tiles', () => {
    const { container } = render(<CategoryTiles />)
    expect(container.querySelectorAll('a[style*="background-image"]')).toHaveLength(3)
  })
})
