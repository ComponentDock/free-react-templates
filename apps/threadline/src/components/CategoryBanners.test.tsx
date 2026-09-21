import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CategoryBanners } from './CategoryBanners'

describe('CategoryBanners', () => {
  it('renders three category banners', () => {
    render(<CategoryBanners />)
    expect(screen.getByText('Clothing Collections 2030')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Shoes Spring 2030')).toBeInTheDocument()
  })

  it('renders shop now links for each category', () => {
    render(<CategoryBanners />)
    const links = screen.getAllByText('Shop now')
    expect(links).toHaveLength(3)
  })
})
