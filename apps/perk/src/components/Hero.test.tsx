import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/start your day/i)
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/now you can feel the energy/i)).toBeInTheDocument()
  })

  it('renders the Buy Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute('href', '#coffee')
  })
})
