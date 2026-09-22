import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText('Enjoy A Luxury Experience')).toBeInTheDocument()
  })

  it('renders the scroll indicator', () => {
    render(<Hero />)
    expect(screen.getByText('↓')).toBeInTheDocument()
  })

  it('applies custom className', () => {
    render(<Hero className="custom-class" />)
    expect(screen.getByText('Enjoy A Luxury Experience').closest('section')).toHaveClass(
      'custom-class',
    )
  })
})
