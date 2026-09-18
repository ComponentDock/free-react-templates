import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Build')
  })

  it('renders the description text', () => {
    render(<Hero />)
    expect(screen.getByText(/far from the countries Vokalia/i)).toBeInTheDocument()
  })

  it('renders Our Services button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /our services/i })).toBeInTheDocument()
  })

  it('renders Request A Quote button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /request a quote/i })).toBeInTheDocument()
  })
})
