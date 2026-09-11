import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryBanners } from './CategoryBanners'

describe('CategoryBanners', () => {
  it('renders three category banners', () => {
    render(<CategoryBanners />)
    expect(screen.getByText("Women's")).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText("Men's")).toBeInTheDocument()
  })

  it('each banner links to shop section', () => {
    render(<CategoryBanners />)
    const links = screen.getAllByText(/women's|accessories|men's/i)
    links.forEach((link) => {
      expect(link.closest('a')).toHaveAttribute('href', '#shop')
    })
  })
})
