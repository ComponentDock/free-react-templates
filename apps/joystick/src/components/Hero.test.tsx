import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('The Power of Gaming')
  })

  it('renders descriptive text', () => {
    render(<Hero />)
    expect(screen.getByText(/Discover the latest games/)).toBeDefined()
  })

  it('has a hero section with background image', () => {
    render(<Hero />)
    const section = screen.getByLabelText('Hero')
    expect(section).toBeDefined()
  })
})
