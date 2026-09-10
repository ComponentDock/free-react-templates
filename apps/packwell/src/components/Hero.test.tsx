import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /WE MAKE STRONGEST SERVICE/i })).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Our Service' })).toHaveAttribute('href', '#services')
    expect(screen.getByRole('link', { name: 'Get A Quote' })).toHaveAttribute('href', '#contact')
  })
})
