import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and Get Started button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/best place on web/i)
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders the descriptive paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/metropolitan world/i)).toBeInTheDocument()
  })
})
