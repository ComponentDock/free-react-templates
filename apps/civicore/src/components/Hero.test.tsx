import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /find your dream job/i })).toBeInTheDocument()
  })

  it('renders the Explore Now button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /explore now/i })).toBeInTheDocument()
  })
})
