import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('The Future of Innovation')).toBeInTheDocument()
    expect(screen.getByText('Get Your Ticket')).toBeInTheDocument()
    expect(screen.getByText('Learn More')).toBeInTheDocument()
  })

  it('renders date and location', () => {
    render(<Hero />)
    expect(screen.getByText(/April 17/)).toBeInTheDocument()
    expect(screen.getByText(/Vancouver/)).toBeInTheDocument()
  })
})
