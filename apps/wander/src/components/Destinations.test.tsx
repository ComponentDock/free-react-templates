import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Destinations } from './Destinations'

describe('Destinations', () => {
  it('renders the heading and four destination cards', () => {
    render(<Destinations />)
    expect(screen.getByRole('heading', { level: 2, name: 'Top Destination' })).toBeInTheDocument()
    const titles = screen.getAllByRole('heading', { level: 3 }).map((h) => h.textContent)
    expect(titles).toEqual(['Food & Wines', 'Resort & Spa', 'Hotel Rooms', 'Mountain Climbing'])
    expect(screen.getByRole('img', { name: /gourmet table/i })).toHaveClass(
      'shadow-[0_2px_3px_rgba(0,0,0,0.2)]',
    )
    expect(screen.getByText('3,239 reviews')).toBeInTheDocument()
    expect(screen.getByText('4,921 reviews')).toBeInTheDocument()
    expect(screen.getByText('2,112 reviews')).toBeInTheDocument()
    expect(screen.getByText('6,421 reviews')).toBeInTheDocument()
  })

  it('shows star ratings with a half star for 4.5 and empty stars for 4', () => {
    const { container } = render(<Destinations />)
    expect(screen.getAllByRole('img', { name: 'Rated 4.5 out of 5' })).toHaveLength(2)
    expect(screen.getAllByRole('img', { name: 'Rated 4 out of 5' })).toHaveLength(2)
    const halfStars = container.querySelectorAll('span.overflow-hidden')
    expect(halfStars.length).toBeGreaterThanOrEqual(2)
    expect(halfStars[0]!.className).toContain('w-1/2')
  })

  it('links each destination title in teal on hover', () => {
    render(<Destinations />)
    const link = screen.getByRole('link', { name: 'Food & Wines' })
    expect(link).toHaveClass('text-ink', 'hover:text-brand')
    expect(screen.getByRole('link', { name: 'Resort & Spa' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Hotel Rooms' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Mountain Climbing' })).toBeInTheDocument()
  })
})
