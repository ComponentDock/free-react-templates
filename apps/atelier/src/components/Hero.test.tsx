import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Create, Code, and Published.',
    )
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })

  it('renders feature cards', () => {
    render(<Hero />)
    expect(screen.getByText('High Quality')).toBeInTheDocument()
    expect(screen.getByText('Creative Solutions')).toBeInTheDocument()
  })

  it('renders the hero image with alt text', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /creative agency workspace/i })).toBeInTheDocument()
  })

  it('renders the quote overlay', () => {
    render(<Hero />)
    expect(screen.getByText(/Design is not just what it looks like/)).toBeInTheDocument()
  })
})
