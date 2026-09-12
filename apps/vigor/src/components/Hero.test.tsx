import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders hero headings', () => {
    render(<Hero />)
    expect(screen.getByText(/Crossfit is for/)).toBeDefined()
    expect(screen.getByText(/Everyone/)).toBeDefined()
  })

  it('renders subheading', () => {
    render(<Hero />)
    expect(screen.getByText('Shape your body')).toBeDefined()
  })

  it('renders section with home id', () => {
    const { container } = render(<Hero />)
    expect(container.querySelector('#home')).toBeDefined()
  })
})
