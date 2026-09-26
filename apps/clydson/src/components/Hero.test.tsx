import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Hero from './Hero'

describe('Hero', () => {
  it('renders hero heading and buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Creative/)).toBeInTheDocument()
    const hireButtons = screen.getAllByText('Hire me')
    expect(hireButtons.length).toBeGreaterThanOrEqual(1)
    const cvButtons = screen.getAllByText('Download CV')
    expect(cvButtons.length).toBeGreaterThanOrEqual(1)
  })

  it('renders subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText('Hello! This is Clydson')).toBeInTheDocument()
  })
})
