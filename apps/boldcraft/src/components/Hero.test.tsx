import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Marcus Cole/)).toBeInTheDocument()
    expect(screen.getByText(/Digital Product Designer/)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Head of design at Creative Studio')).toBeInTheDocument()
  })

  it('renders the portrait image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Marcus Cole portrait')
    expect(img).toBeInTheDocument()
  })
})
