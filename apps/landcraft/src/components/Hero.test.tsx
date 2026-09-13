import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the welcome heading', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Landcraft')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/professional landscaping company/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Read More')).toBeInTheDocument()
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the background image', () => {
    render(<Hero />)
    const img = screen.getByRole('img', { name: /hero background/i })
    expect(img).toBeInTheDocument()
  })
})
