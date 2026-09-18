import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Now you can watch the Talent')).toBeInTheDocument()
  })

  it('renders heading', () => {
    render(<Hero />)
    expect(screen.getByText("Let's Explore Idea!")).toBeInTheDocument()
  })

  it('renders CTA button with correct link', () => {
    render(<Hero />)
    const cta = screen.getByText('Explore Now')
    expect(cta).toBeInTheDocument()
    expect(cta.closest('a')).toHaveAttribute('href', '#portfolio')
  })
})
