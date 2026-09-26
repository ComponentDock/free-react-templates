import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders the template title', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Snaplens')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/We Create Awesome/)).toBeInTheDocument()
  })
})
