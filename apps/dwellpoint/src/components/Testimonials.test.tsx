import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText("Client's Feedback")).toBeInTheDocument()
  })

  it('renders description text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/clients trust us/)).toBeInTheDocument()
  })

  it('renders all three testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Cordelia Barton')).toBeInTheDocument()
    expect(screen.getByText('Marcus Wells')).toBeInTheDocument()
    expect(screen.getByText('Anika Patel')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Director of Acquisitions')).toBeInTheDocument()
    expect(screen.getByText('Homeowner')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    const testimonialAvatars = avatars.filter((img) =>
      img.getAttribute('src')?.includes('dwellpoint-t'),
    )
    expect(testimonialAvatars).toHaveLength(3)
  })
})
