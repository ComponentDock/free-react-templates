import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Blog } from './Blog'

describe('Blog', () => {
  it('renders the Latest News heading', () => {
    render(<Blog />)
    expect(screen.getByRole('heading', { level: 2, name: 'Latest News' })).toBeInTheDocument()
  })

  it('renders all three blog post titles', () => {
    render(<Blog />)
    expect(
      screen.getByText('Freight Transport in Alaska: The Haul of the Wild'),
    ).toBeInTheDocument()
    expect(screen.getByText('Delivery Your Stuff Quickly For Minimum Cost')).toBeInTheDocument()
    expect(screen.getByText('Perishable Logistics: Cold Chain on a Plane')).toBeInTheDocument()
  })

  it('renders all three blog post images', () => {
    render(<Blog />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBe(3)
    images.forEach((img) => {
      expect(img).toHaveAttribute('src', expect.stringContaining('picsum.photos'))
    })
  })

  it('renders blog post dates', () => {
    render(<Blog />)
    const dates = screen.getAllByText('June 26, 2024')
    expect(dates.length).toBe(3)
  })
})
