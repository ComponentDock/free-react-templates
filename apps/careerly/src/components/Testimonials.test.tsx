import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders all 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeDefined()
    expect(screen.getByText('Michael Chen')).toBeDefined()
    expect(screen.getByText('Emily Rodriguez')).toBeDefined()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/helped me land my dream job/)).toBeDefined()
    expect(screen.getByText(/found qualified candidates quickly/)).toBeDefined()
    expect(screen.getByText(/hired over 15 people/)).toBeDefined()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Software Developer at TechNova')).toBeDefined()
    expect(screen.getByText('Marketing Manager at PrimeCo')).toBeDefined()
    expect(screen.getByText('HR Director at SignalWave')).toBeDefined()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBe(3)
  })
})
