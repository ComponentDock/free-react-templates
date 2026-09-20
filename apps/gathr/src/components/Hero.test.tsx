import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Prepare yourself for the conference')).toBeInTheDocument()
  })

  it('renders the date and location', () => {
    render(<Hero />)
    expect(screen.getByText('15-17 March 2026 — San Francisco, CA')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Tickets')).toBeInTheDocument()
  })

  it('has a heading element for accessibility', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('has a landmark section', () => {
    render(<Hero />)
    expect(document.querySelector('section')).toBeInTheDocument()
  })
})
