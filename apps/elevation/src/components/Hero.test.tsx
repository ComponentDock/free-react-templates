import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and call to action', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /Precise Concept/i })).toBeInTheDocument()
    expect(screen.getByText(/blank cassettes on the web/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
