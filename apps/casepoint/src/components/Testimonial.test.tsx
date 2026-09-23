import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders testimonial quote', () => {
    render(<Testimonial />)
    expect(screen.getByText(/consectetur adipiscing elit/i)).toBeInTheDocument()
  })

  it('renders founder name', () => {
    render(<Testimonial />)
    expect(screen.getByText('Oliva Jems')).toBeInTheDocument()
  })

  it('renders founder role', () => {
    render(<Testimonial />)
    expect(screen.getByText('Chief Lawyer')).toBeInTheDocument()
  })

  it('renders founder photo', () => {
    render(<Testimonial />)
    const img = screen.getByAltText('Oliva Jems')
    expect(img).toHaveAttribute('src', 'https://picsum.photos/seed/casepoint-founder/80/80')
  })

  it('renders quote SVG icon', () => {
    const { container } = render(<Testimonial />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
