import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and blurb', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/make your reservation/i)
    expect(screen.getByText(/lorem ipsum/i)).toBeInTheDocument()
  })

  it('renders the reservation form card', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /check availability/i })).toBeInTheDocument()
    expect(screen.getByRole('textbox', { name: /your destination/i })).toBeInTheDocument()
  })
})
