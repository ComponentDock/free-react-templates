import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Enjoy our Client/i })).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Davis')).toBeInTheDocument()
  })

  it('renders star ratings for each testimonial', () => {
    render(<Testimonials />)
    const ratings = screen.getAllByText('5 out of 5 stars')
    expect(ratings).toHaveLength(3)
  })

  it('renders review text for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/sourdough bread is absolutely incredible/i)).toBeInTheDocument()
    expect(screen.getByText(/order their pastries every weekend/i)).toBeInTheDocument()
    expect(screen.getByText(/pizza is out of this world/i)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByRole('img', { name: 'Sarah Johnson' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-avatar1'),
    )
    expect(screen.getByRole('img', { name: 'Michael Chen' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-avatar2'),
    )
    expect(screen.getByRole('img', { name: 'Emily Davis' })).toHaveAttribute(
      'src',
      expect.stringContaining('loaf-avatar3'),
    )
  })

  it('has background image and overlay', () => {
    render(<Testimonials />)
    const section = screen.getByRole('heading', { name: /Enjoy our Client/i }).closest('section')!
    expect(section.style.backgroundImage).toContain('picsum.photos')
    expect(section.querySelector('.bg-navy\\/80')).toBeInTheDocument()
  })
})
