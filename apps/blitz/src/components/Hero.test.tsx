import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Modern design easy to use')
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/Maecenas id orci/)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /discover more/i })).toBeInTheDocument()
  })

  it('renders slide navigation buttons', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /previous slide/i })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /next slide/i })).toBeInTheDocument()
  })

  it('renders scroll down link', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /scroll down/i })).toBeInTheDocument()
  })
})
