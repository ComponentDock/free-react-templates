import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import { TopSelling } from './TopSelling'

describe('TopSelling', () => {
  it('renders section title', () => {
    render(<TopSelling />)
    expect(screen.getByText('Top Selling')).toBeInTheDocument()
  })

  it('renders category tabs', () => {
    render(<TopSelling />)
    expect(screen.getByRole('button', { name: 'Laptops' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Smartphones' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Cameras' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Accessories' })).toBeInTheDocument()
  })

  it('shows product cards for active tab (Laptops)', () => {
    render(<TopSelling />)
    expect(screen.getByText('Dell XPS 15')).toBeInTheDocument()
    expect(screen.getByText('$1199')).toBeInTheDocument()
  })

  it('switches products when tab is clicked', async () => {
    const user = userEvent.setup()
    render(<TopSelling />)
    await user.click(screen.getByRole('button', { name: 'Smartphones' }))
    expect(screen.getByText('iPhone 16 Pro')).toBeInTheDocument()
    expect(screen.getByText('$1099')).toBeInTheDocument()
  })

  it('renders sale and new labels', () => {
    render(<TopSelling />)
    expect(screen.getByText('sale')).toBeInTheDocument()
  })

  it('renders old price with strikethrough', () => {
    render(<TopSelling />)
    expect(screen.getByText('$1399')).toBeInTheDocument()
    const oldPrice = screen.getByText('$1399')
    expect(oldPrice.className).toContain('line-through')
  })

  it('renders add to cart buttons', () => {
    render(<TopSelling />)
    const buttons = screen.getAllByText('Add to Cart')
    expect(buttons.length).toBeGreaterThan(0)
  })

  it('renders product images with picsum', () => {
    render(<TopSelling />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThan(0)
    expect(images[0]).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
  })
})
