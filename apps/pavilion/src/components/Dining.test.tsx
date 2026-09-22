import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Dining } from './Dining'

describe('Dining', () => {
  it('renders the Dining and Drinks heading', () => {
    render(<Dining />)
    expect(screen.getByRole('heading', { name: /Dining and Drinks/i })).toBeInTheDocument()
  })

  it('renders the Swimming Pool heading', () => {
    render(<Dining />)
    expect(screen.getByRole('heading', { name: /Swimming Pool/i })).toBeInTheDocument()
  })

  it('renders View Details links for both sections', () => {
    render(<Dining />)
    const links = screen.getAllByRole('link', { name: /View Details/i })
    expect(links).toHaveLength(2)
  })

  it('renders images for both sections', () => {
    render(<Dining />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(2)
  })
})
