import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from '../components/Hero'

describe('Hero', () => {
  it('renders the headline with super internet text', () => {
    render(<Hero />)
    expect(screen.getByText(/super internet/i)).toBeInTheDocument()
  })

  it('renders the subtext about broadband', () => {
    render(<Hero />)
    expect(screen.getByText(/high-speed broadband/i)).toBeInTheDocument()
  })

  it('renders View Packages CTA', () => {
    render(<Hero />)
    expect(screen.getByText('View Packages')).toBeInTheDocument()
  })

  it('renders Learn More link', () => {
    render(<Hero />)
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })
})
