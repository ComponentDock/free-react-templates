import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the banner heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Give a hand')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /to make the better world/i })).toBeInTheDocument()
  })

  it('renders description paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Join us in making a difference/i)).toBeInTheDocument()
  })

  it('renders Donate Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /donate now/i })).toBeInTheDocument()
  })

  it('renders See Causes button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /see causes/i })).toBeInTheDocument()
  })
})
