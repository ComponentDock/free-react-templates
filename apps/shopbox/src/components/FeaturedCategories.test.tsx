import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { FeaturedCategories } from './FeaturedCategories'

describe('FeaturedCategories', () => {
  it('renders section heading', () => {
    render(<FeaturedCategories />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Shop by Category')
  })

  it('renders 4 category cards', () => {
    render(<FeaturedCategories />)
    expect(screen.getByText('Fashion')).toBeInTheDocument()
    expect(screen.getByText('Accessories')).toBeInTheDocument()
    expect(screen.getByText('Footwear')).toBeInTheDocument()
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
  })

  it('each category card has an image', () => {
    render(<FeaturedCategories />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(4)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src')
      expect(img.getAttribute('src')).toContain('picsum.photos/seed/shopbox-cat')
    })
  })

  it('each category card links somewhere', () => {
    render(<FeaturedCategories />)
    const links = screen.getAllByText('Fashion').map((el) => el.closest('a'))
    expect(links[0]).toHaveAttribute('href', '#')
  })

  it('category cards are clickable', async () => {
    const user = userEvent.setup()
    render(<FeaturedCategories />)
    await user.click(screen.getByText('Fashion'))
    expect(screen.getByText('Fashion')).toBeInTheDocument()
  })

  it('uses 2-column grid on mobile, 4 on desktop', () => {
    render(<FeaturedCategories />)
    const grid = screen.getByText('Fashion').closest('.grid')!
    expect(grid.className).toContain('grid-cols-2')
    expect(grid.className).toContain('md:grid-cols-4')
  })
})
