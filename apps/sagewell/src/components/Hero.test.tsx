import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Boost up your skills/)).toBeInTheDocument()
  })

  it('renders two CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
    expect(screen.getByText('Take a Tour')).toBeInTheDocument()
  })

  it('has a background image', () => {
    const { container } = render(<Hero />)
    const img = container.querySelector('img')
    expect(img).toBeInTheDocument()
  })
})
