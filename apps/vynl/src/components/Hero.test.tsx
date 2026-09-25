import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Vynl Music Fest')
  })

  it('renders the description', () => {
    render(<Hero />)
    expect(screen.getByText(/Events every night/)).toBeInTheDocument()
  })

  it('renders the Join Us button', () => {
    render(<Hero />)
    const btn = screen.getByRole('link', { name: /join us/i })
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveAttribute('href', '#events')
  })
})
