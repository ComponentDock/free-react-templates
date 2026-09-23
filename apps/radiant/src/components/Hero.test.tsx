import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and feature cards', () => {
    render(<Hero />)

    expect(screen.getByText(/Design is not just what it looks like/)).toBeInTheDocument()
    expect(screen.getByText('Creative')).toBeInTheDocument()
    expect(screen.getByText('Design')).toBeInTheDocument()
  })

  it('renders the hero image and modern design overlay', () => {
    render(<Hero />)

    expect(screen.getByAltText('Modern office workspace')).toBeInTheDocument()
    expect(screen.getByText('Modern Design')).toBeInTheDocument()
  })

  it('feature cards have descriptions', () => {
    render(<Hero />)

    const descriptions = screen.getAllByText(/Far far away, behind the word mountains/)
    expect(descriptions.length).toBeGreaterThanOrEqual(3)
  })
})
