import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading in white', () => {
    render(<Testimonials />)

    expect(screen.getByText('Kinds Words From Customers')).toBeInTheDocument()
  })

  it('renders 4 testimonial cards', () => {
    render(<Testimonials />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mike Johnson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Wilson')).toBeInTheDocument()
  })

  it('renders testimonial positions', () => {
    render(<Testimonials />)

    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Designer, CreativeStudio')).toBeInTheDocument()
    expect(screen.getByText('Writer, BookWorld')).toBeInTheDocument()
    expect(screen.getByText('Editor, PagePress')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)

    const avatars = screen.getAllByRole('img', { name: /John|Jane|Mike|Sarah/ })
    expect(avatars).toHaveLength(4)
  })
})
