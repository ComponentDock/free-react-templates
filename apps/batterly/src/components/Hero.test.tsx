import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading text', () => {
    render(<Hero />)
    expect(screen.getByText(/Making your life sweeter/)).toBeInTheDocument()
    expect(screen.getByText(/one bite at a time!/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Our cakes')).toBeInTheDocument()
  })

  it('renders slide navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Previous slide')).toBeInTheDocument()
    expect(screen.getByLabelText('Next slide')).toBeInTheDocument()
  })

  it('has hero background image', () => {
    render(<Hero />)
    const img = screen.getByAltText('')
    expect(img).toBeInTheDocument()
    expect(img.getAttribute('src')).toContain('batterly-hero')
  })

  it('has dark overlay', () => {
    const { container } = render(<Hero />)
    const overlay = container.querySelector('.bg-black\\/50')
    expect(overlay).toBeInTheDocument()
  })
})
