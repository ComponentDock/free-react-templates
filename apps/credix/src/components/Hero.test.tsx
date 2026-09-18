import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /get your loan now/i })).toBeInTheDocument()
    expect(screen.getByText('2 years interest')).toBeInTheDocument()
  })

  it('renders the Discover button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Discover' })).toBeInTheDocument()
  })
})
