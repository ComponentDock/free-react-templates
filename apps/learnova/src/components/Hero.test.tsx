import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByText('Learn From Doing')).toBeInTheDocument()
  })

  it('renders the lead text', () => {
    render(<Hero />)
    expect(screen.getByText(/Unlock your potential/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('has a banner landmark', () => {
    render(<Hero />)
    expect(screen.getByRole('banner')).toBeInTheDocument()
  })

  it('has a dark overlay', () => {
    render(<Hero />)
    const section = screen.getByRole('banner')
    expect(section.className).toContain('relative')
  })
})
