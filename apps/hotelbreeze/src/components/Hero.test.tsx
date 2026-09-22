import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome')).toBeInTheDocument()
  })

  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Simple & Elegant')).toBeInTheDocument()
  })

  it('renders the Learn More button', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders slider navigation arrows', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Hero className="custom-class" />)
    expect(screen.getByText('Simple & Elegant').closest('section')).toHaveClass('custom-class')
  })
})
