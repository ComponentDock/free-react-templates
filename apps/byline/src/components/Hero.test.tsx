import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the featured post title', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/latest summer collection/i)
  })

  it('renders the post date', () => {
    render(<Hero />)
    expect(screen.getByText(/may 01, 2024/i)).toBeInTheDocument()
  })

  it('renders the post excerpt', () => {
    render(<Hero />)
    expect(screen.getByText(/curated picks/i)).toBeInTheDocument()
  })

  it('renders the Read More button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /read more/i })).toBeInTheDocument()
  })

  it('has a background image', () => {
    render(<Hero />)
    const bgDiv = document.querySelector('[style*="byline-hero1"]')
    expect(bgDiv).toBeInTheDocument()
  })
})
