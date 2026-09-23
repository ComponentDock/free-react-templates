import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders hero heading with key text', () => {
    render(<Hero />)
    expect(screen.getByText(/best place on web/i)).toBeInTheDocument()
  })

  it('renders Get Started CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get started/i })).toHaveAttribute('href', '#about')
  })

  it('renders subtitle paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/metropolitan world/i)).toBeInTheDocument()
  })
})
