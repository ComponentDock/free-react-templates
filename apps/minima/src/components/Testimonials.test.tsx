import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from '../components/Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /clients say about us/i })).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    const names = ['Roger Scott', 'Sarah Connor', 'David Chen']
    names.forEach((name) => {
      expect(screen.getByText(name)).toBeInTheDocument()
    })
  })

  it('renders positions', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
    expect(screen.getByText('Project Director')).toBeInTheDocument()
    expect(screen.getByText('Lead Designer')).toBeInTheDocument()
  })

  it('renders quote text', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(/far far away/i)
    expect(quotes.length).toBe(3)
  })

  it('renders author avatars', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    const authorAvatars = avatars.filter((img) => img.getAttribute('alt')?.includes('avatar'))
    expect(authorAvatars.length).toBe(3)
  })
})
