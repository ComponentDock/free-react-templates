import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get In Touch')
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/we'd love to hear from you/i)).toBeInTheDocument()
  })
})
