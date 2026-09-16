import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading', () => {
    render(<Hero />)
    expect(screen.getByText('Building The Hope')).toBeInTheDocument()
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Learn about our mission/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
  })

  it('has data-testid', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })
})
