import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero heading with gold accent', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toContain('The Best')
    expect(heading.textContent).toContain('Games')
    expect(heading.textContent).toContain('Out There')
  })

  it('renders descriptive paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the latest gaming news/)).toBeInTheDocument()
  })

  it('renders Explore Games button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Explore Games' })).toBeInTheDocument()
  })
})
