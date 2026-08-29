import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Calendar & Schedule Dashboard',
    )
  })

  it('renders a descriptive subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/view your year, month, and day at a glance/i)).toBeInTheDocument()
  })

  it('renders a calendar icon', () => {
    const { container } = render(<Hero />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
  })
})
