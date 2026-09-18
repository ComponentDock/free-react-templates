import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('— Rupaya')).toBeInTheDocument()
    expect(screen.getByText('— Anika')).toBeInTheDocument()
    expect(screen.getByText('— Carlos')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    const { container } = render(<Testimonials />)
    const stars = container.querySelectorAll('.fill-brand')
    expect(stars.length).toBe(15) // 3 testimonials × 5 stars
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: 'Rupaya' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Anika' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Carlos' })).toBeInTheDocument()
  })
})
