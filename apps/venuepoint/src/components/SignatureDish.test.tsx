import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SignatureDish } from './SignatureDish'

describe('SignatureDish', () => {
  it('renders the subtitle', () => {
    render(<SignatureDish />)
    expect(screen.getByText('Something new')).toBeInTheDocument()
  })

  it('renders the heading', () => {
    render(<SignatureDish />)
    expect(screen.getByText('Our Signature Dish')).toBeInTheDocument()
  })

  it('renders the dish name', () => {
    render(<SignatureDish />)
    expect(screen.getByText(/Pork Tenderloin marinated in Green Pepper/)).toBeInTheDocument()
  })

  it('renders the price', () => {
    render(<SignatureDish />)
    expect(screen.getByText('$20')).toBeInTheDocument()
  })

  it('renders ingredient tags', () => {
    render(<SignatureDish />)
    for (const tag of ['Pork', 'Tenderloin', 'Green Pepper', 'Veggies']) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders the Order Now button', () => {
    render(<SignatureDish />)
    expect(screen.getByRole('link', { name: /order now/i })).toBeInTheDocument()
  })

  it('renders the dish image', () => {
    render(<SignatureDish />)
    expect(screen.getByAltText(/our signature pork tenderloin dish/i)).toBeInTheDocument()
  })

  it('renders 5 star rating icons', () => {
    const { container } = render(<SignatureDish />)
    const stars = container.querySelectorAll('.fill-accent-400')
    expect(stars).toHaveLength(5)
  })
})
