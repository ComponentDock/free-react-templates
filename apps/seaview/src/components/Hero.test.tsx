import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the Book Your Stay heading', () => {
    render(<Hero />)

    expect(screen.getByRole('heading', { level: 1, name: /Book Your Stay/i })).toBeInTheDocument()
  })

  it('renders the subtitle text', () => {
    render(<Hero />)

    expect(screen.getByText(/Experience luxury and comfort by the sea/)).toBeInTheDocument()
  })

  it('renders the Book Now button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: /Book Now/i })).toBeInTheDocument()
  })
})
