import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the welcome heading and garage name', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Welcome To/)
    expect(heading.textContent).toMatch(/Veloce Garage/)
  })

  it('renders the subtitle description', () => {
    render(<Hero />)

    expect(screen.getByText(/Professional automotive services/)).toBeInTheDocument()
  })

  it('renders the Our Services CTA button', () => {
    render(<Hero />)

    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
  })
})
