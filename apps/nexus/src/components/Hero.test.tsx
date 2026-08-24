import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByText(/We are web agency based in Los Angeles, CA/)).toBeInTheDocument()
  })

  it('renders primary pills', () => {
    render(<Hero />)
    expect(screen.getByText('Technology')).toBeInTheDocument()
    expect(screen.getByText('Marketing')).toBeInTheDocument()
    expect(screen.getByText('Product & Design')).toBeInTheDocument()
  })

  it('renders secondary pills', () => {
    render(<Hero />)
    expect(screen.getByText('Strategic Consulting')).toBeInTheDocument()
    expect(screen.getByText('Business Synergies')).toBeInTheDocument()
    expect(screen.getByText('Fundraising')).toBeInTheDocument()
  })
})
