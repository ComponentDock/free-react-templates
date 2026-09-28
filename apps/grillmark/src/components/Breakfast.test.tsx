import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Breakfast } from './Breakfast'

describe('Breakfast', () => {
  it('renders the heading and description', () => {
    render(<Breakfast />)
    expect(
      screen.getByRole('heading', { name: /Daily Food Courses with Drinks/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Start your morning/i)).toBeInTheDocument()
  })

  it('shows food images', () => {
    render(<Breakfast />)
    const images = screen.getAllByRole('img')
    const foodImages = images.filter((img) =>
      img.getAttribute('src')?.includes('grillmark-breakfast'),
    )
    expect(foodImages.length).toBeGreaterThanOrEqual(2)
  })

  it('displays opening hours and location details', () => {
    render(<Breakfast />)
    expect(screen.getByText(/Opening Hours/)).toBeInTheDocument()
    expect(screen.getByText(/7:00 AM — 11:00 AM/)).toBeInTheDocument()
    expect(screen.getByText(/Location/)).toBeInTheDocument()
  })
})
