import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /happy customers/i })).toBeInTheDocument()
  })

  it('renders three testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/chronic back pain/)).toBeInTheDocument()
    expect(screen.getByText(/wonderful experience/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, calming/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Brown')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    const avatarImages = avatars.filter((img) => img.getAttribute('src')?.includes('needlecraft-t'))
    expect(avatarImages.length).toBe(3)
  })
})
