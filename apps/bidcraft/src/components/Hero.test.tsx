import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'The Best Place to Buy and Sell',
    )
  })

  it('renders descriptive subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover amazing items/)).toBeInTheDocument()
  })

  it('renders Register CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Register' })).toBeInTheDocument()
  })

  it('has the hero landmark', () => {
    render(<Hero />)
    expect(screen.getByLabelText('Hero')).toBeInTheDocument()
  })
})
